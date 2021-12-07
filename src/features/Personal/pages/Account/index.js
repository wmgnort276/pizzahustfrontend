import React from 'react';
import './styleAccount.css';

export default function Account() {
  const linkChangPassword = '';
  return (
    <div className="account-info">
      <h2 className="address-info">Thông tin tài khoản</h2>
      <div>
        <span className="account-info__label">
          <div className="account-info__item">Họ Tên</div>
          <div className="account-info__item">Email</div>
          <div className="account-info__item">Số điện thoại</div>
          <div className="account-info__item">Mật khẩu</div>
        </span>
        <span className="account-info__value">
          <div className="account-info__item">Nam Lương</div>
          <div className="account-info__item">123456@gmail.com</div>
          <div className="account-info__item">0123456789</div>
          <div className="account-info__item">
            <input
              className="account-info__password"
              type="password"
              disabled
              value="123456"
            />
            <div className="account-info__item--text">Đổi mật khẩu</div>
          </div>
        </span>
      </div>
    </div>
  );
}

// const account = {
//   user: '',
//   fullName: '',
//   email: '',
//   phone: '',
//   password: '',
// };
