import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import Text from '../atoms/text'
import Row from '../atoms/row';

type Props = {}

const menuList = [
  {
    text: 'PP-TRACKER',
    url: '/'
  },
]
const Menu = (props: Props) => {
  return (
    <Row className='justify-between bg-gray-300 py-6 px-5'>
      {menuList.map((item, key) => (
        <div key={key}>
          <Link href={item.url} >
            <Text size='' value={item.text} className='font-bold text-xl' />
          </Link>
        </div>
      ))}
      <div className='flex items-center gap-2'>
        <input type="search" placeholder='search' className='border' />
        <div>
          <FaSearch />
        </div>
      </div>
    </Row>
  )
}

export default Menu