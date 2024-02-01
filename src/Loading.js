import React from "react";
import { Backdrop } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core";

const Loading = () => {
  return (
    <div style={{width: "100%",
    height: "100vh",
    position: "fixed"
   
   }}>
     <Backdrop
       sx={{
        //  color: "#fff",
         zIndex: (theme) => theme.zIndex.drawer + 1,
       }}
       open
     >
       <CircularProgress color="inherit" />
     </Backdrop>
   </div>
  )
}

export default Loading