const url = "http://localhost:3000"

async function main() {
  const data = await fetch(url + "/mahasiswa", {
  })
  const json = await data.json()
  console.log(json)
}

async function login(username, password) {
    const data = await fetch(url + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
    })
    const json = await data.json()
    if (data.status >= 400) return alert(json.message)
    console.log(json)
    alert("Berhasil Login")
    localStorage.setItem('username', username); // Store username
    localStorage.setItem('token', json.token); // Store token
    document.cookie = `token=${json.token}; path=/`; // Optionally store token in cookies
    window.location.href = 'dashboard.html'; // Redirect to menu page
    return json
}

async function register(username, password) {
    const data = await fetch(url + "/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    const json = await data.json()
    if (data.status >= 400) return alert(json.message)
    alert("Berhasil Register")
    console.log(json)
    window.location.href = 'index.html'; // Redirect to login page
    return json
}