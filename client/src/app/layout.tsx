import { ReactNode } from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

interface MainlayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "E-commerce",
  description: "genereted by next.js",
};

const Mainlayout = ({ children }: MainlayoutProps) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
};

export default Mainlayout;
