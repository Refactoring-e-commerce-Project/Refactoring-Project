import { ReactNode } from "react";
import Navbar from "./nav2/page";
// import Footer from "./footer/page";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
      {/* <Footer /> */}
    </html>
  );
};

export default ClientLayout;