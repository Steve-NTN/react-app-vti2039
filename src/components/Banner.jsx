import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { styled } from "@mui/material";

const HomeBanner = () => {
  return (
    <StyledSwiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <img src="https://pub-static.fotor.com/assets/bg/e9f1764c-0bdc-496a-be56-2aef89924b4b.jpg" />
        <div
          className="child"
          style={{
            backgroundImage:
              "url(https://pub-static.fotor.com/assets/bg/e9f1764c-0bdc-496a-be56-2aef89924b4b.jpg)",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/originals/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg" />
        <div
          className="child"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg)",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.pinimg.com/originals/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg" />
        <div
          className="child"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/originals/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg)",
          }}
        />
      </SwiperSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  height: 350,
  ".swiper": {
    width: "100%",
    height: "100%",
  },
  ".swiper-slide": {
    position: "relative",
  },
  ".child": {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    filter: "blur(5px)",
    zIndex: -1,
    left: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },

  [theme.breakpoints.down("md")]: {
    height: 224,
    width: 164,
  },
}));

export { HomeBanner };
