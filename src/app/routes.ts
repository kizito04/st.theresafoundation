import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SchoolsPage from "./pages/SchoolsPage";
import SportsAcademyPage from "./pages/SportsAcademyPage";
import EducationFundPage from "./pages/EducationFundPage";
import TransportersPage from "./pages/TransportersPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import DonorsPage from "./pages/DonorsPage";
import VolunteerPage from "./pages/VolunteerPage";
import DownloadsPage from "./pages/DownloadsPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "schools", Component: SchoolsPage },
      { path: "sports-academy", Component: SportsAcademyPage },
      { path: "education-fund", Component: EducationFundPage },
      { path: "transporters", Component: TransportersPage },
      { path: "gallery", Component: GalleryPage },
      { path: "news", Component: NewsPage },
      { path: "donors", Component: DonorsPage },
      { path: "volunteer", Component: VolunteerPage },
      { path: "downloads", Component: DownloadsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
