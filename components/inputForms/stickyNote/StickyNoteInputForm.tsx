import { Box, Divider, TextField, FormControl } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

export interface IStickyNoteInputForm {
	sampleTextProp: string;
}

const StickyNoteInputForm: React.FC<IStickyNoteInputForm> = ({
	sampleTextProp,
}) => {
	return (
		<Box
			sx={{
				width: "600px",
				height: "600px",
				"& .MuiFormControl-root:not(.MuiTextField-root)": { mb: 1 },
			}}
		>
			<FormControl fullWidth>
				<TextField label="Title" />
			</FormControl>
			<Editor tinymceScriptSrc={"/tinymce/tinymce.min.js"} />
		</Box>
	);
};

export default StickyNoteInputForm;
