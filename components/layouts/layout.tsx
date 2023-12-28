import React from 'react'
import Menu from './menu';
import Footer from './footer';

type Props = {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col divide-y-2'>
      <Menu />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout