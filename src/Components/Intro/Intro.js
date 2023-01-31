import React, { useContext } from 'react'
import githb from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vectore1 from '../../img/Vector1.png'
import vectore2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import glassimogi from '../../img/glassesimoji.png'
import crown from '../../img/crown.png'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { motion } from '../../../node_modules/framer-motion/dist/framer-motion'

import { themeContext } from '../../Context'
import { Link } from 'react-scroll'

const Intro = () => {
    // transition
    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='intro'>
            <div className='i_left'>
                <div className='i_name'>
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Irfan Hathoti</span>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className='button i_button'>Hire me </button>
                </Link>
                <div className='i_icons'>
                    <img src={githb} alt={githb} />
                    <img src={linkedin} alt={linkedin} />
                    <img src={instagram} alt={instagram} />

                </div>
            </div>
            <div className='i_right'>
                <img src={vectore1} alt={vectore1} />
                <img src={vectore2} alt={vectore2} />
                <img src={boy} alt={boy} />

                {/* Animation */}

                <motion.img initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassimogi} alt={glassimogi} />

                <motion.div style={{ top: "-4%", left: "68%" }}
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div">
                    <FloatingDiv image={crown} text="Web" text1="Developer" />
                </motion.div>
                <motion.div initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    className="floating-div">
                    <FloatingDiv image={thumbup} text="Best Design" text1="Award" />
                </motion.div>
                <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
                <div className='blur' style={{ top: "17rem", width: '21rem', background: '#C1F5FF', height: "11rem", left: '-9rem' }}></div>
            </div>

        </div>
    )
}

export default Intro
