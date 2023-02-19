import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut} from "react-scroll-motion";

// Animations
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const SlideUpScrollUp = batch(Fade(), Move(1, 500), Sticky());
const FadeInScrollUp = batch(Fade(), Sticky(), MoveOut(0, -200))
const SlideRight = batch(Fade(), MoveIn(-200, 0), Sticky(), MoveOut())
const SlideUp = batch(Fade(), MoveIn(-200, 1400), Sticky(), MoveOut())



function Slides() {
    return (
        <ScrollContainer snap='mandatory'>
            {/* Introduction and Objective */}
            <ScrollPage id="top">
                <Animator class='wide-ani' animation={ZoomInScrollOut}>
                    <h1 className='heading'>We have more data then ever on crime in <span className='pop-text'>Seattle</span></h1>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator class='wide-ani' animation={SlideRight}>
                    <h1 className='heading'>And Seattle has more <span className='pop-text'>crime</span> then ever.</h1>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator class='wide-ani' animation={SlideUp}>
                    <h1 className='heading'>Lets look at the <span className='pop-text'>data</span>.</h1>
                </Animator>
            </ScrollPage>
            {/* Question 1 */}
            <ScrollPage>
                <Animator animation={SlideRight}>
                    <div class='question-container'>
                        <div className='question-text'>
                            <h1>How has the crime rate changed since 2011?</h1>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Plots */}
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <div className='data-vis '>
                        {/* Data Visualization */}
                        <figure>
                            {/* Caption */}
                            <p>Crimes over Time:</p>
                            {/* Visualizaiton */}
                            <img className='visual' src="" />
                        </figure>
                        {/* Conclusions/Observations */}
                        <div>
                            <h1>Observations:</h1>
                            <ul>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                            </ul>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Takeaways */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div className='conclusions' id='from-map'>
                        <h1 className='heading'>Takeaways:</h1>
                        <p>Covid Increased Crime</p>
                        <p>Seattle's crime increased the most</p>
                        <p>Theft rose by 300%</p>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Question 2 */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div class='question-container'>
                        <div className='question-text'>
                            <h1>How has the crime rate changed since 2008?</h1>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Plots */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div className='data-vis '>
                        {/* Data Visualization */}
                        <figure>
                            {/* Caption */}
                            <p>Crimes over Time:</p>
                            {/* Visualizaiton */}
                            <img className='visual' src="https://via.placeholder.com/500" alt='placeholder image for data vis' />
                        </figure>
                        {/* Conclusions/Observations */}
                        <div>
                            <h1>Observations:</h1>
                            <ul>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                            </ul>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Takeaways */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div className='conclusions' id='from-map'>
                        <h1 className='heading'>Takeaways:</h1>
                        <p>Covid Increased Crime</p>
                        <p>Seattle's crime increased the most</p>
                        <p>Theft rose by 300%</p>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Question 3 */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div class='question-container'>
                        <div className='question-text'>
                            <h1>How has the crime rate changed since 2008?</h1>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Plots */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div className='data-vis '>
                        {/* Data Visualization */}
                        <figure>
                            {/* Caption */}
                            <p>Crimes over Time:</p>
                            {/* Visualizaiton */}
                            <img className='visual' src="https://via.placeholder.com/500" alt='placeholder image for data vis' />
                        </figure>
                        {/* Conclusions/Observations */}
                        <div>
                            <h1>Observations:</h1>
                            <ul>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                                <li>Seattle saw the most sharp increase in crime</li>
                            </ul>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Takeaways */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div className='conclusions' id='from-map'>
                        <h1 className='heading'>Takeaways:</h1>
                        <p>Covid Increased Crime</p>
                        <p>Seattle's crime increased the most</p>
                        <p>Theft rose by 300%</p>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Map */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <a href="">
                        <button id='exit-map'>Restart</button>
                    </a>
                    <iframe src="https://tu21897.github.io/datathon-crime-map/"></iframe>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
};

export default Slides;