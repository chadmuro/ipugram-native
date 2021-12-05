type IoniconType =
  | "home-outline"
  | "home"
  | "search-outline"
  | "search-sharp"
  | "play-circle-outline"
  | "play-circle-sharp"
  | "cart-outline"
  | "cart"
  | "person-circle-outline"
  | "person-circle";

export const bottomTabIcons: {
  name: string;
  inactiveIcon: IoniconType;
  activeIcon: IoniconType;
}[] = [
  {
    name: "home",
    inactiveIcon: "home-outline",
    activeIcon: "home",
  },
  {
    name: "search",
    inactiveIcon: "search-outline",
    activeIcon: "search-sharp",
  },
  {
    name: "reels",
    inactiveIcon: "play-circle-outline",
    activeIcon: "play-circle-sharp",
  },
  {
    name: "shop",
    inactiveIcon: "cart-outline",
    activeIcon: "cart",
  },
  {
    name: "profile",
    inactiveIcon: "person-circle-outline",
    activeIcon: "person-circle",
  },
];
