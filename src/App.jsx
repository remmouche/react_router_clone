import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RouteLayout from "./layout/RouteLayout";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RouteLayout />}>
				<Route index element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
