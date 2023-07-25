import React, { useEffect, useState } from "react";
import { Button, Divider, IconButton, Tooltip, Grid } from "@mui/material";
import useStyles from "./style";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Opensea,
  EtherScan,
  Discord,
  Gem,
  Genie,
  LooksRare,
  Twitter,
  Website,
} from "@/assets/icons/desktop-36";
import { OpenseaService } from "@/services";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NftStatistics from "@/components/NftStatistics";
import { showLoader, hideLoader } from "@/slices/loader.slice";
import { useSelector, useDispatch } from "react-redux";
import dataCollections from "../../data/collections.json";
// ***************************************************************

const iconStyle = {
  color: "#E2E2E2",
  fontSize: "39px",
  width: "39px",
  height: "39px",
};

// ***************************************************************

export default function NftDetails() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:1024px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showMore, setShowMore] = useState(true);
  // const { state } = useLocation();
  // const { collection } = state;
  const [collection, setCollection] = useState();
  const [load, setLoaded] = useState(true);

  useEffect(() => {
    dispatch(showLoader());
    const url1 = window.location.href;
    var slug = url1.substring(url1.lastIndexOf("/") + 1);
    if (slug !== undefined) {
      const data = dataCollections.filter((data) => data.slug == slug);
      if (data.length > 0) {
        setCollection(data[0]);
      } else {
        navigate("/");
      }
    }
  }, []);

  useEffect(() => {
    !load ? dispatch(hideLoader()) : "";
  }, [load]);

  const collectionInfoList = [
    {
      name: "Website",
      icon: <Website style={iconStyle}></Website>,
      url: collection?.details?.social?.website,
    },
    {
      name: "Discord",
      icon: <Discord style={iconStyle}></Discord>,
      url: collection?.details?.social?.discord,
    },
    {
      name: "Twitter",
      icon: <Twitter style={iconStyle}></Twitter>,
      url: collection?.details?.social?.twitter,
    },
    {
      name: "Etherscan",
      icon: <EtherScan style={iconStyle}></EtherScan>,
      url: collection?.details?.social?.etherscan,
    },
  ];

  const buyNowList = [
    {
      name: "Opensea",
      icon: <Opensea style={iconStyle}></Opensea>,
      url: collection?.details?.buy_info?.opensea,
    },
    {
      name: "looksrare",
      icon: <LooksRare style={iconStyle}></LooksRare>,
      url: collection?.details?.buy_info?.looksrare,
    },
    {
      name: "geniexyz",
      icon: <Genie style={iconStyle}></Genie>,
      url: collection?.details?.buy_info?.geniexyz,
    },
    {
      name: "gemxyz",
      icon: <Gem style={iconStyle}></Gem>,
      url: collection?.details?.buy_info?.gemxyz,
    },
  ];

  const item = [
    {
      title: "Items ",
      value: collection?.details?.items,
    },
    {
      title: "Created ",
      value: collection?.details?.created,
    },
    {
      title: "Creator fee ",
      value: collection?.details?.creator_fee,
    },
    {
      title: "Chain ",
      value: collection?.details?.chain,
    },
  ];

  const item2 = [
    {
      title: "Total Volume",
      value: collection?.details?.total_volume,
      unit: "ETH",
    },
    {
      title: "Floor Price",
      value: collection?.details?.floor_price,
      unit: "ETH",
    },
    {
      title: "Best Offer",
      value: collection?.details?.best_offer,
      unit: "WETH",
    },
    {
      title: "Listed",
      value: collection?.details?.listed,
    },
    {
      title: "Owners",
      value: collection?.details?.owners,
    },
    {
      title: "Unique Owners",
      value: collection?.details?.unique_owners,
    },
  ];

  return (
    <>
      <div className="mainBanner" style={{ height: "100%" }}>
        <span>
          <img
            onLoad={() => setLoaded(false)}
            src={collection?.sub_desktop_banner}
            width="100%"
            style={{ height: "20vh", objectFit: "cover" }}
          />
        </span>
      </div>
      <div className={classes.topLeft}>
        <Button
          variant="text"
          className={classes.btn}
          startIcon={<ChevronLeftIcon style={{ fontSize: "36px" }} />}
          onClick={() => navigate(-1)}
        >
          {"Back"}
        </Button>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1% 4%",
          borderBottom: isMobile ? "0px" : "1px solid #000000",
        }}
      >
        <div
          style={{
            flexGrow: 1,
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "24px" : "34px",
              fontFamily: "Neue Plak Bold",
            }}
          >
            {collection?.name}
          </Typography>
          {collection?.owner ? (
            <Button
              variant="contained"
              sx={{
                borderRadius: "32px",
                padding: "0 1rem",
                fontSize: isMobile ? "8px" : "12px",
                backgroundColor: "#bf3243",
                opacity: 0.4,
              }}
            >
              <span
                style={{
                  fontFamily: "Neue Plak",
                  color: "#E2E2E2",
                  marginRight: "2px",
                }}
              >
                By
              </span>
              <span style={{ fontFamily: "Neue Plak semibold" }}>
                {collection?.owner}
              </span>
            </Button>
          ) : null}
        </div>
        {!isMobile ? (
          <>
            {collection?.details?.social ? (
              <>
                <Box
                  sx={{
                    margin: "0px 30px",
                  }}
                >
                  <Typography
                    sx={{
                      marginBottom: "12px",
                      textTransform: "uppercase",
                      fontSize: "16px",
                      fontFamily: "Neue Plak bold",
                      fontStyle: "normal",
                      fontWeight: "400",
                      color: "#E2E2E2",
                      paddingLeft: "3px ",
                    }}
                  >
                    {"Collection info"}
                  </Typography>
                  <Box sx={{ display: "flex", gap: "2rem" }}>
                    {collectionInfoList &&
                      collectionInfoList.map((item, index) => (
                        <Tooltip
                          title={item?.name}
                          arrow
                          placement="top"
                          key={index + "_item"}
                        >
                          <IconButton
                            sx={{ padding: "0px" }}
                            onClick={() => {
                              window.open(item.url, "_blank");
                            }}
                            size="large"
                          >
                            {item.icon}
                          </IconButton>
                        </Tooltip>
                      ))}
                  </Box>
                </Box>
                {collection?.buy_info ? (
                  <Typography
                    sx={{ borderRight: "1px solid #000000" }}
                  ></Typography>
                ) : (
                  ""
                )}
              </>
            ) : null}
            {collection?.details.buy_info && (
              <Box sx={{ margin: "0px 30px" }}>
                <Typography
                  sx={{
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    fontSize: "16px",
                    fontFamily: "Neue Plak bold",
                    fontStyle: "normal",
                    fontWeight: "400",
                    color: "#E2E2E2",
                  }}
                >
                  {"Buy Now"}
                </Typography>
                <Box sx={{ display: "flex", gap: "2rem" }}>
                  {buyNowList.map((item, index) =>
                    item.url ? (
                      <Tooltip
                        title={item?.name}
                        arrow
                        placement="top"
                        key={index}
                      >
                        <IconButton
                          sx={{ padding: "0px" }}
                          key={index + "_item"}
                          onClick={() => {
                            window.open(item.url, "_blank");
                          }}
                          size="large"
                        >
                          {item.icon}
                        </IconButton>
                      </Tooltip>
                    ) : null
                  )}
                </Box>
              </Box>
            )}
          </>
        ) : null}
      </Box>
      <Box
        sx={{
          padding: "1% 4%",
          color: "white",
          position: "relative",
        }}
      >
        <NftStatistics item={item} type={"status"} />
        {collection?.details?.description.length > 110 ? (
          <Box>
            <Typography className={classes.description}>
              {!showMore
                ? collection?.details?.description
                : collection?.details?.description.length > 220
                ? `${collection?.details?.description.substring(0, 220)}...`
                : collection?.details?.description}
            </Typography>
            {collection?.details?.description.length > 220 ? (
              <IconButton
                sx={{
                  color: "#FFFFFF !important",
                  fontWeight: 400,
                  fontFamily: "Neue Plak Regular !important",
                  fontSize: isMobile ? "12px !important" : "14px !important",
                  lineHeight: "1.5",
                  padding: "0px",
                }}
                variant="text"
                className="btn"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "show more" : "show less"}
                {showMore ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </IconButton>
            ) : (
              ""
            )}
          </Box>
        ) : (
          <Typography className={classes.description}>
            {collection?.details?.description}
          </Typography>
        )}
        <NftStatistics item={item2} />

        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "Neue Plak Bold",
            lineHeight: "33.14px",
            margin: "16px 0px",
          }}
        >
          {"ASSETS : "}
        </Typography>
        <Grid container spacing={2}>
          {collection?.nfts.map((nft, index) => {
            return (
              <Grid item xs={6} sm={4} lg={3} md={3} xl={2} key={index}>
                <span className={classes.closePaper}>
                  <img
                    src={nft.image}
                    style={{ borderRadius: "20px 20px 0px 0px" }}
                  />
                  <a href="https://hamidbasher.com/application/index.html">
                  <Button
                    variant="contained"
                    className={classes.btn4}
                  >
                    {"#" + nft.title}
                  </Button>
                  </a>
                </span>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Divider light />
    </>
  );
}
