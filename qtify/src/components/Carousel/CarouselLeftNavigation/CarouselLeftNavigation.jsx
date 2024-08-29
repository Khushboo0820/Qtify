import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";

export default function CarouselLefttNavigation() {
  const swiper = useSwiper();
  const [isStarting, setIsStarting] = useState(true); // Default to true initially

  useEffect(() => {
    if (!swiper) return; // Make sure swiper is initialized

    const updateState = () => {
      setIsStarting(swiper.isBeginning);
    };

    // Set initial state
    updateState();

    // Update state on slide change
    swiper.on("slideChange", updateState);

    // Cleanup on unmount
    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isStarting && (
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      )}
    </div>
  );
}
