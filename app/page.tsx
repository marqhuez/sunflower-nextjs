"use client";

import Board from "@/components/board/Board";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
global.EventSource = require("eventsource");

const queryClient = new QueryClient();

const Home = () => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Board></Board>
			</QueryClientProvider>
		</>
	);
};

export default Home;
