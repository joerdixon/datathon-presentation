import './App.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(1, 500), Sticky());
  const FadeRight = batch(Fade());

  return (
    <ScrollContainer snap='mandatory'>
      {/* Introduction and Objective */}
      <ScrollPage>
        <Animator class='wide-ani' animation={ZoomInScrollOut}>
          <h1 className='heading'>We have more data then ever on crime in <span id='pop-text'>Seattle</span></h1>
        </Animator>
      </ScrollPage>
      {/* Question 1 */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div class='question-container'>
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/500" alt='placeholder image for data vis' /></a>
            <div className='question-text'>
              <h1>How has the crime rate changed since 2008?</h1>
              <h2>Data Used:</h2>
              <ul>
                <li>Total Crimes</li>
                <li>Crimes per Year</li>
                <li>Crime Type</li>
              </ul>
            </div>
          </div>
        </Animator>
      </ScrollPage>
      {/* Question 2 */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className='question-container'>
            <div className='.vis-caption'>
              <div>
                Crimes over Time:
              </div>
              <a href="https://placeholder.com"><img src="https://via.placeholder.com/200" alt='placeholder image for data vis' /></a>
            </div>
            <div className='.vis-caption'>
              <div>
                Crimes Types over Time:
              </div>
              <a href="https://placeholder.com"><img src="https://via.placeholder.com/200" alt='placeholder image for data vis' /></a>
            </div>

          </div>

        </Animator>
      </ScrollPage>
      {/* Question 3*/}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span>To Rainbow Connection</span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
