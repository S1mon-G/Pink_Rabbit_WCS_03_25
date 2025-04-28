import { createBrowserRouter } from "react-router";

import App from "../App";

import Profile from "../pages/Profile";

const router = createBrowserRouter({
	element: <App />,
	children: { path: "/profile", element: <Profile /> },
});

export default router;
