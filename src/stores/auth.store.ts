import { create } from "zustand"
import { persist } from "zustand/middleware"

type User = {
    id: number
    email: string
    role?: string
}

type LoginPayload = {
    email: string
    password: string
}

type AuthState = {
    user: User | null
    token: string | null
    isLoading: boolean
    error: string | null

    login: (payload: LoginPayload) => Promise<void>
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isLoading: false,
            error: null,

            login: async (payload) => {
                try {
                    set({ isLoading: true, error: null })


                    const res = await fetch("http://localhost:3000/auth/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(payload),
                    })

                    if (!res.ok) {
                        throw new Error("Sai tài khoản hoặc mật khẩu")
                    }

                    const data = await res.json()

                    // backend thường trả về: { token, user }
                    set({
                        token: data.token,
                        user: data.user,
                        isLoading: false,
                    })
                } catch (err: any) {
                    set({
                        isLoading: false,
                        error: err.message || "Login thất bại",
                    })
                }
            },

            logout: () => {
                set({ user: null, token: null, error: null })
            },
        }),
        {
            name: "auth-storage", // key trong localStorage
            partialize: (state) => ({
                token: state.token,
                user: state.user,
            }),
        }
    )
)
