import { Drawer } from './Drawer'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <div className='flex'>
        <Drawer />
        <Outlet />
    </div>
  )
}

export default Layout