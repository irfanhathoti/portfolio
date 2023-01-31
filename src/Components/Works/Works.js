import React, { useContext } from 'react'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import './Works.css'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            <div className='awesome'>
                <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    <br />
                    Lorem Ipsum has been the industry's standard dummy
                    <br />
                    Lorem Ipsum has been the industry's standard dummy text of the printing
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                </span>
                <Link to="contact" smooth={true} spy={true}>
                    <button className='button s_button'>Hire me</button>
                </Link>
                <div
                    className="blur s-blur1"
                    style={{ background: "#ABF1FF94" }}
                ></div>
            </div>

            <div className='w-right'>
                <motion.div className='w-mainCircle'
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}>
                    <div className='w-secCircle'>
                        <img src={Upwork} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Amazon} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Shopify} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Facebook} alt="" />
                    </div>
                    {/* background Circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </motion.div>
            </div>
        </div>
    )
}

export default Works