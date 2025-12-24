import { useEffect, useRef } from "react";
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

  return (
    <video
      ref={videoRef}
      className={cn("size-full object-cover", className)}
      playsInline
      autoPlay
      muted
      {...videoProps}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
