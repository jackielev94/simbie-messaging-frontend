import { Typography } from "@mui/material";
import { useState } from "react";
import { useAccount } from "../dataHooks";

export function Login() {
  const { login, account } = useAccount()

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await login({email, password});
    console.log("account in component: ", account)
  }

  return (
    <>
      <Typography variant={"h1"}>Login to view your Dashboard</Typography>
      <form onSubmit={handleSubmit}>
      <label>
          email
          <input
            // value={email}
            onChange={(event) => setemail(event.target.value)}
          />
        </label>
        <label>
          To Do:
          <input
            // value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
