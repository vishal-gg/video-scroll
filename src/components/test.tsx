import { useGSAP } from "@gsap/react";
import Video from "./video";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const testVideoUrl = "https://postevand-storage.fra1.cdn.digitaloceanspaces.com/mp4/section-5-desktop-900-264-crf-20-g-1.mp4";

const Test = ({testUrl = testVideoUrl}: {testUrl?: string}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(
    () => {
      const video = document.getElementById(
        "gsap-test-video"
      ) as HTMLVideoElement;
      if (!video) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: "+=270%",
          pin: true,
          scrub: true,
        },
      });
      
      video.onloadedmetadata = () => {
        tl.to(video, { currentTime: video.duration });
      };
    },
    { scope: containerRef }
  );
  
  if (!testUrl) return null;
  return (
    <div ref={containerRef}>
      <Video
        src={testUrl}
        videoProps={{ autoPlay: false, id: "gsap-test-video" }}
        className="h-screen"
      />
    </div>
  );
};

export default Test;
