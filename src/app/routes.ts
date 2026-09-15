import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SchoolsPage from "./pages/SchoolsPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "schools", Component: SchoolsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "news", Component: NewsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
