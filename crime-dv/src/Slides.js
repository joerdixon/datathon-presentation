import React from 'react';
import TableauReact from './TableauReact';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

// Images
import Q1plot1 from "./assets/crimerateper100k.png"
import Q1plot2 from "./assets/top5crimesbyyear.jpg"
import Q2plot1 from "./assets/q2plot2.png"

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
                <Animator class='wide-ani' animation={SlideUpScrollUp}>
                    <h1 className='heading'>We have more data than ever on crime in <span className='pop-text'>Seattle</span>.</h1>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator class='wide-ani' animation={SlideRight}>
                    <h1 className='heading'>And Seattle has more <span className='pop-text'>crime</span> than ever.</h1>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator class='wide-ani' animation={SlideUp}>
                    <h1 className='heading'>Let's look at the <span className='pop-text'>data</span>.</h1>
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
                <Animator animation={SlideUpScrollUp}>
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
                            <a href='https://public.tableau.com/app/profile/mia.pekez/viz/Firstdashboard_16768294921540/Dashboard1' target="_blank"><img width='1000px' height='100%' src={Q1plot1} /></a>
                        </figure>
                    </div>
                    <p className='tableau-text'>Click <a href='https://public.tableau.com/app/profile/mia.pekez/viz/Firstdashboard_16768294921540/Dashboard1' target='_blank' className='tableau-link'>here</a> to check out the Tableau dashboard (Highly Recommended)</p>
                </Animator>
            </ScrollPage>
            {/* Plot 2 */}
            <ScrollPage>
                <Animator animation={SlideUp}>
                    <div className='data-vis '>
                        <figure>
                            {/* Image */}
                            <a href='https://public.tableau.com/app/profile/mia.pekez/viz/Firstdashboard_16768294921540/Dashboard1' target="_blank"><img width='1000px' height='100%' src={Q1plot2} /></a>
                        </figure>
                    </div>
                    <p className='tableau-text'>Click <a href='https://public.tableau.com/app/profile/mia.pekez/viz/Firstdashboard_16768294921540/Dashboard1' target='_blank' className='tableau-link'>here</a> to check out the Tableau dashboard (Highly Recommended)</p>
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
                <Animator animation={SlideRight}>
                    <div class='question-container'>
                        <div className='question-text'>
                            <h1>What are the geographic hotspots for crime?</h1>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Data Used */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <h1>Data Used:</h1>
                    <ul>
                        <li>Supplemented our SPD Crime dataset from the original <a href='
