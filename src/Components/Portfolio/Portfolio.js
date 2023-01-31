import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import Sidebar from "../../img/clock.png";
import Ecommerce from "../../img/ecommerce.png";
import portfolio from "../../img/portfolio.png";
import MusicApp from "../../img/redBus.png";
import { themeContext } from '../../Context';
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='portfolio'>
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}> Recent Project </span>
            <span> Portfolio </span>

            {/* slider */}
            <Swiper spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider">
                <SwiperSlide>
                    <a href='https://dancing-semolina-ccfa2f.netlify.app/'><img src={portfolio} alt="" height='220px' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href=' https://irfanhathoti.github.io/clock/'><img src={Sidebar} alt="" height='220px' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://github.com/irfanhathoti/ecom'><img src={Ecommerce} alt="" height='220px' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://github.com/irfanhathoti/redBus'>
                        <img src={MusicApp} alt="" height='220px' />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio