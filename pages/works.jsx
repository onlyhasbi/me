import Layout from "@/components/layout.component";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import { Autoplay, EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const portfolios = Array.from({ length: 10 }, (_, item) => (
    <SwiperSlide
      className="rounded-[18px] text-[22px] font-bold text-white text-center"
      key={item}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="my-">Slide {item + 1}</p>
      </div>
    </SwiperSlide>
  ));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <Layout title="Works">
      <div className="flex w-9/12 gap-40 mx-auto items-center">
        <div>
          {/*  badge in public or private */}
          <h2 className="text-3xl leading-7 cursor-pointer">
            Title Portfolio {activeIndex + 1} | badge
          </h2>
          <p className="mt-3 mb-5 text-sm leading-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            voluptate tempora sit optio distinctio, neque quo voluptatibus,
            laboriosam repellat odit suscipit totam quisquam porro magni ducimus
            quasi aperiam. Tempora, iure! about portfolio
          </p>
          <div className="cursor-pointer">Tech stack icon</div>
          <div className="my-5 flex gap-3">
            <a className="text-sm hover:underline cursor-pointer">Demo</a>
            <a className="text-sm hover:underline cursor-pointer">Source</a>
          </div>
        </div>
        <div className="relative flex justify-center items-center z-[999]">
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards,Autoplay]}
            className="w-[400px] h-[300px]"
            autoplay
          >
            {portfolios}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
