import { useSession, signIn, signOut } from "next-auth/react"



const Login = () => {
  const { data: session } = useSession()

  console.log("session fr", session)

  if (session) {
    return (
      <>
        <div>Signed in as {session.user?.name}</div>
        <div><button onClick={() => signOut()}>Sign out</button></div>
      </>
    )
  } else {
    return (
      <>
        {/* <button onClick={() => signOut()}>Sign out</button> */}
        <div>Sign in now: </div>
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }


}

export default Login