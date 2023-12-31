import React from 'react'
import Menu from './menu';
import Footer from './footer';

type Props = {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col'>
      <Menu />
      <div className='container min-h-screen  !py-6'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout