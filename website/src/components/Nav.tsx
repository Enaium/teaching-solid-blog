import { Link } from "@solidjs/router"
import Logo from "../assets/solid.svg"

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
        <span class="navbar-brand mb-0 h1">Solid</span>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link" href="/">
              Posts
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/category">
              Category
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/write">
              Write
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
