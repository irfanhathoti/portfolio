import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasess from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from "./resume.pdf"
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {
    // dark mode
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    // transition animation from framer motion

    const transition = {
        duration: 1,
        type: "spring",
    }



    return (
        <div className='services'>
            {/* left side */}
            <div className='awesome'>
                {/* dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Services</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    <br />
                    Lorem Ipsum has been the industry's standard dummy
                </span>
                <a href={Resume} download>
                    <button className='button s_button'>Download CV</button>
                </a>
                <div
                    className="blur s-blur1"
                    style={{ background: "#ABF1FF94" }}
                ></div>
            </div>

            {/* right side */}
            <div className='cards'>
                {/* first card */}
                <motion.div initial={{ left: "25rem" }} transition={transition} whileInView={{ left: "14rem" }} style={{ left: "14rem", }}> <Card emoji={HeartEmoji} heading="Design" detail='Lorem Ipsum is simply dummy text of the' /> </motion.div>
                {/* second card */}
                <motion.div style={{ top: "12rem", left: "-4rem" }} initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}> <Card emoji={Glasess} heading="Developer" detail={"HTML , CSS , JavaScript , ReactJs , Angular , NodeJs , MongoDb"} />
                </motion.div>

                {/* third card */}

                <motion.div initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition} style={{ top: "19rem", left: "12rem" }}> <Card emoji={Humble} heading={"UI/UX"} detail='Lorem Ipsum is simply dummy text of the' />
                </motion.div>
            </div>
            <div
                className="blur s-blur2"
                style={{ background: "var(--purple)" }}
            ></div>
        </div>
    )
}

export default Services