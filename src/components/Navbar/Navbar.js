import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container">
          <NavLink to = '/' className='navbar-brand'>
            < i className="fa fa-mobile text-warning" /> Contact <span className="text-warning"> Manager</span></NavLink>
      </div>
    </nav>
    </>
  )
}

export default Navbar;