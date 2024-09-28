import "./Header.css";
import Header from "./Header";
import { TextField, Typography, Box, Button } from "@mui/material";
import AlbumList from "./AlbumList";
import Album from "./Album";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import Search from "@mui/icons-material/Search";
import heroImage from "../assests/heroImage.png";
import Section from "./Section";
const LandingPage = () => {
  const [TopAlbum, setTopAlbum] = useState([]);
  const [NewAlbum,setNewAlbum] = useState([]);

  const topAlbum = async () => {
    try {
      const songData = await axios.get(
        `https://qtify-backend-labs.crio.do/albums/top`
      );
      setTopAlbum(songData.data);
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
      }
    }
  };
  const newAlbum = async () => {
    try {
      const songData = await axios.get(
        ` https://qtify-backend-labs.crio.do/albums/new`
      );
      setNewAlbum(songData.data);
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
      }
    }
  };
 
  useEffect(() => {
    topAlbum();
    newAlbum();
  }, []);

  return (
    <>
      <Header>
        {
          <Box
            sx={{
              backgroundColor: "rgb(255,255,255,1)",
              height: "48px",
              maxWidth: "568px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            <TextField
              placeholder="Search a album of your choice"
              sx={{
                maxWidth: "502px",
              }}
            />
            <Button
              sx={{
                maxWidth: "66px",
              }}
            >
              <Search
                sx={{
                  height: "20px",
                  width: "20px",
                }}
              />
            </Button>
          </Box>
        }
      </Header>
      <Box
        sx={{
          backgroundColor: "rgba(18, 18, 18, 1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              width: "556px",
              height: "270px",
              color: "rgb(255,255,255,1)",
              textAlign: "center",
              alignContent: "center",
              fontVariant: "Poppins",
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "48px",
            }}
          >
            100 Thousand Songs, ad-free Over thousand of podcast episodes
          </Typography>
          <img src={heroImage} alt="HeroImage" height="212px" />
        </Box>
      </Box>

      <Box
        sx={{
          height: "592px",
          backgroundColor: "rgba(18, 18, 18, 1)",
        }}
      >
        <Section sx={{ height: "280px" }} songs={TopAlbum} sectionName="TopAlbum" />
        <Section sx={{ height: "280px" }}  songs={NewAlbum} sectionName="NewAlbums" />;
      </Box>
    </>
  );
};

export default LandingPage;
