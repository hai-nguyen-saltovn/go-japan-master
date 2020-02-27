import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "../material-dashboard-pro-react";

import { Theme, createStyles } from '@material-ui/core';

const homePageStyle = (theme: Theme) => createStyles({
  container: {
    //...container,
    width: "100%",
    zIndex: 4,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  banner: {
    height: "500px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  title: {
    ...defaultFont,
    color: "#e5975a",
    marginTop: "5vh",
    marginBottom: "30px",
    textAlign: "center"
  },
  description: {
    fontSize: "18px",
    color: "#e5975a",
    textAlign: "center"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important"
  },
  cardCategory: {
    color: grayColor[0],
    marginTop: "10px",
    marginLeft: "10px"
  },
  cardCategoryWhite: {
    color: whiteColor,
    marginTop: "10px"
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },

  logo: {
    width: "100%",
    padding: "5px"
  },

  icon: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + grayColor[11],
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconWhite: {
    color: whiteColor
  },
  iconRose: {
    color: roseColor[0]
  },
  iconGray: {
    color: grayColor[0]
  },
  iconLabel: {
    position: "relative",
    bottom: "5px"
  },
  marginTop30: {
    marginTop: "30px"
  },
  button: {
    marginTop: "20px"
  },
  content: {
    padding: "15px"
  },
  margin15px : {
    marginBottom: "15px",
  }
});

export default homePageStyle;
