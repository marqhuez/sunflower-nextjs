import TextContent from "@/components/contents/text/TextContent";
import Position from "@/components/position/Position";
import db from "@/src/db";
import Pin from "../pin/Pin";
import React, { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "./StickyNote.module.css";

export interface IStickyNote {
	stickyNoteData: any;
}

const StickyNote: React.FC<IStickyNote> = ({ stickyNoteData }) => {
	const contents =
		stickyNoteData.expand["sticky_note_to_note_content(sticky_note)"] || [];
	const div = useRef<HTMLDivElement>(null);

	fadeNoteIn(div);

	const fadeOrder = Math.floor(Math.random() * 10) + 1;

	return (
		<Position
			key={stickyNoteData.id}
			id={stickyNoteData.id}
			componentData={stickyNoteData}
		>
			<div
				ref={div}
				className={styles["stickyNote"]}
				style={{ "--i": fadeOrder } as React.CSSProperties}
			>
				{contents.map((content: any) => {
					const contentData = content.expand["note_content"];
					return (
						<TextContent
							key={contentData.id}
							content={contentData}
						/>
					);
				})}
				<Pin />
			</div>
		</Position>
	);
};

export default StickyNote;

const fadeNoteIn = (div: React.RefObject<HTMLDivElement>) => {
	useEffect(() => {
		setTimeout(() => {
			div.current?.classList.add(styles["visible"]);
		}, 1);
	}, []);
};
