import db from "@/src/db";
import { useQuery } from "@tanstack/react-query";
import StickyNote from "../notes/sticky/StickyNote";
import NewNoteMenu from "../menu/newNote/NewNoteMenu";
import React from "react";

export interface IBoard {}

const Board: React.FC<IBoard> = () => {
	const { data, status, refetch } = getStickyNotes();
	db.subscribeToCollectionChange("sticky_notes", refetch);

	if (status == "loading") {
		return <div>loading</div>;
	}

	if (status == "error") {
		return <div>error</div>;
	}

	return (
		<>
			{data &&
				data.map((note) => {
					return <StickyNote key={note.id} stickyNoteData={note} />;
				})}
			<NewNoteMenu />
		</>
	);
};

export default Board;

const getStickyNotes = () => {
	const { data, status, refetch } = useQuery({
		queryKey: ["stickyNotes"],
		queryFn: async () => {
			const data = await db.getStickyNotes();
			return data;
		},
	});

	return { data, status, refetch };
};
