import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Session {
  token?: string
  id?: string
}

export const useSessionStore = create(
  persist<Session>((set, get) => ({}), {
    name: "session-store",
    getStorage: () => localStorage
  })
)
