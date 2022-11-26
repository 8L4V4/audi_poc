import Link from "next/link";
import Image from "next/image";
import logo from "components/Icon/logo.svg";
import { ProfileIcon } from "components/Icon/ProfileIcon";

export function Header() {
  return (
    <header className="Header">
      <Link href="/" className="Header-logo">
        <Image src={logo} alt="audi logo" />
      </Link>
      <nav className="Header-nav">
        <Link className="Header-nav-item" href="/electric">
          Audi Electric
        </Link>
        <Link className="Header-nav-item" href="/special-offers">
          Special Offers
        </Link>
      </nav>
      <button className="Header-profile">
        <ProfileIcon />
        <span>myAudi login</span>
      </button>
    </header>
  );
}
