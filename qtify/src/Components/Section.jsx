import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Section.css";


import Album from "./Album";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Section = ({ sectionName,songs, isAlbum ,likes}) => {
 

  return (
    <Box
      sx={{
        height: "280px",   // Ensure this is sufficient to accommodate Swiper
        padding: "0.5rem",
        backgroundColor: "rgba(18, 18, 18, 1)",
      }}
    >
      {!isAlbum && <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingY: "1rem"
        }}
      >
        <Typography sx={{ paddingX: "1rem", color: "rgb(255,255,255,1)" }}>
          {sectionName}
        </Typography>
        <Typography sx={{ color: "rgba(52, 201, 75, 1)" }}>
          Show all
        </Typography>
      </Box>}
      
      <Box sx={{ paddingX: "2rem" }}>
      <Swiper
        slidesPerView={7}
        spaceBetween={50}
        navigation={true}
        modules={[Scrollbar, Navigation]}
        style={{ height: '232px', width: "1,353" }} // Set height of Swiper
      >
        {songs.map((item) => (
          <SwiperSlide key={item.id}>
            <Album item={item} likes={likes} />
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>
     
    </Box>
  );
};

export default Section;
