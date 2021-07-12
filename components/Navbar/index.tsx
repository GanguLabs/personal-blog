import React from "react";
import Link from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NAV_ITEMS } from "../../data/constants/NAV_ITEMS";
import { DarkModeSwitch } from "components/DarkModeSwitch";
import { Flex } from "@chakra-ui/layout";
import Logo from "../Logo";

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
            <NavLogo>
              <Logo />
            </NavLogo>
          </Link>
          <NavMenu>
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </NavItem>
            ))}
          </NavMenu>
          <Flex alignItems="center" gridGap={4}>
            <DarkModeSwitch />
            <MobileIcon>
              <HamburgerIcon w={6} h={6} />
            </MobileIcon>
          </Flex>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
