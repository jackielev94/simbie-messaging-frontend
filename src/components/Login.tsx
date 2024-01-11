import { Button, InputLabel, TextField, Typography } from "@mui/material";
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
      <Typography
        variant={"h4"}
        sx={{
          color: 'white',
          my: '1%'
        }}>
          Login to view your Dashboard
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            sx={{
              mr: '1%'
            }}
            className="login"
            value={email}
            placeholder={'Email'}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            sx={{
              mr: '1%'
            }}
            className="login"
            value={password}
            placeholder={'Password'}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button
          sx={{
            bgcolor: 'white',
            mt: '1%'
          }}
          type="submit">Submit
        </Button>
      </form>
    </>
  )
}
