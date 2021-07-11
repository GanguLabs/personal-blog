import styled from "@emotion/styled";
import theme from "styles/theme";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-widht: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
