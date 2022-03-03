export function login(username: string, password: string) {
    // fetch(`${API_URI}/login`, {method: "POST"})
    const req = new XMLHttpRequest();
    const FD = new FormData();
    FD.append("username", username)
    FD.append("password", password)
    req.open('POST', `/login`)
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    req.send(FD)
}
