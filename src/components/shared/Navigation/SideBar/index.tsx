import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  NavItem,
} from "./SidebarElements";
import { NAV_ITEMS } from "components/shared/Navigation/Navbar/NAV_ITEMS";
import Link from "next/link";

const SideBar = ({
  isOpen,
  clickHandler,
}: {
  isOpen: boolean;
  clickHandler: () => void;
}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={clickHandler}>
        <CloseIcon color="black" />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} onClick={clickHandler}>
              <Link href={item.href}>{item.label}</Link>
            </NavItem>
          ))}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
