import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from 'components/NavBar';
import { useStyles } from 'features/HomePage/pages/Header/styles';
import React, { useState } from 'react';
import './styles.css';
import Account from './pages/Account';
import Order from './pages/Order';
import Addresses from './pages/Addresses';

export default function Personal() {
  const classes = useStyles();
  const [activeId, setActiveId] = useState(1);

  const onTabClick = (id) => {
    setActiveId(id);
  };

  return (
    <Grid container className="content">
      <Grid item xs={1}>
        <NavBar />
      </Grid>
      <Grid item className="user-tabs" xs={2}>
        <img
          className="user-tabs__img"
          srcSet={process.env.PUBLIC_URL + 'user.png'}
          alt=""
        />
        <div>
          Hi, <span className="user-tabs__userName">Hướng</span>
        </div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="user-tabs__text"
            onClick={() => onTabClick(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </Grid>
      <Grid item xs={9}>
        <img
          className="header__img"
          srcSet={process.env.PUBLIC_URL + 'img/logo.png'}
          alt=""
        />
        <div className="user-main">
          {tabs.map((tab) => (tab.id === activeId ? tab.component : null))}
        </div>
      </Grid>
    </Grid>
  );
}

const tabs = [
  {
    id: 1,
    name: 'Thông tin tài khoản',
    component: <Account />,
  },
  {
    id: 2,
    name: 'Đơn hàng',
    component: <Order />,
  },
  {
    id: 3,
    name: 'Danh sách địa chỉ',
    component: <Addresses />,
  },
];
