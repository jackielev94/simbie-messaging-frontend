import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "../dataHooks";
import { setLocalStorage } from "../utils";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { account, reloadAccount } = useAccount(email, password);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await reloadAccount()
    if (account) {
      setLocalStorage('personId', account.personId);
      setLocalStorage('role', account.role);
      navigate('/dashboard', { state: { personId: account.personId, role: account.role }})
    }
  }

  return (
    <>
      <Typography variant={"h1"}>Login to view your Dashboard</Typography>
      <form onSubmit={handleSubmit}>
      <label>
          email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
