import { Fab } from "@mui/material";
import styles from "./NewNoteMenu.module.css";
import AddIcon from "@mui/icons-material/Add";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PushPinIcon from "@mui/icons-material/PushPin";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import db from "@/src/db";

export interface INewNoteMenu {}

const NewNoteMenu: React.FC<INewNoteMenu> = () => {
	const menu = useRef<HTMLUListElement>(null);

	const openNewNoteMenu = () => {
		menu.current && menu.current.classList.toggle(styles["active"]);
	};

	const { refetch } = addNewStickyNote();
	const handleAddNewStickyNote = () => {
		console.log("asdasd");

		refetch();
	};

	return (
		<div className={styles["menuWrapper"]}>
			<ul className={styles["menu"]} ref={menu}>
				<li className={styles["toggle"]}>
					<Fab
						color="secondary"
						aria-label="add"
						onClick={openNewNoteMenu}
					>
						<AddIcon />
					</Fab>
				</li>
				<li style={{ "--i": 0 } as React.CSSProperties}>
					<Fab
						color="primary"
						size="large"
						onClick={handleAddNewStickyNote}
					>
						<PushPinIcon style={{ transform: "rotate(45deg)" }} />
					</Fab>
				</li>
				<li style={{ "--i": 1 } as React.CSSProperties}>
					<Fab color="primary" size="large">
						<AutoStoriesIcon />
					</Fab>
				</li>
				<li style={{ "--i": 2 } as React.CSSProperties}>
					<Fab color="primary" size="large">
						<CalendarMonthIcon />
					</Fab>
				</li>
				<li style={{ "--i": 3 } as React.CSSProperties}>
					<Fab color="primary" size="large">
						<AutoStoriesIcon />
					</Fab>
				</li>
			</ul>
		</div>
	);
};

export default NewNoteMenu;

const addNewStickyNote = () => {
	const { data, status, refetch } = useQuery({
		queryKey: ["addNewStickyNote"],
		queryFn: async () => {
			const data = await db.addNewStickyNote();
			return data;
		},
		refetchOnWindowFocus: false,
		enabled: false,
	});

	return { data, status, refetch };
};
