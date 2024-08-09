<<<<<<< HEAD
"use client"
import { ReactNode } from "react";
// import Navbar from "./navbar/page";
// import Footer from "./footer/page";
import UploadImage from "./uploadImage/page";
// import Wishlist from "./wishlist/page";
=======
import { ReactNode } from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2

interface MainlayoutProps {
  children: ReactNode;
}

const Mainlayout = ({ children }: MainlayoutProps) => {
  return (
    <html>
      <body>
<<<<<<< HEAD
        {/* <Navbar /> */}
     <UploadImage/>
   {/* <Wishlist/> */}
   
        {/* {children} */}
      </body>
      {/* <Footer /> */}
=======
        <Navbar />
        {children}
         < Footer/>
      </body>
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
    </html>
  );
};

export default Mainlayout;
