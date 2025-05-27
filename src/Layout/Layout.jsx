import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import WhatsApp from "../Components/WhatsApp";

const Layout = () => {
  return (
    <>
      <Header />
      <WhatsApp />
      {/* <TawkMessengerReact
        propertyId="682e19a17eaf011909ce6459"
        widgetId="1irq188mb"
      /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
