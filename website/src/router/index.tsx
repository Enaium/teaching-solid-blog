import { RouteDefinition } from "@solidjs/router"
import Login from "../views/Login"

const routes: RouteDefinition[] = [
  {
    path: "/login",
    component: () => <Login />
  }
]

export default routes
