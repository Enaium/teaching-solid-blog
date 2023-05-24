import type { Component } from "solid-js"
import { Router, useRoutes } from "@solidjs/router"
import routes from "./router"
import { Toaster } from "solid-toast"
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query"

const App: Component = () => {
  const queryClient = new QueryClient()
  const Routes = useRoutes(routes)

  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App
