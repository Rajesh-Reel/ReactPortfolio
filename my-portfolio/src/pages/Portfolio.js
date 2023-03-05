import "../Components/App/App.css";
import Footer from "../Components/Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function Portfolio() {
    return(
        <div>
            <div className="portfolio-content">
                <Swiper
                    pagination={{
                    type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <img src="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/project.png" alt="project"/>
                    <br/>
                    Slide 1 - Medi-Check
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/project.png" alt="project"/>
                    <br/>
                    Slide 2 - To Go List
                    </SwiperSlide>
                    {/* <SwiperSlide>Slide 3</SwiperSlide> */}
                </Swiper>
            </div>
            <Footer />
        </div>    
    )
}

export default Portfolio;

/*
slide one - medi-check
slide two? - wellness check from week 9
slide - react todo list
slide - etch a sketch
slide - tip calculator
*/