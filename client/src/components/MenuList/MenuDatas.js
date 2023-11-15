import { MenuHome } from "../../assets/svg/index";

export const MenuDatas = [
  {
    icon: <MenuHome />,
    name: "Home",
    link: "",
    permission: (p) => Object.values(p?.home || []).indexOf(true) >= 0,
    children: [],
  },
];
