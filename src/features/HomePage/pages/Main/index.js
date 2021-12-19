import React from 'react';
import Category from './pages/Category';
import Combo from './pages/Combo';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Menu from './pages/Menu';

export default function Main() {
  return (
    <>
      <Header />
      <Combo />
      <Category />
      <Menu />
      <Footer />
    </>
  );
}
