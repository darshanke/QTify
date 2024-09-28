import { Box, Typography, Tabs, Tab } from "@mui/material";
import React from "react";

const Songs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const genres = [
    { id: 1, name: "Pop" },
    { id: 2, name: "Pop" },
    { id: 3, name: "Rock" },
    { id: 4, name: "Jazz" },
    { id: 5, name: "Bules" },
  ];
  return (
    <Box
      sx={{
        height: "381px",
        border: "1px 0px 0px 0px",
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
        <Typography>Show All</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs aria-label="basic tabs example">
            {genres.map((genre) => {
              <Tab label={genre.name} value={value} onChange={handleChange} />;
            })}
          </Tabs> 
        </Box>
      </Box>
    </Box>
  );
};

export default Songs;
