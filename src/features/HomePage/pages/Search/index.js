import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Rating } from "@mui/material";
import { ChooseProduct } from "../../../Slice";
import { useDispatch } from "react-redux";
import pizzaList from "../../../../constants/Category/pizzaList";
const useStyles = makeStyles({
  container: {
    marginTop: "10px",
  },
  head: {},
  body: {},
  searchBtn: {
    height: "27px",
    width: "163px",
    border: "none",
    outline: "none",
    borderRadius: "45px",
    padding: "0 19px",
    boxSizing: "border-box",
  },
});
export default function Search() {
  const { search } = useParams();
  // const { search, setSearch } = useState();
  // setSearch(ssearch);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const searchValue = data.get("Search");
    console.log(searchValue);
    navigate(`/search=${searchValue}`, { replace: true });
  };

  // API
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const pizzaSearch = "http://127.0.0.1:8000/piza/?search=" + search.slice(7);
  const sideSearch = "http://127.0.0.1:8000/side/?search=" + search.slice(7);
  const comboSearch = "http://127.0.0.1:8000/combo/?search=" + search.slice(7);

  useEffect(() => {
    async function getData() {
      const responsePizza = await fetch(pizzaSearch);
      const responseJSONPizza = await responsePizza.json();
      setData(responseJSONPizza);

      const responseSide = await fetch(sideSearch);
      const responseJSONSide = await responseSide.json();
      setData(...data, responseJSONSide);

      const responseCombo = await fetch(comboSearch);
      const responseJSONCombo = await responseCombo.json();
      setData(...data, responseJSONCombo);

      setLoading(true);
    }

    getData();
  }, [pizzaSearch]);

  const classes = useStyles();
  return (
    <div>
      {search && (
        <div>
          <Box className={classes.container}>
            <Box
              className={classes.head}
              component="form"
              onSubmit={handleSearch}
            >
              <div
                className="head-wrap"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  style={{ position: "absolute", right: "20px" }}
                  type="text"
                  className={classes.searchBtn}
                  placeholder="Tìm kiếm"
                  name="Search"
                />
              </div>
            </Box>
            <Box
              className={classes.body}
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                className="body-head"
                style={{ marginBottom: "6rem", textAlign: "center" }}
              >
                <h6>Tìm kiếm</h6>
                <p style={{ marginBottom: "0" }}>
                  Hiển thị kết quả tìm kiếm cho {search.slice(7)}
                </p>
                <p style={{ marginTop: "0" }}>Có {data.length} kết quả</p>
              </div>
              <div
                className="body-bottom"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gridGap: '20px',
                }}
              >
                {data.map((item) => {
                  return <Item item={item} />;
                })}
              </div>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}

const useStylesProductItem = makeStyles({
  root: {
    padding: "0 15px",
    borderRadius: "20px",
    backgroundColor: "#fff",
    display: "flex",
    flex: "0 1 30%",
    flexDirection: "column",
    boxSizing: "border-box",
    marginBottom: "70px",
    boxShadow:
      "4px 4px 4px rgba(255, 128, 1, 0.25), -2px -2px 4px rgba(208, 208, 208, 0.15)",
    transition: "all 0.2s ease-in-out",

    "& img": {
      alignSelf: "center",
      marginTop: "-70px",
      transition: ".3s all ease-in-out!important",
    },

    "&:hover": {
      "& img": {
        transform: "scale(1.2) rotate(60deg)",
        transition: "1s",
      },
      "& p": {
        color: "#ff8000",
      },
    },

    "& p": {
      margin: 0,
      fontSize: "16px",
      display: "WebkitBox",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "2",
      maxHeight: "4rem",
      minHeight: "2.4rem",
      fontWeight: 600,
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "left",
    },
    "& Fab": {
      backgroundColor: "#ff8000",
    },
  },

  body: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {},
});

function Item({ item }) {
  const classes = useStylesProductItem();
  const dispatch = useDispatch();

  function handleAddClick() {
    dispatch(ChooseProduct(item));
  }

  return (
    <div className={classes.root}>
      <img src={item.image} alt="" style={{ width: "100%" }} />
      <p>{item.name}</p>
      <div className={classes.body}>
        <div>
          <Rating readOnly defaultValue={item.rating} size="small" />
          <p>{item.cost}đ</p>
        </div>
        <Fab
          size="small"
          onClick={handleAddClick}
          style={{ backgroundColor: "#ff8000" }}
        >
          <AddIcon style={{ fill: "#fff" }} />
        </Fab>
      </div>
    </div>
  );
}
