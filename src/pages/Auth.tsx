import React, { useState, Suspense } from "react"

const SignUp = React.lazy(() => import("../component/Auth/Signup"))
const Login = React.lazy(() => import("../component/Auth/Login"))
// import SignUp from "../component/Auth/Signup"
// import Login from "../component/Auth/Login"
import Loader from "../component/UI/Loader"

const Auth = () => {
  const [auth, switchAuth] = useState<string>("SIGNUP")

  return (
    <>
      <h3>Authenticate</h3>
      <button
        onClick={() => {
          switchAuth((prevState) =>
            prevState === "SIGNUP" ? "LOGIN" : "SIGNUP"
          )
        }}
      >
        switch
      </button>
      <Suspense fallback={<Loader />}>
        {auth === "SIGNUP" ? <SignUp /> : <Login />}
      </Suspense>
    </>
  )
}

export default Auth
