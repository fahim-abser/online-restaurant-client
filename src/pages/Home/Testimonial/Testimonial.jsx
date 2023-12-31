import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
    fetch('reviews.json')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  },[])
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"What our Client Say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=><SwiperSlide
            key={review._id}
            >
                <div className="mx-20 my-10 flex flex-col items-center">
                    <Rating style={{maxWidth:180}}
                    value={review.rating}
                    readOnly
                    ></Rating>
                    <p className="mt-16">{review.details}</p>
                    <h3 className=" text-3xl text-orange-500 mt-10">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonial;
