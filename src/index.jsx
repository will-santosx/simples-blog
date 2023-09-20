import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NewPost from "./pages/NewPost.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
	{
		element: <App />,
		path: "/",
		children: [{ element: <NewPost />, path: "/nova-postagem" }],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={routes} />
	</React.StrictMode>
);
