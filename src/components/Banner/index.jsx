import React from "react";
import useStyles from "./style";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.bannetTitle}>
        {"Interactive playground for 3D avatars"}
      </div>
      <div className={classes.exploreWrapper}>
        <div className={classes.exploreBtn}>{"Explore"}</div>
      </div>
      <a href="/modelView">
        <img
          src={image}
          width="100%"
          style={{ marginTop: "-25px!important" }}
        />
      </a>
    </div>
  );
};

export default Header;
