import { useEffect, useRef, useMemo } from "react";
import { cn } from "../lib/cn";

interface VideoSceneProps {
  src: string;
  className?: string;
  videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
}

const Video = ({ src, className, videoProps }: VideoSceneProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.setAttribute("webkit-playsinline", "");
    }
  }, []);

  // Memoize the source to prevent unnecessary re-renders
  const sourceElement = useMemo(
    () => <source src={src} type="video/mp4" />,
    [src]
  );

  return (
    <video
      ref={videoRef}
      key={src} // Prevent re-renders when src changes
      className={cn("size-full object-cover", className)}
      playsInline
      autoPlay
      muted
      preload="metadata" // Control loading behavior
      {...videoProps}
    >
      {sourceElement}
    </video>
  );
};

export default Video;