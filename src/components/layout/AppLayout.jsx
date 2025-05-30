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

        <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
          <Grid flex={4} sm={4} md={3} height={"100%"} sx={{
            display: {
              xs: "none",
              sm: "block"
            }
          }} >
            First
          </Grid>
          <Grid flex={4} xs={12} sm={8} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid flex={4} md={4} lg={3} height={"100%"}
            sx={{
              display: {
                xs: "none",
                md: "block"
              },
              padding: "2rem",
              bgcolor: "rgba(0, 0, 0, 0.85)"
            }}
          >
            Third
          </Grid >
        </Grid >
      </>
    );
  };
};

export default AppLayout;
