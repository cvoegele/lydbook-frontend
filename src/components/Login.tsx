import React, {useState} from "react";
import {log} from "util";

interface loginFormProps {
    test: string
}

function handleSubmit(event: React.FormEvent, username: string, password: string) {
    event.preventDefault()

    let formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)

    fetch(`/login`, {
        mode: 'no-cors',
        method: "POST",
        body: formData
    }).then(r => console.log(r))
}

export function LoginForm(props: loginFormProps) {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    return (
        <div>
            <form id={"login_form"} onSubmit={event => handleSubmit(event, username, password)}>
                <label>Username</label>
                <input
                    placeholder={"Username"}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type={"text"}/>
                <label>Password</label>
                <input
                    placeholder={"Password"}
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input type={"submit"} value={"Login"}/>
            </form>
        </div>
    );
}
