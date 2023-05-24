import { createImmerSignal } from "solid-immer"
import { useSessionStore } from "../store"

const Login = () => {
  let formRef

  const [form, setForm] = createImmerSignal<{ username?: string; password?: string }>({})

  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (formRef.checkValidity()) {
      console.log(form())
    }

    formRef.classList.add("was-validated")
  }

  return (
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="card p-5">
        <form ref={formRef} class="needs-validation" style={{ width: "18rem", height: "14rem" }} novalidate>
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <label for="validationCustom01" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                value={form().username ?? ""}
                required
                onInput={(e) => setForm((draft) => (draft.username = e.target.value))}
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your username.</div>
            </div>
            <div>
              <label for="validationCustom02" class="form-label">
                Password
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                required
                value={form().password ?? ""}
                onInput={(e) => setForm((draft) => (draft.password = e.target.value))}
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your password.</div>
            </div>
            <button class="btn btn-primary" type="submit" onClick={submit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
