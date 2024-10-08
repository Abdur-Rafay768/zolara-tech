import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    home_icon: <HomeIcon />,
    title: "Our services",
    link: "/",
    active: "",
    sub_menus: [ 
      { link: "/cabletv", title: "Cable TV" },
      { link: "/internet", title: "Internet" }, 
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/aboutus",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
