import { createQuery } from "@tanstack/solid-query"
import { api } from "../common/ApiInstance"
import { PostInput } from "../__generated/model/static"
import { createImmerSignal } from "solid-immer"
import { For, Match, Switch } from "solid-js"
import { useNavigate } from "@solidjs/router"
import toast from "solid-toast"

const Write = () => {
  const navigate = useNavigate()

  const [form, setForm] = createImmerSignal<PostInput>({})

  let formRef

  const categories = createQuery({
    queryKey: () => ["category"],
    queryFn: () => api.categoryController.findCategories()
  })

  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (formRef.checkValidity()) {
      api.postController
        .createPost({ body: form() })
        .then(() => {
          toast.success("Publish success")
          navigate("/")
        })
        .catch((err) => {
          toast.error(err)
        })
    }

    formRef.classList.add("was-validated")
  }

  return () => (
    <div>
      <form ref={formRef} class="needs-validation" novalidate>
        <div>
          <label class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            required
            onInput={(e) => setForm((draft) => (draft.title = e.currentTarget.value))}
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please enter title.</div>
        </div>
        <div>
          <label class="form-label">Content</label>
          <textarea
            class="form-control"
            style={{ height: "16rem" }}
            required
            onInput={(e) => setForm((draft) => (draft.content = e.currentTarget.value))}
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please enter content.</div>
        </div>
        <div>
          <label class="form-label">Category</label>
          <Switch>
            <Match when={categories.isLoading}>
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </Match>
            <Match when={categories.isError}>Error</Match>
            <Match when={categories.isSuccess}>
              <select
                class="form-select"
                value={form().categoryId}
                onInput={(e) =>
                  setForm((draft) => {
                    draft.categoryId = e.currentTarget.value
                  })
                }
                required
              >
                <For each={categories.data}>{(item) => <option value={item.id}>{item.name}</option>}</For>
              </select>
            </Match>
          </Switch>

          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please select category.</div>
        </div>
        <button class="btn btn-primary" type="submit" onClick={submit}>
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write
