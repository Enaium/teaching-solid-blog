import { createQuery } from "@tanstack/solid-query"
import { createImmerSignal } from "solid-immer"
import { Component, For, Match, Switch } from "solid-js"
import { RequestOf } from "../__generated"
import { api } from "../common/ApiInstance"
import { ReplyInput } from "../__generated/model/static"
import toast from "solid-toast"

const Replys: Component<{ postId: string }> = ({ postId }) => {
  const [options, setOptions] = createImmerSignal<RequestOf<typeof api.replyController.findRepliesByPost>>({ postId })

  const replies = createQuery({
    queryKey: () => ["replies", options()],
    queryFn: () => api.replyController.findRepliesByPost(options())
  })

  let formRef

  const [form, setForm] = createImmerSignal<ReplyInput>({ postId })

  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (formRef.checkValidity()) {
      api.replyController
        .createReply({
          body: form()
        })
        .then(() => {
          toast.success("Reply created")
        })
        .catch(() => {
          toast.error("Reply creation failed")
        })
    }

    formRef.classList.add("was-validated")
  }

  return (
    <div>
      <div class="card">
        <form ref={formRef} class="needs-validation">
          <div>
            <label class="form-label">Content</label>
            <textarea
              class="form-control"
              value={form().content ?? ""}
              required
              onInput={(e) => setForm((draft) => (draft.content = e.currentTarget.value))}
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter your reply.</div>
          </div>
          <button class="btn btn-primary" type="submit" onClick={submit}>
            Reply
          </button>
        </form>
      </div>
      <Switch>
        <Match when={replies.isLoading}>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </Match>
        <Match when={replies.isError}>Error</Match>
        <Match when={replies.isSuccess}>
          <ul class="list-group">
            <For each={replies.data.content}>
              {(reply) => (
                <li class="list-group-item">
                  <div class="d-flex justify-content-between">
                    <div>User:{reply.user.username}</div>
                    <div>{reply.content}</div>
                  </div>
                </li>
              )}
            </For>
          </ul>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <div
                  class="page-link"
                  onClick={() => {
                    if (options().page ?? 0 > 0)
                      setOptions((draft) => {
                        draft.page = (options().page ?? 0) - 1
                      })
                  }}
                >
                  Previous
                </div>
              </li>
              <For each={Array.from({ length: replies.data.totalPages }, (_, i) => i + 1)}>
                {(page, index) => (
                  <li class="page-item">
                    <div
                      class="page-link"
                      classList={{ active: (options().page ?? 0) === index() }}
                      onClick={() =>
                        setOptions((draft) => {
                          draft.page = index()
                        })
                      }
                    >
                      {page}
                    </div>
                  </li>
                )}
              </For>
              <li class="page-item">
                <div
                  class="page-link"
                  onClick={() => {
                    if ((options().page ?? 0) < replies.data.totalPages - 1)
                      setOptions((draft) => {
                        draft.page = (options().page ?? 0) + 1
                      })
                  }}
                >
                  Next
                </div>
              </li>
            </ul>
          </nav>
        </Match>
      </Switch>
    </div>
  )
}

export default Replys