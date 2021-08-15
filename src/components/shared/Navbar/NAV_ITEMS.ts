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
    children: [
      {
        label: "Simulation and Generation",
        subLabel: "Creative Coding",
        href: "/labs/simulations",
      },
      {
        label: "Algorithms & Data Structures",
        subLabel: "Visual Learning of CS Topics",
        href: "/labs/algorithms-and-data-structures",
      },
      {
        label: "Playground",
        subLabel: "Exploring different libraries and concepts",
        href: "/labs/playground",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
];
