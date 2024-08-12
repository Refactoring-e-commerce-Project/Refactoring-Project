'use client'
import { ReactNode } from 'react';
import Navbar from './nav2/page';
import { CartProvider } from './context'; 
import Footer from './footer2/page';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <html>
      <body>
        <CartProvider>
          <Navbar  />
          {children}
          <Footer />
        </CartProvider>   
      </body>
    </html>
  );
};

export default ClientLayout;
