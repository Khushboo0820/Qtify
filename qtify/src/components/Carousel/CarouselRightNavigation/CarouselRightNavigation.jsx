import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

import { ReactComponent as RightArrow } from "../../../assets/Group 3740.svg";
import styles from "./CarouselRightNavigation.module.css";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <RightArrow
          onClick={() => {
            swiper.slideNext();
          }}
        ></RightArrow>
      )}
    </div>
  );
}