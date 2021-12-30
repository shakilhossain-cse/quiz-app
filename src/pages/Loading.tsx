import React from "react";
import { Box, Skeleton } from "@mui/material";

const Loading: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{width:'50%',margin:'0 auto'}}>
        <Skeleton animation="wave"  sx={{paddingY:'2rem'}} />
        <Skeleton animation="wave" sx={{paddingY:'8rem'}} />
        
      </Box>
    </Box>
  );
};

export default Loading;
