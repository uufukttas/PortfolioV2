import { NavList } from "@/constants/NavList";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="navbar w-2/6 flex justify-end">
      <ul className="navbar-container flex flex-col">
        {
          NavList.map((item, index) => {
            return <NavbarItem key={index} navItem={item} />
          })
        }
      </ul>
    </div>
  )
}

export default Navbar