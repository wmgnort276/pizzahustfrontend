export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Chưa có tên đăng nhập!';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Chưa nhập email!';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email không hợp lệ';
    }
    if (!values.password) {
      errors.password = 'Chưa nhập mật khẩu!';
    } else if (values.password.length < 6) {
      errors.password = 'Mật khẩu tối thiểu 6 ký tự!';
    }
  
    if (!values.password2) {
      errors.password2 = 'Chưa xác nhận mật khẩu!';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Mật khẩu không khớp!';
    }
    return errors;
  }