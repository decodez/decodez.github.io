import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./app/layout/RootLayout"
import Home from "./app/routes/home"
import Work from "./app/routes/work"
import CaseStudies from "./app/routes/case-studies"
import CaseStudyDetail from "./app/routes/case-study.$slug"
import Toolbox from "./app/routes/toolbox"
import Contact from "./app/routes/contact"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "case-studies/:slug", element: <CaseStudyDetail /> },
      { path: "toolbox", element: <Toolbox /> },
      { path: "contact", element: <Contact /> },
    ],
  },
])
