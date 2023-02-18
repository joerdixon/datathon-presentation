import './App.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <ScrollContainer snap='proximity'>
      {/* Page 1 */}
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span>We</span>
        </Animator>
      </ScrollPage>
      {/* Page 2 */}
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span>Are</span>
        </Animator>
      </ScrollPage>
      {/* Page 3 */}
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span>Rainbow</span>
        </Animator>
      </ScrollPage>
      {/* Page 4 */}
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span>Connection</span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
