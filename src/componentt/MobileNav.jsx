import { NavLink } from "react-router";

export default function MobileNav(props){
    return(
    <nav className="nav-mobile">
        {props.link.map((link, index) => (
        <NavLink key={index} to={link.path}>
        {link.name}
      </NavLink>
       ))}
    </nav>
    )
}