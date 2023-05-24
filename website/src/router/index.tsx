import { RouteDefinition } from "@solidjs/router"
import Login from "../views/Login"
import Register from "../views/Register"
import HomeLayout from "../layouts/HomeLayout"
import Posts from "../views/Posts"
import Category from "../views/Category"
import Write from "../views/Write"
import Post from "../views/Post"
import CategoryPosts from "../views/CatgoryPosts"

const routes: RouteDefinition[] = [
  {
    path: "/login",
    component: () => <Login />
  },
  {
    path: "/register",
    component: () => <Register />
  },
  {
    path: "/",
    component: () => <HomeLayout />,
    children: [
      {
        path: "/",
        component: () => <Posts />
      },
      {
        path: "/categories/:categoryId/posts",
        component: () => <CategoryPosts />
      },
      {
        path: "/category",
        component: () => <Category />
      },
      {
        path: "/write",
        component: () => <Write />
      },
      {
        path: "/post/:id",
        component: () => <Post />
      }
    ]
  }
]

export default routes
