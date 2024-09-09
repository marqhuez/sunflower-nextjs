"use client"; // --- bug miatt kell - https://github.com/mui/material-ui/issues/34896

import styles from "./Navbar.module.css";
import {
	AppBar,
	Container,
	FormControlLabel,
	FormGroup,
	Switch,
	Toolbar,
	Typography,
} from "@mui/material";
import SunflowerIcon from "@/components/icons/sunflower/SunflowerIcon";
import React from "react";
import { useEditMode } from "@/src/context/editModeContext";
import Link from "next/link";
// import { Montserrat } from "@next/font/google"; ---> storybook nem tudja felolvasni emiatt - https://github.com/storybookjs/storybook/issues/19711

// const montserrat = Montserrat();

export interface INavbar {
	menuItems: any[];
}

const Navbar: React.FC<INavbar> = ({ menuItems }) => {
	const { editMode, setEditMode } = useEditMode();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEditMode(event.target.checked);
	};

	return (
		<AppBar position="static">
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					<SunflowerIcon width="2.6rem"></SunflowerIcon>
					<Typography
						className={
							(styles["font-montserrat"],
							styles["font-weight-500"])
						}
						variant="h5"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							letterSpacing: ".1rem",
							// fontFamily: montserrat.style.fontFamily,
							// fontWeight: "500",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<Link
							href="/"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							SUNFLOWER
						</Link>
					</Typography>
					{menuItems.map((menuItem, i) => {
						const flexGrow = menuItems.length - 1 === i ? 1 : 0;
						return (
							<Typography
								className={styles["font-montserrat"]}
								key={menuItem.id}
								noWrap
								sx={{
									flexGrow: flexGrow,
									mr: 2,
									display: { xs: "none", md: "flex" },
									// fontFamily: montserrat.style.fontFamily,
								}}
							>
								<Link
									href={menuItem.href}
									style={{
										textDecoration: "none",
										color: "inherit",
									}}
								>
									{menuItem.title}
								</Link>
							</Typography>
						);
					})}
					<FormGroup sx={{}}>
						<FormControlLabel
							control={
								<Switch
									color="warning"
									checked={editMode}
									onChange={handleChange}
									aria-label="edit mode switch"
								/>
							}
							label={editMode ? "Edit Mode" : "View Mode"}
						/>
					</FormGroup>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
