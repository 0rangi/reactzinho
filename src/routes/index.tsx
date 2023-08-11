import { Routes, Route } from "react-router-dom"
import { PageHome, PageMenu, PageLayout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="menu" element={<PageMenu />} />
      </Route>
    </Routes>
  )
}