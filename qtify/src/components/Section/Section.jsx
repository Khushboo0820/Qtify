import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import FilterTab from "../FilterTab/FilterTab";

export default function Section({ data = [], type, title, filters }) {
  const [isCarousel, setIsCarousel] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(0);

  // Log the data to debug
  console.log("Data received in Section:", data);

  // Ensure filteredDataArray is initialized with a valid array
  const filteredDataArray = Array.isArray(data) ? [data] : [];

  if (filters && Array.isArray(data)) {
    filteredDataArray.push(
      ...filters.map((ele) =>
        data.filter((song) => song.genre?.key === ele.key)
      )
    );
  }

  function mapFilteredItem(dataArr) {
    return dataArr.map((arr, index) => (
      <Carousel
        key={index}
        data={arr}
        Component={(arr) => <Card data={arr} type={type} />}
      />
    ));
  }

  const handleCollapse = () => {
    setIsCarousel(!isCarousel);
  };

  return (
    <div className={styles.sectionOuter}>
      {type === "songs" && <hr className={styles.hr} />}
      <div className={styles.section_heading}>
        <h3 className={styles.section_name}>{title}</h3>
        {type !== "songs" && (
          <h4 className={styles.toggletxt} onClick={handleCollapse}>
            {!isCarousel ? "Collapse" : "Show All"}
          </h4>
        )}
      </div>
      <div>
        {/* Safeguard against undefined or empty data */}
        {Array.isArray(data) && data.length === 0 ? (
          <div className={styles.circularProgress}>
            <CircularProgress />
          </div>
        ) : type !== "songs" ? (
          <div className={styles.cards}>
            {isCarousel ? (
              <Carousel
                data={data}
                Component={(data) => <Card data={data} type={type} />}
              />
            ) : (
              <div className={styles.cardGroup}>
                {data.map((item) => (
                  <Card key={item.id} data={item} type={type} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className={styles.cards}>
            <div className={styles.filter_tabs}>
              <FilterTab
                tabLables={[{ key: "all", label: "All" }, ...filters]}
                tabData={mapFilteredItem(filteredDataArray)}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            </div>
            <hr className={styles.hr} />
          </div>
        )}
      </div>
      {title === "Top Album" && !isCarousel && <hr className={styles.hr} />}
    </div>
  );
}
