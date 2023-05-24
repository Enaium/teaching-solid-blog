import { createQuery } from "@tanstack/solid-query"
import { api } from "../common/ApiInstance"
import { For, Match, Switch } from "solid-js"
import { Link } from "@solidjs/router"

const Category = () => {
  const categories = createQuery({
    queryKey: () => ["category"],
    queryFn: () => api.categoryController.findCategories()
  })

  return (
    <div>
      <Switch>
        <Match when={categories.isLoading}>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </Match>
        <Match when={categories.isError}>Error</Match>
        <Match when={categories.isSuccess}>
          <For each={categories.data}>
            {(item) => (
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <Link href={`/categories/${item.id}/posts`}>View</Link>
                </div>
              </div>
            )}
          </For>
        </Match>
      </Switch>
    </div>
  )
}

export default Category
