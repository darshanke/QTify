import React from "react";
import { Box, Card, CardMedia, Typography, Chip,CardContent} from "@mui/material";

const Album = ({ item }) => {
  console.log(item);
  if (!item) return <div>data not found</div>;

  return (
    <Box
      sx={{
        maxHeight: "232px", // Set the maximum height for the Box
        maxWidth: "159px",
        backgroundColor: "rgba(18, 18, 18, 1)",
      }}
    >
      <Card
        sx={{
          maxHeight: "205px", // Set the maximum height for the Card
          maxWidth: "159px",
          borderRadius: "4px",
        }}
      >
        <CardMedia
          component="img"
          height="170" // Image height
          image={item.image}
          alt={item.title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: "0.2rem",
            height: "35px", // Height for the CardContent
          }}
        >
          <Chip
            label={`${item.follows} follows`}
            sx={{
              position: "relative",
              top: "3px",
              backgroundColor: "rgba(18, 18, 18, 1)",
              color: "rgba(255, 255, 255, 1)",
              height: "23px",
              width: "100px",
            }}
          />
        </CardContent>
      </Card>
      <Typography
        sx={{
          textAlign: "start",
         
          color: "white",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "21px", // Adjusted line height for typography
          height: "21px", // Set the height for typography
          backgroundColor: "rgba(18, 18, 18, 1)",
        }}
      >
        {item.title}
      </Typography>
    </Box>
  );
};

export default Album;
