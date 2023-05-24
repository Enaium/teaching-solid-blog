import create from "solid-zustand"
import { persist } from "zustand/middleware"

interface Session {
  token?: string
  id?: string
  setToken: (token: string) => void
  setId: (id: string) => void
}

export const useSessionStore = create(
  persist<Session>(
    (set, get) => ({
      setToken: (token: string) => set({ token }),
      setId: (id: string) => set({ id })
    }),
    {
      name: "session-store",
      getStorage: () => localStorage
    }
  )
)
