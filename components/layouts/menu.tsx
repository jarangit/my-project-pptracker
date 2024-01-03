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
    <Row className='justify-between bg-gray-300 py-6 px-5 bg-black_bg'>
      {menuList.map((item, key) => (
        <div key={key}>
          <Link href={item.url} >
            <Text size='' value={item.text} className='font-bold text-xl' />
          </Link>
        </div>
      ))}
      <div className='flex items-center gap-2 border p-1 px-3 rounded-full max-w-[150px]'>
        <input placeholder='search' className='border bg-transparent border-none w-full' />
        <div className=''>
          <FaSearch />
        </div>
      </div>
    </Row>
  )
}

export default Menu