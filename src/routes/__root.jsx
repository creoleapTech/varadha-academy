import { Outlet } from "@tanstack/react-router"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
