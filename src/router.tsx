import { createHashRouter } from "react-router-dom"
import { RootLayout } from "./app/layout/RootLayout"
import Home from "./app/routes/home"
import CaseStudies from "./app/routes/case-studies"
import CaseStudyDetail from "./app/routes/case-study.$slug"

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "case-studies/:slug", element: <CaseStudyDetail /> },
    ],
  },
])
