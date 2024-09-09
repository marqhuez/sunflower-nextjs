/* eslint-disable @next/next/no-head-element */

import Navbar from "@/components/navbar/Navbar";
import dbApi from "@/src/db";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head></head>
			<body style={{ backgroundColor: "#E7EBF0" }}>{children}</body>
		</html>
	);
}
