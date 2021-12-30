import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import "./styleAddAddress.css";
export default function Addresses() {
  const user = useSelector((state) => state.login.username);
  console.log(user);
  // API
  const [data, setData] = useState([]);
  const api = `http://127.0.0.1:8000/profile/?user__username=${user}`;
  useEffect(() => {
    async function getData() {
      const response = await fetch(api);
      const responseJSON = await response.json();
      console.log(responseJSON);
      setData(responseJSON);
    }
    getData();
  }, [api]);

  const [newData, setNewData] = useState({});

  const handleChangeData = (s) => {
    s.preventDefault();
    console.log(newData)
  }

  return (
    <Grid container className="addresses">
      <Grid item xs={8}>
        <h2 className="add-address__text">Chỉnh sửa thông tin </h2>
        <div className="add-address">
          <p>Tên</p>
          <input
            className="add-address__input"
            type="text"
            value={data[0].name}
            onChange={(e) =>
              setNewData({ ...newData, name: e.target.value })
            }
          />
        </div>
        <div className="add-address">
          <p>Email</p>
          <input
            className="add-address__input"
            type="email"
            value={data[0].email}
            onChange={(e) =>
              setNewData({ ...newData, email: e.target.value })
            }
          />
        </div>
        <div className="add-address">
          <p>Số điện thoại</p>
          <input
            className="add-address__input"
            type="tel"
            value={data[0].number_phone}
            onChange={(e) =>
              setNewData({ ...newData, number_phone: e.target.value })
            }
          />
        </div>
        <div className="add-address">
          <p>Địa chỉ</p>
          <input
            className="add-address__input"
            type="text"
            value={data[0].address}
            onChange={(e) =>
              setNewData({ ...newData, address: e.target.value })
            }
          />
        </div>
        {/* <input className="add-address--checkbox" type="checkbox" /> */}
        {/* <span>Đặt làm địa chỉ mặc định</span> */}
        <button className="add-address--button" onClick={(e) => handleChangeData()}>Chỉnh sửa</button>
      </Grid>
    </Grid>
  );
}

// const addresses = [
//   {
//     id: 1,
//     name: '',
//     type: '',
//     phone: '',
//     address: '',
//     isDefault: true,
//   },
//   {
//     id: 2,
//     name: '',
//     type: '',
//     phone: '',
//     address: '',
//     isDefault: false,
//   },
// ];
