import type { VerseTopic, VerseTopicGroup } from '../data/verseTopics';
import { normalizeSearch } from './prayers';

/**
 * Topics whose title, keywords or intro contain every word of the query (any order); title / keyword hits rank first.
 * Plain substring matching suits Indonesian affixes: "takut" also finds "ketakutan".
 */
export const searchVerseTopics = (topics: VerseTopic[], query: string, group: VerseTopicGroup | 'all'): VerseTopic[] => {
  const words = normalizeSearch(query).split(' ').filter(Boolean);
  const inGroup = topics.filter((topic) => group === 'all' || topic.group === group);
  if (words.length === 0) return inGroup;
  return inGroup
    .map((topic) => {
      const head = normalizeSearch(`${topic.title} ${topic.keywords.join(' ')}`);
      const body = normalizeSearch(topic.intro);
      if (!words.every((word) => head.includes(word) || body.includes(word))) return null;
      return { topic, score: words.filter((word) => head.includes(word)).length };
    })
    .filter((item): item is { topic: VerseTopic; score: number } => item !== null)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.topic);
};
