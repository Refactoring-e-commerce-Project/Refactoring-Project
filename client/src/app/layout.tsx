import { ReactNode } from "react";
import Navbar from "./navbar/page";
// import { Footer } from "./footer/page";
import UploadImage from "./uploadImage/page";

interface MainlayoutProps {
  children: ReactNode;
}
export const metadata={
  title:'E-commerce',
  description : 'genereted by next.js'
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
=======
        <Navbar />
        {children}
        {/* <Footer/> */}
>>>>>>> 4bf89e32ce99039e76940f0c0b2f4c4764799706
      </body>
      {/* <Footer /> */}
    </html>
  );
};

export default Mainlayout;
