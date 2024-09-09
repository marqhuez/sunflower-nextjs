import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const db = {
	pocketBase: pb,
	authenticate: async () => {
		await pb.admins.authWithPassword(
			"sunflower@marksoltesz.hu",
			"xdb55uiFgHh7TSX"
		);
	},
	getNavbarItems: async () => {
		const records = await pb.collection("menu_items").getFullList(200, {
			sort: "-created",
		});

		return records;
	},
	getStickyNotes: async () => {
		const records = await pb.collection("sticky_notes").getFullList(200, {
			sort: "-created",
			expand: "sticky_note_to_note_content(sticky_note).note_content",
		});

		console.log("records", records);

		return records;
	},
	getStickyNoteContents: async (stickyNoteId: string) => {
		const records = await pb.collection("note_contents").getFullList(200, {
			filter: `sticky_note_id = '${stickyNoteId}'`,
		});

		return records;
	},
	updateStickyNote: async (id: string, data: object) => {
		try {
			await pb.collection("sticky_notes").update(id, data);
		} catch (error) {
			console.log("Error:", error);
		}
	},
	updateTextContent: async (id: string, data: object) => {
		try {
			await pb.collection("text_contents").update(id, data);
		} catch (error) {
			console.log("Error:", error);
		}
	},
	saveComponentPosition: async (componentData: any) => {
		try {
			const data = {
				positionX: componentData.positionX,
				positionY: componentData.positionY,
			};
			await pb
				.collection(componentData.collectionName)
				.update(componentData.id, data);
			console.log("saveComponentPosition", data);

			return {
				status: "success",
			};
		} catch (error) {
			console.log("Error:", error);

			return {
				status: "success",
				details: error,
			};
		}
	},
	addNewStickyNote: async () => {
		try {
			const data = {
				title: "test",
				content: "test",
				positionX: 123,
				positionY: 123,
				rotation: 123,
				width: 123,
				height: 123,
			};

			await pb.collection("sticky_notes").create(data);
			return {
				status: "success",
			};
		} catch (error) {
			console.log("Error:", error);

			return {
				status: "success",
				details: error,
			};
		}
	},
	subscribeToCollectionChange: (
		collectionName: string,
		callback: Function
	) => {
		pb.collection(collectionName).subscribe("*", function (e) {
			callback();
		});
	},
};

export default db;
