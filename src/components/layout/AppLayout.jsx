import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid, Box } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />

        <Grid sx={{ height: "calc(100vh - 4rem)", width: "100%" }}>
          <Grid container height="100%">
            <Grid
              item
              xs={4}
              height="100%"
              bgcolor="#1976d2"
              p={2}
              color="white"
            >
              First
            </Grid>
            <Grid
              item
              xs={4}
              height="100%"
              bgcolor="#9c27b0"
              p={2}
              color="white"
            >
              <WrappedComponent {...props} />
            </Grid>
            <Grid item xs={4} height="100%" bgcolor="#f5f5f5" p={2}>
              Third
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
