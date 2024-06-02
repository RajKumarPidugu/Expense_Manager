import React, { children } from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
    console.log(children); // This will log what is being passed as children
    return (
        <>
        <Header />
        <div className='content'>
            {children}
        </div>
        <Footer />
        </>
    );
};

export default Layout;