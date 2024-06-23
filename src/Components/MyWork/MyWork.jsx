import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import github_icon from '../../assets/githubicon.png';

const MyWork = () => {
    // State to manage the number of initially visible projects
    const [visibleProjects, setVisibleProjects] = useState(6); // Adjust initial number as needed

    // Function to handle "Show More" button click
    const handleShowMore = () => {
        // Increase the number of visible projects
        setVisibleProjects(visibleProjects + 3); // Increase by 3, or adjust as needed
    };

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.slice(0, visibleProjects).map((work, index) => ( // Display only visibleProjects number of projects
                    <div key={index} className="mywork-item">
                        <div>
                            <a href={work.site_link} target="_blank" rel="noopener noreferrer">
                                <img src={work.w_img} alt={work.w_name} className='work_img' />
                            </a>
                        </div>
                        <div className="mywork-info">
                            <h2>{work.w_name}</h2>
                            <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                                <img src={github_icon} alt="GitHub" />
                            </a>
                        </div>
                        <h4>{work.w_desc}</h4>
                    </div>
                ))}
            </div>
            {mywork_data.length > visibleProjects && ( // Show "Show More" button if there are more projects to display
                <div className="mywork-showmore" onClick={handleShowMore}>
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            )}
        </div>
    );
};

export default MyWork;
