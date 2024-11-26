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
import RouteLayout from "./layout/RouteLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
