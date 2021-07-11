import React from "react";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NAV_ITEMS } from "../../data/constants/NAV_ITEMS";
import { DarkModeSwitch } from "components/DarkModeSwitch";

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href="/">
            <NavLogo>chrislicodes.</NavLogo>
          </Link>
          <MobileIcon>
            <HamburgerIcon w={6} h={6} />
          </MobileIcon>
          <NavMenu>
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </NavItem>
            ))}
          </NavMenu>
          <DarkModeSwitch />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
