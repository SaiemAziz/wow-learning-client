import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import {CgProfile} from 'react-icons/cg'
import {toast} from 'react-toastify'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import master from "../images/MasterCard_Logo.jpg";
import bikash from "../images/Bikash.jpg";
import nagad from "../images/Nagad.jpg";
import rocket from "../images/Rocket.jpg";
import visa from "../images/Visa.jpg";

const Checkout = () => {
  let subject = useLoaderData();
  let { user } = useContext(AuthContext);
    let clickedPayNow = () => {
        toast.success(`Enrolled in ${subject.name} successfully`)
    }


  return (
    <div className="grid md:grid-cols-2 gap-5 p-5 m-5">

      {/* profile info    */}
      <div>
        <h1 className="text-3xl font-bold text-success">!!! WOW !!!</h1>
        <h1 className="text-2xl italic font-bold">
          {user.displayName || "No Name"}
        </h1>
        {
            user?.photoURL ?
            <img className="mx-auto rounded-xl w-1/5 md:w-2/3 my-4" alt="" src={user.photoURL} /> : 
            <CgProfile className="mx-auto rounded-full w-2/3 my-4 text-7xl" />
        }
      </div>


      {/* subject related    */}
      <div className=""> 
        <h1 className="md:text-lg text-xl font-medium">
          Welcome to learn <br />
          <span className="text-primary italic my-2 text-5xl">
            {subject.name}
          </span>
          <br />
          By WOW Learning <br />
          Join Use Today
        </h1>

        {/* carousel  */}
        <div className="card glass p-5 border-2 border-blue-600 w-fit mx-auto my-5">
          <h1 className="text-blue-500 text-left w-[250px] mx-auto mb-2">
            Payment Methods
          </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"1.7"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper w-[250px]"
          >
            <SwiperSlide>
              <img alt="" className="shadow-lg" src={master} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" className="shadow-lg" src={visa} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" className="shadow-lg" src={nagad} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" className="shadow-lg" src={bikash} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" className="shadow-lg" src={rocket} />
            </SwiperSlide>
            <Link to='/courses' onClick={clickedPayNow} className="btn btn-outline mt-5 btn-info">Pay Now</Link>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
