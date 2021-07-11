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
    label: "Latest Posts",
    href: "/latest-posts",
  },
  {
    label: "Laboratory",
    href: "/laboratory",
    children: [
      {
        label: "Simulations",
        subLabel: "Find your dream design job",
        href: "/laboratory/simulations",
      },
      {
        label: "Algorithms & Data Structures",
        subLabel: "Visual Learning",
        href: "/laboratory/algorithms-and-data-structures",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
];
