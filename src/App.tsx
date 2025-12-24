import Test from "./components/test";
import { useLenisScroll } from "./hooks/use-lenis-scroll";
import ReactLenis from "lenis/react";

// const testVideoUrl =
//   "https://postevand-storage.fra1.cdn.digitaloceanspaces.com/mp4/section-5-desktop-900-264-crf-20-g-1.mp4";

const App = () => {
  const lenisRef = useLenisScroll();

  return (
    <ReactLenis root ref={lenisRef}>
      <Test testUrl="/test.mp4" />
    </ReactLenis>
  );
};

export default App;
