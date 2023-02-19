import React from 'react';
import TableauReact from './TableauReact';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

// Images
import Q1plot1 from "./assets/crimerateper100k.png"
import Q1plot2 from "./assets/top5crimesperyear.png"

// Animations
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const SlideUpScrollUp = batch(Fade(), Move(1, 500), Sticky());
const FadeInScrollUp = batch(Fade(), Sticky(), MoveOut(0, -200))
const SlideRight = batch(Fade(), MoveIn(-200, 0), Sticky(), MoveOut())
const SlideUp = batch(Fade(), MoveIn(-200, 1400), Sticky(), MoveOut())

// Embeds
const Q1Tableau = "https://public.tableau.com/app/profile/mia.pekez/viz/Firstdashboard_16768294921540/Dashboard1";

function Slides() {
    return (
        <ScrollContainer snap='mandatory'>
            {/* Introduction and Objective */}
            <ScrollPage id="top">
                <Animator class='wide-ani' animation={ZoomInScrollOut}>
                    <h1 className='heading'>We have more data then ever on crime in <span className='pop-text'>Seattle</span>.</h1>
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
            {/* Data Used */}
            <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                    <h1>Data Used:</h1>
                    <ul>
                        <li>SPD Crime Data with additional year column derived from DateTime objects acting as a flag for further grouping.</li>
                        <li>Seattle Population data with all demographics totalled to find total population.</li>
                        <li>Used R to filter the crime data between 2011 and 2020 and group it by year to keep a count of how many offenses happened per each year.</li>
                        <li>Merged data with population data to find a ratio between total offenses per year and total population per year.</li>
                        <li>Scaled by 100k to calculate the crime rate per 100k people.</li>
                    </ul>
                </Animator>
            </ScrollPage>
            {/* Plot */}
            <ScrollPage>
                <Animator animation={SlideUp}>
                    <div className='data-vis '>
                        <figure>
                            {/* Image */}
                            <a href='https://public.tableau.com/app/profile/mia.pekez/viz/Firstdashboard_16768294921540/Dashboard1' target="_blank"><img width='1300px' height='100%' src={Q1plot1} /></a>
                        </figure>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={SlideUp}>
                <div className='data-vis '>
                        <figure>
                            {/* Image */}
                            <a href='https://public.tableau.com/app/profile/mia.pekez/viz/Firstdashboard_16768294921540/Dashboard1' target="_blank"><img width='1300px' height='100%' src={Q1plot1} /></a>
                        </figure>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Conclusions/Observations */}
            <ScrollPage>
                <Animator animation={SlideUp}>
                    <div>
                        <h1>Takeaways:</h1>
                        <p>
                            We found that the increase in total offenses cannot be solely attributed to the population growth, but rather that the crime rate itself was increasing.
                            <br></br>
                            <br></br>
                            In short, there is more crime than ever. Also, the occurrence of the Covid-19 pandemic shows a correlation with the increase of crime at the end of the decade.
                        </p>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Question 2 */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <div class='question-container'>
                        <div className='question-text'>
                            <h1>What are the geographic hotspots for crime  ?</h1>
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