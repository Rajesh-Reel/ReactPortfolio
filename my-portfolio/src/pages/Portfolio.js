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
                    Slide 1</SwiperSlide>
                    <SwiperSlide>
                    <img src="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/project.png" alt="project"/>
                    Slide 2</SwiperSlide>
                    {/* <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>
            <Footer />
        </div>    
    )
}

export default Portfolio;