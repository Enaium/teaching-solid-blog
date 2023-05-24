import { createImmerSignal } from "solid-immer"
import { UserInput } from "../__generated/model/static"
import { api } from "../common/ApiInstance"
import toast from "solid-toast"
import { Link, Route, useNavigate } from "@solidjs/router"

const Register = () => {
  const navigate = useNavigate()

  let formRef

  const [form, setForm] = createImmerSignal<UserInput>({})

  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (formRef.checkValidity()) {
      api.userController
        .register({ body: form() })
        .then(() => {
          toast.success("Registered successfully")
          navigate("/login")
        })
        .catch((err) => {
          toast.error(err)
        })
    }

    formRef.classList.add("was-validated")
  }

  return (
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="card p-5">
        <form ref={formRef} class="needs-validation" style={{ width: "18rem", height: "14rem" }} novalidate>
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <label class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                value={form().username ?? ""}
                required
                onInput={(e) => setForm((draft) => (draft.username = e.target.value))}
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your username.</div>
            </div>
            <div>
              <label class="form-label">
                Password
              </label>
              <input
                type="text"
                class="form-control"
                required
                value={form().password ?? ""}
                onInput={(e) => setForm((draft) => (draft.password = e.target.value))}
              />
              <div class="valid-feedback">Looks good!</div>
              <div class="invalid-feedback">Please enter your password.</div>
            </div>
            <Link href="/login">Login</Link>
            <button class="btn btn-primary" type="submit" onClick={submit}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
