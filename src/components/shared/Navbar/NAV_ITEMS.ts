export interface INavItem {
  label: string;
  subLabel?: string;
  children?: Array<INavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<INavItem> = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Laboratory",
    href: "/labs",
  },
  {
    label: "About",
    href: "/about",
  },
];
