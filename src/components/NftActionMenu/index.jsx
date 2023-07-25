import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import useStyles from "./style";
const data = [
  "Animations",
  "Still Pose",
  "Meme",
  "AR",
  "3D Print",
  "Face Filter",
  "2D",
  "Phygital",
];
export default function NftActionMenu({ selectMenu }) {
  const classes = useStyles();
  const chooseMenu = (val) => {    
    selectMenu(val);
  };
  return (
    <div className={classes.main}>
      {data?.length > 0 && (
        <Grid
          container
          id="style-3"
          spacing={2}
          style={{ overflowY: "auto", maxHeight: "38vh" }}
        >
          {data.map((val, index) => {
            return (
              <Grid
                item
                xs={6}
                sm={6}
                lg={6}
                xl={6}
                md={6}
                key={index}
                onClick={() => chooseMenu(val)}
              >
                <div className={classes.container}>
                  <Typography className={classes.value}>{val}</Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
