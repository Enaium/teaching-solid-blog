import { Outlet } from "@solidjs/router"
import Nav from "../components/Nav"

const HomeLayout = () => {
  return (
    <div>
      <div class="container">
        <Nav />
      </div>
      <div class="container">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout
