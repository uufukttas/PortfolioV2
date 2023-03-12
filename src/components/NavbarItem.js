import Link from "next/link";

const NavbarItem = ({ navItem }) => {
    return <Link href={`${navItem.link}`} className="">{navItem.navItem}</Link>
}

export default NavbarItem;