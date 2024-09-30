import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionGroup,
} from "@mui/joy";


const Faq = () => {
  const [expanded, setExpanded] = React.useState(false); // Track the currently expanded accordion

  // Function to handle accordion toggle
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        maxHeight: "auto",
        backgroundColor: "rgb(18,18,18,1)",
        padding: "2rem 0", // Adjusted padding
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center items horizontally
      }}
    >
      <Box
        sx={{
          fontFamily: "Poppins",
          fontSize: "50px",
          fontWeight: "600",
          lineHeight: "75px",
          textAlign: "center",
          color: "rgb(255,255,255,1)",
          marginBottom: "2rem", // Adjusted bottom margin
        }}
      >
        FAQs
      </Box>
      <AccordionGroup
        sx={{
          width: "100%",
          maxWidth: "1135px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Translucent background
            borderRadius: "10px",
            marginBottom: "1rem", // Increased margin
            color: "white",
            width: "100%",
            height: "78px",
          }}
        >
          <AccordionSummary
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
           
              color: "white",
              padding: "0 16px", // Adjusted padding
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "30px",
                textAlign: "left",
                color: "#FFFFFF",

              }}
            >
              Is Qtify free to use?
            </Typography>
           
          </AccordionSummary>
          <AccordionDetails
            sx={{
             maxHeight: "78px",
              color: "white",
            }}
          >
            Yes, Qtify is completely free to use for streaming.
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Translucent background
            borderRadius: "10px",
            marginBottom: "1rem", // Increased margin
            color: "white",
            width: "100%",
            height: "78px",
          }}
        >
          <AccordionSummary
             sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
             
                color: "white",
                padding: "0 16px", 
              }}
          >
             <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "30px",
                textAlign: "left",
                color: "#FFFFFF",

              }}
            >Can I download and listen to songs offline?</Typography>
          
          </AccordionSummary>
          <AccordionDetails
            sx={{
                alignContent:"start", 
              color: "white",
            }}
          >
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Box>
  );
};

export default Faq;
