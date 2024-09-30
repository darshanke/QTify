import React from "react";
import { Box, Button } from "@mui/material";

import logo from "../assests/logo.svg";
import giveFeedBack from "../assests/giveFeedBack.svg";

const Header = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "74px",
          cursor: "pointer",
          margin: "0 auto",
          textAlign: "center",
          backgroundColor: "#66bb6a",
        }}
        className="header"
      >
        <img
          src={logo}
          alt="Qtify Logo"
          width="67"
          height="34"
          style={{
            padding: "0 32px", // Maintain horizontal padding
            marginLeft: "16px", // Ensure space to the left
            marginTop: "10px", // Adjust top margin for vertical centering
            opacity: 1, // Keep logo fully visible
            verticalAlign: "middle",
          }}
        />

        {children}
        <Box sx={{ paddingX: "16px" }}>
          <Button
            sx={{
              backgroundColor: "rgba(18, 18, 18, 1)",
              width: "138px",
              height: "47px",
              color: "#34C94B",
              borderRadius: "8px",
              fontFamily: "Poppins",
              textTransform: "none",
              textAlign: "center",
            }}
          >
            Give Feedback
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
