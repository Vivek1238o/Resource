import React from 'react'
import TextField from '@mui/material/TextField';
import "./About.css"
const About = () => {
    return (
        <div className='about'>

            <div className="right">
                <div className="card">
                    <img src="1.png" alt="" />
                    <h4>Vivek Singh</h4>
                    <div className="container">
                        <p>I am a Full Stack Web Developer
                            and a Web Designer.<br />Currently pursuing B.Tech in Computer Science and Engineering.<br /> I am in my 3rd year of my B.Tech. I am a passionate Programmer.</p>
                    </div>
                </div>
            </div>
            <div className="left">
                <div className="card">
                    <img src="1.png" alt="" />
                    <h4>Satyam Singh</h4>
                    <div className="container">
                        <p>I am a Full Stack Web Developer and a Web Designer.Currently pursuing B.Tech in Computer Science and Engineering. I am in my 3rd year of my B.Tech. I am a passionate Programmer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About