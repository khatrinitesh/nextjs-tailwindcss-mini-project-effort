"use client"

import { FaHome, FaSearch, FaUser, FaBars } from 'react-icons/fa';
import './style.css';
import { usePathname } from 'next/navigation';

const CustomApp = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <>
      <div className="icon-bar flex">
      <a href="/" className={pathname === '/asdsd' ? 'active' : ''}>
          <FaHome />
      </a>
      <a href="/about" className={pathname === '/about' ? 'active' : ''}>
          <FaSearch />
      </a>
      <a href="/profile" className={pathname === '/profile' ? 'active' : ''}>
          <FaUser />
      </a>
      <a href="/menu" className={pathname === '/menu' ? 'active' : ''}>
          <FaBars />
      </a>
    </div>
    </>
  )
}

export default CustomApp
