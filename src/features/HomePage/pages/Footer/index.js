import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles({
  root: {
    // backgroundColor: '#FFF2F2',
  },

  container: {
    display: 'flex',
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.footer}>
          <Box className={classes.title}>
            <p>GIỚI THIỆU</p>
          </Box>
          <Box className={classes.list}>
            <ul>
              <li>
                <a href="/#">Hệ thống nhà hàng</a>
              </li>
              <li>
                <a href="/#">Câu chuyện thương hiệu</a>
              </li>
              <li>
                <a href="/#">Ưu đãi thành viên</a>
              </li>
              <li>
                <a href="/#">Tin tức & sự kiện</a>
              </li>
              <li>
                <a href="/#">Tuyển dụng</a>
              </li>
            </ul>
          </Box>
          <Box className={classes.title}>
            <p>VĂN PHÒNG ĐẠI DIỆN</p>
          </Box>
          <Box className={classes.address}>
            <p>
              Công ty Cổ phần Pizza Ngon 77 Trần Nhân Tôn, Phường 9, Quận 5,
              Thành phố Hồ Chí Minh
            </p>
            <p>SĐT: +84 (028) 7308 3377</p>
            <p>MST: 0104115527</p>
            <p>
              Cấp lần đầu ngày 17 tháng 08 năm 2009 và có thể được sửa đổi vào
              từng thời điểm
            </p>
          </Box>
        </Box>
        <Box className={classes.footer}>
          <Box className={classes.title}>
            <p>Liên Hệ</p>
          </Box>
          <Box className={classes.list}>
            <ul>
              <li>
                <a href="/#">Liên hệ</a>
              </li>
              <li>
                <a href="/#">Chính sách giao hàng</a>
              </li>
              <li>
                <a href="/#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="/#">Điều khoản và Điều kiện</a>
              </li>
            </ul>
          </Box>
          <Box className={classes.title}>
            <p>Tổng đài hỗ trợ</p>
          </Box>
          <Box className={classes.list}>
            <ul>
              <li>
                <a href="tel: 1900 6066">
                  Đặt hàng: <strong>1900 6066</strong> (9:30 - 21:30)
                </a>
              </li>
              <li>
                <a href="tel: 1900 633 606">
                  Tổng đài CSKH: <strong>1900 633 606</strong> (9:30 - 21:30)
                </a>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box className={classes.copyright}>
        <p>Bản quyền © 2021 Pizza HUST. Đã đăng ký bản quyền.</p>
      </Box>
    </Box>
  );
}
