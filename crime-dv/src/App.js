import './App.css';
import Map from  './Map.js';
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
          <h1 className='heading'>We have more data then ever on crime in <span className='pop-text'>Seattle</span></h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator class='wide-ani' animation={FadeUp}>
          <h1 className='heading'>And Seattle has more <span className='pop-text'>crime</span> then ever.</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator class='wide-ani' animation={FadeUp}>
          <h1 className='heading'>Lets look at the <span className='pop-text'>data</span>.</h1>
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
            <div className='data-vis '>
              <div className='bulk-text'>
                Crimes over Time:
              </div>
              <img className='infographic' src="https://via.placeholder.com/500" alt='placeholder image for data vis' />
            </div>
            <div className='data-vis'>
              <div className='bulk-text'>
                Crimes Types over Time:
              </div>
              <img className='infographic' src="https://via.placeholder.com/500" alt='placeholder image for data vis' />
            </div>

          </div>

        </Animator>
      </ScrollPage>
      {/* Question 3*/}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div className='conclusions'>
            <h1 className='heading'>Conclusions:</h1>
            <p className='bulk-text'>Covid Increased Crime</p>
            <p className='bulk-text'>Ballard's crime increased the most</p>
            <p className='bulk-text'>Theft rose by 300%</p>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Map/>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
