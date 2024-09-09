import { INavbar } from "./Navbar";

const base: INavbar = {
	menuItems: [
		{
			title: "Home mock",
			href: "/",
			order: 1,
		},
		{
			title: "Notes mock",
			href: "/notes",
			order: 2,
		},
		{
			title: "Example mock",
			href: "/example1",
			order: 3,
		},
		{
			title: "Example mock2",
			href: "/example2",
			order: 4,
		},
	],
};

export const mockNavbarProps = {
	base,
};
