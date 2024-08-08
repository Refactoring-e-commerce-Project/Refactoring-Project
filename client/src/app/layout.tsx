import { ReactNode } from 'react';
import Navbar from './navbar/page';
import Footer from './footer/page';


interface MainlayoutProps {
  children: ReactNode;
}

const Mainlayout = ({ children }: MainlayoutProps) => {
  return (
    <html>
      <body>
        {/* <main>First project next</main> */}
        <Navbar />
        {children}
      </body>
      {/* < Footer/> */}
    </html>
  );
};

export default Mainlayout;