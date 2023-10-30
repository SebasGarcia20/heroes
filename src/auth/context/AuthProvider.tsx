import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
    const name = JSON.parse(localStorage.getItem('name'))

    return {
        logged: !!name,
        name: name,
    }
}

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);

    const onLogin = (name: '') => {

        const user = { name: name }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('name', JSON.stringify(user))
        dispatch(action)
    }

    const onLogout = () => {

        localStorage.removeItem('name')

        const action = {
            type: types.logout,
        }

        dispatch(action)
    }


    return (
        <AuthContext.Provider value={{
            ...state,
            onLogin: onLogin,
            onLogout: onLogout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}