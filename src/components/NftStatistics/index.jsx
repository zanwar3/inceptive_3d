import { Box, Button, Grid } from "@mui/material";
import React from "react";
import useStyles from "./style";
import Typography from "@mui/material/Typography";

// *******************************************************************

const NftStatistics = ({ item, type }) => {
  const classes = useStyles();

  return type === "status"
    ? item?.length > 0 && (
        <Grid container>
          {item?.map((item, index) => {
            return (
              <Grid item xs={4} sm={3} md={3} lg={2} key={index}>
                <Typography className={classes.container}>
                  <span
                    style={{
                      color: "#BF3243",
                    }}
                  >
                    {item?.title}
                  </span>
                  <span style={{ color: "white" }}>{item?.value}</span>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      )
    : item?.length > 0 && (
        <Grid container style={{ margin: "16px 0px 0px 0px" }}>
          {item?.map((item, index) => {
            return (
              <Grid item xs={4} sm={4} md={3} lg={1.5} key={index}>
                <Button variant="outlined" className={classes.btn}>
                  <Box className={classes.container2}>
                    <span className={classes.title}>
                      {item?.value} {item?.value > 0 ? item?.unit : ""}
                    </span>
                    <span className={classes.title2}>{item?.title} </span>
                  </Box>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      );
};

export default NftStatistics;
