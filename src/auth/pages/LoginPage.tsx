import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from ".."

export const LoginPage = () => {

  const { onLogin } = useContext(AuthContext)

  const navigate = useNavigate()

  const login = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    onLogin('Sebastian Garcia');

    navigate(lastPath, { replace: true })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={login}
      >
        Login
      </button>
    </div>
  )
}
