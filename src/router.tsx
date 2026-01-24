import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "./app/layout/RootLayout"
import Home from "./app/routes/home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "case-studies", element: <CaseStudies /> },
      // { path: "case-studies/:slug", element: <CaseStudyDetail /> },
    ],
  },
])
