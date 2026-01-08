import { createRouter, RootRoute, Route } from "@tanstack/react-router"
import RootLayout from "./routes/__root"
import HomePage from "./routes/index"
import RoboticsPage from "./routes/services/robotics"
import EnglishPage from "./routes/services/english"
import MedicalPage from "./routes/services/medical"
import AboutPage from "./routes/about"
import ContactPage from "./routes/contact"

const rootRoute = new RootRoute({
  component: RootLayout,
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const roboticsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services/robotics",
  component: RoboticsPage,
})

const englishRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services/english",
  component: EnglishPage,
})

const medicalRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services/medical",
  component: MedicalPage,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
})

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  roboticsRoute,
  englishRoute,
  medicalRoute,
  aboutRoute,
  contactRoute,
])

export const router = createRouter({ routeTree })

// TypeScript declaration
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router
//   }
// }
