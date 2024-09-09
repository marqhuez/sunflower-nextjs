import Position from "@/components/position/Position";
import styles from "./TextContent.module.css";

export interface ITextContent {
	content: any;
}

const TextContent: React.FC<ITextContent> = ({ content }) => {
	return (
		<>
			<Position key={content.id} id={content.id} componentData={content}>
				<div
					style={{
						zIndex: 1,
					}}
					className={styles["font-montserrat"]}
				>
					{content.content}
				</div>
			</Position>
		</>
	);
};

export default TextContent;
