import './App.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(1, 500), Sticky());
  const FadeRight = batch(Fade())

  return (
    <ScrollContainer snap='mandatory'>
      {/* Page 1 */}
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <h1 className='heading'>We have more data then ever on crime in Seattle</h1>
        </Animator>
      </ScrollPage>
      {/* Page 2 */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <a href="https://placeholder.com"><img src="https://via.placeholder.com/1000" alt='placeholder image for data vis'/></a>
        </Animator>
      </ScrollPage>
      {/* Page 3 */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span>Welcome</span>
        </Animator>
      </ScrollPage>
      {/* Page 4 */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span>To Rainbow Connection</span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
