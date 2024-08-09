"use client"
import { ReactNode } from "react";
// import Navbar from "./navbar/page";
// import Footer from "./footer/page";
import UploadImage from "./uploadImage/page";
// import Wishlist from "./wishlist/page";

interface MainlayoutProps {
  children: ReactNode;
}

const Mainlayout = ({ children }: MainlayoutProps) => {
  return (
    <html>
      <body>
        {/* <Navbar /> */}
     <UploadImage/>
   {/* <Wishlist/> */}
   
        {/* {children} */}
      </body>
      {/* <Footer /> */}
    </html>
  );
};

export default Mainlayout;
