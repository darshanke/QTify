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
          style={{ padding: "20px", verticalAlign: "middle"  }}
          
        />

        {children}
        <Button

          sx={{
            backgroundColor: "rgba(18, 18, 18, 1)",
            width: "138",
            height: "27",
          }}
        >
          <img src={giveFeedBack} alt="feedBack" className="feedBackImg" />
        </Button>
      </Box>
    </>
  );
};

export default Header;
