import { Pause, Play, PlayCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { exerciseImageUrls, exerciseVideo, exerciseVideoUrl, type Exercise } from '../../data/exercises';
import { ExerciseVideo } from './ExerciseVideo';

const FRAME_LABELS = ['1 · Start', '2 · Finish'];
const FRAME_INTERVAL_MS = 1100;

interface ExerciseDemoProps {
  exercise: Exercise;
  /** Animated loop (like a GIF) for the detail view; side-by-side frames for lists. */
  isAnimated?: boolean;
}

/** Start/finish photos from free-exercise-db (public domain) plus an embedded YouTube demo. */
export const ExerciseDemo = ({ exercise, isAnimated = false }: ExerciseDemoProps) => {
  const urls = exerciseImageUrls(exercise);
  const video = exerciseVideo(exercise);
  const [frame, setFrame] = useState(0);
  const [isVideoShown, setIsVideoShown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setFrame(0);
    setHasError(false);
    setIsVideoShown(false);
  }, [exercise.id]);

  useEffect(() => {
    if (!isAnimated || !isPlaying || urls.length < 2) return undefined;
    const timer = window.setInterval(() => setFrame((current) => (current + 1) % urls.length), FRAME_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isAnimated, isPlaying, urls.length]);

  const videoLink = (
    <a
      href={exerciseVideoUrl(exercise)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:underline"
    >
      <PlayCircle size={14} /> {video ? 'Open on YouTube' : 'Search videos on YouTube'}
    </a>
  );
  const hasPhotos = urls.length > 0 && !hasError;
  const videoPlayer = video && <ExerciseVideo exercise={exercise} video={video} />;

  if (!hasPhotos) {
    return (
      <div className="space-y-2">
        {videoPlayer}
        <div className={video ? '' : 'rounded-xl bg-slate-50 px-3 py-2.5'}>{videoLink}</div>
      </div>
    );
  }

  // Lists show the photos; the video opens inline on request.
  const listVideo = video ? (
    isVideoShown ? (
      videoPlayer
    ) : (
      <button type="button" onClick={() => setIsVideoShown(true)} className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:underline">
        <PlayCircle size={14} /> Play video demo
      </button>
    )
  ) : (
    videoLink
  );

  if (!isAnimated) {
    return (
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {urls.map((url, index) => (
            <figure key={url} className="overflow-hidden rounded-xl bg-slate-100">
              <img src={url} alt={`${exercise.name} — ${FRAME_LABELS[index]}`} loading="lazy" onError={() => setHasError(true)} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-2 py-1 text-[11px] font-medium text-slate-500">{FRAME_LABELS[index]}</figcaption>
            </figure>
          ))}
        </div>
        {listVideo}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setIsPlaying((current) => !current)}
        className="relative block w-full overflow-hidden rounded-xl bg-slate-100"
        aria-label={isPlaying ? 'Pause demo' : 'Play demo'}
      >
        {urls.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`${exercise.name} — ${FRAME_LABELS[index]}`}
            onError={() => setHasError(true)}
            className={`aspect-[4/3] w-full object-cover transition-opacity duration-300 ${index === 0 ? '' : 'absolute inset-0'} ${frame === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <span className="absolute left-2 top-2 rounded-full bg-slate-900/70 px-2 py-0.5 text-[11px] font-medium text-white">{FRAME_LABELS[frame]}</span>
        <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 text-white">
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </span>
      </button>
      {videoPlayer}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-400">Photos: free-exercise-db (public domain)</span>
        {videoLink}
      </div>
    </div>
  );
};
