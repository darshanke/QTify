import { Box, Typography, Tabs, Tab, } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Section from "./Section";

const Songs = () => {
  const [value, setValue] = useState(0);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  const handleChange = (event, newValue) => {

    setValue(newValue);
    if(newValue===0){
      setFilteredSongs(songs);
    }else {
      const filtred = songs.filter((song)=> song.genre.key === newValue);
      setFilteredSongs(filtred);
    }
  };

  const getGenres = async () => {
    try {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/genres`
      );
      // console.log(response.data);
      setGenres(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getSongs = async () => {
    try {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/songs`
      );
      setFilteredSongs(response.data);
      setSongs(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  
  useEffect(() => {
    getSongs();
    getGenres();
  }, []);


  return (
    <Box
      sx={{
        height: "381px",
        border: "1px solid transparent",
        backgroundColor: "rgba(18, 18, 18, 1)",
        color: "rgb(255,255,255,1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography sx={{ paddingX: "2rem" }}>Show All</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingX: "2rem",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" , paddingY: "1rem" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#34C94B",
              },
            }}
            className=""
          >
            <Tab
              label="All"
              sx={{
                color: "rgb(255,255,255,1)",
                "&.Mui-selected": {
                  color: "#34C94B",
                },
              }}
            />
            {genres.map((genre) => (
              <Tab
                sx={{
                  color: "rgb(255,255,255,1)",
                  "&.Mui-selected": {
                    color: "#34C94B",
                  },
                }}
                key={genre.key}
                value={genre.key}
                label={genre.label}
              />
            ))}
          </Tabs>
        </Box>
      </Box>
      <Section isAlbum  songs={filteredSongs} likes/>
    </Box>
  );
};

export default Songs;
