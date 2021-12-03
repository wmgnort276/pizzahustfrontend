import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from 'components/NavBar';
import { useStyles } from 'features/HomePage/pages/Header/styles';
import React from 'react';
import './styles.css';

export default function Personal() {
  const classes = useStyles();
  return (
    <Grid container className="content">
      <Grid item xs={1}>
        <NavBar />
      </Grid>
      <Grid item xs={8}>
        <img
          className="header__img"
          srcSet={process.env.PUBLIC_URL + 'img/logo.png'}
          alt=""
        />
        <Box className={classes.header}>
          <Box className={classes.searchBox}>
            <input className={classes.searchBtn} placeholder="Tìm kiếm" />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.41667 2.75C4.39162 2.75 2.75 4.39162 2.75 6.41667C2.75 8.44171 4.39162 10.0833 6.41667 10.0833C7.39509 10.0833 8.284 9.70011 8.9415 9.07556C8.96149 9.05142 8.98279 9.028 9.00539 9.00539C9.028 8.98279 9.05142 8.96149 9.07556 8.9415C9.70011 8.284 10.0833 7.39509 10.0833 6.41667C10.0833 4.39162 8.44171 2.75 6.41667 2.75ZM6.41667 12.0833C7.62028 12.0833 8.73626 11.7081 9.65397 11.0682L11.5429 12.9571C11.9334 13.3476 12.5666 13.3476 12.9571 12.9571C13.3476 12.5666 13.3476 11.9334 12.9571 11.5429L11.0682 9.65397C11.7081 8.73626 12.0833 7.62028 12.0833 6.41667C12.0833 3.28705 9.54628 0.75 6.41667 0.75C3.28705 0.75 0.75 3.28705 0.75 6.41667C0.75 9.54628 3.28705 12.0833 6.41667 12.0833ZM6 4.5C7.38071 4.5 8.5 5.61929 8.5 7H9.5C9.5 5.067 7.933 3.5 6 3.5V4.5Z"
                fill="#2D2D2D"
                fill-opacity="0.5"
              />
            </svg>
          </Box>
        </Box>
        <Grid container className="user-info">
          <Grid
            item
            xs={4}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              className="user-info__img"
              srcSet={process.env.PUBLIC_URL + 'user.png'}
              alt=""
            />
            <div>
              Hi, <span className="user-info__userName">Hướng</span>
            </div>
            <div className="user-info__text">Thông tin tài khoản</div>
            <div className="user-info__text">Lịch sử mua hàng</div>
            <div className="user-info__text">Danh sách địa chỉ</div>
          </Grid>
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
        </Grid>
      </Grid>
      <Grid item xs={3}>
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
