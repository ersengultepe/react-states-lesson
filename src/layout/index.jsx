import React from "react";
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

function Layout(props) {
  return (
    <>
      <Nav />
      <Container content={props.children} />
      <Footer />
    </>
  );
}

export default Layout;
