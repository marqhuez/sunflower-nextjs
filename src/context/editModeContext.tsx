"use client";

import React, { ReactNode, useContext, useState } from "react";

type editModeContextType = {
	editMode: boolean;
	setEditMode: (editMode: boolean) => void;
};

type Props = {
	children: ReactNode;
};

const editModeContextDefaultValues: editModeContextType = {
	editMode: false,
	setEditMode: (editMode: boolean) => {},
};

export const EditModeContext = React.createContext<editModeContextType>(
	editModeContextDefaultValues
);

export function EditModeProvider({ children }: Props) {
	const [editMode, setEditModeState] = useState<boolean>(false);

	const setEditMode = (editMode: boolean) => {
		setEditModeState(editMode);
	};

	const value = {
		editMode,
		setEditMode,
	};

	return (
		<>
			<EditModeContext.Provider value={value}>
				{children}
			</EditModeContext.Provider>
		</>
	);
}

export function useEditMode() {
	return useContext(EditModeContext);
}
