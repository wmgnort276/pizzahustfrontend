import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {},

  listChange: {
    margin: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 160px)",
    gridGap: "20px",
  },

  itemChange: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& span": {
      textAlign: "center",
      color: "#006a31",
      fontSize: "14px",
      fontWeight: 600,
    },
  },

  wrapImg: {
    border: "1px solid #ccc",
  },

  itemImg: {
    width: "100%",
    boxSizing: "border-box",
    margin: "20px auto",
    cursor: "pointer",

    "& img": {
      width: "100%",
    },
  },
});

export default function ChangeCombo({ product, changeTo }) {
  const classes = useStyles();

  const changeItem = (item) => {
    console.log("item change", item);
    console.log("product", product);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.listChange}>
        {changeTo.map((item) => (
          <Box className={classes.itemChange}>
            <Box className={classes.wrapImg} onClick={() => changeItem(item)}>
              <Box className={classes.itemImg}>
                <img src={item.image} alt="" />
              </Box>
            </Box>
            <span>{item.name}</span>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const listChange = [
  {
    pk: 1,
    srcImg: "combo/1_item1-1.png",
    name: "Pizza Puff_Giăm Bông & Thịt Xông Khói",
  },
  {
    pk: 2,
    srcImg: "combo/1_item1-2.png",
    name: "Pizza Puff_Thanh Cua & Xúc Xích Cocktail",
  },
  {
    pk: 3,
    srcImg: "combo/1_item1-3.png",
    name: "Pizza Puff_Gà BBQ Nướng Dứa",
  },
];