https://dev.socrata.com/foundry/data.seattle.gov/tazs-3rd5' target='_blank' className='tableau-link'>Seattle Government API</a></li>
                        <li>Manipulated geojson data (choropleth map) to draw the borders of the seattle neighborhoods in relation to the latitude and longitude from SPD Crime data</li>
                        <li>Mapped points of high crime occurrence in each neighborhood with a further filter the user can apply to view their neighborhood in any period 2008 - 2023</li>
                    </ul>
                </Animator>
            </ScrollPage>
            {/* Map Instructions */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <h1>Using the Map</h1>
                    <p>
                        Click and drag to navigate, scroll outside of the container to continue the presentation.
                        <br></br>
                        <br></br>
                        In the bottom left, choose the type of crime you want to explore from the dropdown menu and select a timeframe from the calendar widget.
                        <br></br>
                        <br></br>
                        Then, click on the neighborhoods of interest. The count of your selected offense will appear next to the offense dropdown menu.
                    </p>
                </Animator>
            </ScrollPage>
            {/* Crime Map */}
            <ScrollPage>
                <Animator animation={SlideUp}>
                    <iframe src="https://tu21897.github.io/datathon-crime-map/"></iframe>
                </Animator>
            </ScrollPage>
            {/* Conclusions/Observations */}
            <ScrollPage>
                <Animator animation={SlideUp}>
                    <div className='text-center'>
                        <h1>Takeaways:</h1>
                        <p>
                            The neighborhood map of crime helps us visualize where the crimes are happening. It also allows us to explore which time periods had the most occurrences of crime.
                            <br></br>
                            <br></br>
                            At a broad scale, it is visually very easy for users to grasp, making it advantageous in increasing understanding of Seattle crime.
                            <br></br>
                            <br></br>
                            In the next section, we will show graphical representations of these fluctuations in crime occurrences.
                        </p>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Question 2 */}
            <ScrollPage>
                <Animator animation={SlideRight}>
                    <div class='question-container'>
                        <div className='question-text'>
                            <h1>So what can we observe with respect to the frequency of offenses within a hotspot?</h1>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Data Used */}
            <ScrollPage>
                <Animator animation={SlideRight}>
                    <h1>Data Used:</h1>
                    <ul>
                        <li>We used a sample of the original clean dataset as its smaller size allowed for an easier process.</li>
                        <li>In making the sample subset a random “shuffled” tenth of the original clean dataset, we also avoided any sampling bias in order to convey trends that are representative of the entire dataset.</li>
                    </ul>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={SlideUp}>
                    <div className='data-vis '>
                        <figure>
                            {/* Image */}
                            <a href='https://public.tableau.com/views/seattle_crime/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link' target="_blank"><img width='1000px' height='100%' src={Q2plot1} /></a>
                        </figure>
                    </div>
                    <p className='tableau-text'>Click <a href='https://public.tableau.com/views/seattle_crime/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link' target='_blank' className='tableau-link'>here</a> to check out the Tableau dashboard (Highly Recommended)</p>
                </Animator>
            </ScrollPage>
            {/* Conclusions/Observations */}
            <ScrollPage>
                <Animator animation={SlideUp}>
                    <div className='text-center'>
                        <h1>Takeaways:</h1>
                        <p>
                            By grouping offense groups by neighborhoods, we were able to look at the top three commonly occurring crimes in each neighborhood: larceny/theft, burglary/breaking & entering, and motor vehicle theft.
                            <br></br>
                            <br></br>
                            Next, evaluating the top three crimes per neighborhood on a yearly basis, the most frequent types of crimes have not changed, but the amount of crime, regardless of specific offense, has increased every year.
                            <br></br>
                            <br></br>
                            Northgate, Queen Anne, Downtown, Commercial District, and University District are reported to have the most crime over all the years.
                            <br></br>
                            <br></br>
                            When selecting a neighborhood, the dashboard also provides a seasonal report on offense type and frequency. Larceny, burglary, and destruction all dip around June, whereas larceny and burglary peak at the end of the
                        </p>
                    </div>
                </Animator>
            </ScrollPage>
            {/* Final Conclusion */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <h1>Final Thoughts</h1>
                    <p className='text-center'>
                        Through our data analysis and visualization on the SPD dataset, we have observed how the frequency and location of crime fluctuates in Seattle over time.
                        <br></br>
                        <br></br>
                        For residents of Seattle neighborhoods, having current crime data is very helpful. It provides a crucial understanding of what is happening in their area of Seattle and what precautions should be taken to lessen the probability of these crimes happening.
                        <br></br>
                        <br></br>
                        In a city where the crime rate is growing rampantly, this awareness of frequency by location is imperative, especially when deciding to buy a house, start a business or just move to Seattle. Overall, our insights help the average Seattleite navigate the city and their neighborhood with greater safety.
                    </p>
                </Animator>
            </ScrollPage>
            {/* Credits */}
            <ScrollPage>
                <Animator animation={SlideUpScrollUp}>
                    <h1>Created By</h1>
                    <div className='credits'>
                        <p>Mia Pekez</p>
                        <p>Joe Dixon</p>
                        <p>Tu Nguyun</p>
                        <p>Lily Shen</p>
                        <p>Andrea Danilla</p>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
};

export default Slides;