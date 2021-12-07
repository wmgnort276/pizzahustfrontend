import React from 'react';
import { Grid } from '@mui/material';
import './styleAddAddress.css';
export default function Addresses() {
  return (
    <Grid container className="addresses">
      <Grid item xs={8}>
        <h2 className="address-info">Danh sách địa chỉ</h2>
        <h4 className="address-info__text">Địa chỉ mặc định</h4>
        <h6 className="address-info__place">Nhà riêng</h6>
        <div className="address-info__item">
          <span className="address-info__item--text">
            <div className="address-info--text">Số điện thoại</div>
            <div>Địa chỉ</div>
          </span>
          <span className="address-info__item--info">
            <div className="address-info--text">0886765593</div>
            <div>101/70 Thanh Nhàn , Hai Bà Trưng , Hà Nội</div>
          </span>
        </div>
        <h4 className="address-info__text">Địa chỉ khác</h4>
        <h6 className="address-info__place">Công ty</h6>
        <div className="address-info__item">
          <span className="address-info__item--text">
            <div className="address-info--text">Số điện thoại</div>
            <div>Địa chỉ</div>
          </span>
          <span className="address-info__item--info">
            <div className="address-info--text">0886765593</div>
            <div>101/70 Thanh Nhàn , Hai Bà Trưng , Hà Nội</div>
          </span>
        </div>
      </Grid>
      <Grid item xs={4}>
        <h2 className="add-address__text">Thêm địa chỉ</h2>
        <div className="add-address">
          <p>Số điện thoại</p>
          <input className="add-address__input" type="text" />
        </div>
        <div className="add-address">
          <p>Địa chỉ</p>
          <input className="add-address__input" type="text" />
        </div>
        <div className="add-address">
          <p>Tên gợi nhớ</p>
          <input className="add-address__input" type="text" />
        </div>
        <input className="add-address--checkbox" type="checkbox" />
        <span>Đặt làm địa chỉ mặc định</span>
        <button className="add-address--button">Thêm mới</button>
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
