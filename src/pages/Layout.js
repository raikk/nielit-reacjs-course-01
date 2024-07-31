import { Outlet } from "react-router-dom";
//import "../App.css"
const Layout = () => {
  return (
    <>

      {/* <div className="topnav">
    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Home</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/blogs">Blogs</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">Contact</NavLink>
  
  </div> */}
      <main>
        <Outlet />
      </main>
    </>
  )
};
export default Layout;