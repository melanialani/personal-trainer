import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { exerciseVideoEmbedUrl, exerciseVideoThumbnailUrl, type Exercise, type ExerciseVideo as Video } from '../../data/exercises';

interface ExerciseVideoProps {
  exercise: Exercise;
  video: Video;
}

/**
 * YouTube demo shown as a thumbnail first; the player (youtube-nocookie) only loads when tapped,
 * so lists with many exercises stay light and nothing is sent to YouTube until the user asks.
 */
export const ExerciseVideo = ({ exercise, video }: ExerciseVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasThumbnail, setHasThumbnail] = useState(true);

  useEffect(() => {
    setIsPlaying(false);
    setHasThumbnail(true);
  }, [video.id]);

  const frameClass = video.isShort ? 'mx-auto aspect-[9/16] max-h-[420px]' : 'aspect-video w-full';

  if (isPlaying) {
    return (
      <div className={`overflow-hidden rounded-xl bg-black ${frameClass}`}>
        <iframe
          src={exerciseVideoEmbedUrl(video)}
          title={`${exercise.name} — video demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className={`group relative block overflow-hidden rounded-xl bg-black ${frameClass}`}
      aria-label={`Play video: ${exercise.name}`}
    >
      {hasThumbnail && (
        <img
          src={exerciseVideoThumbnailUrl(video)}
          alt={`${exercise.name} — video demo`}
          loading="lazy"
          onError={() => setHasThumbnail(false)}
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105">
          <Play size={22} className="ml-0.5" fill="currentColor" />
        </span>
      </span>
      <span className="absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-0.5 text-[11px] font-medium text-white">Video demo</span>
    </button>
  );
};
