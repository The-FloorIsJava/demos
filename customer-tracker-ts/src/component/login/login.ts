let loginInitial = document.getElementById("login-form")!.innerHTML
const url = "http://localhost:8080/"

class LoginClass{
    // typescript gives us fields of our classes
    customerName:string;
    password:string;
    constructor(username:string, password:string){
        this.customerName = username,
        this.password = password
    }
    getCustomerName(){
        return this.customerName;
    }
    setCustomerName(customerName:string){
        this.customerName = this.customerName
    }
}


function userLogin(form: { username: { value: string; }; password: { value: string; }; }){
    let username = form.username.value
    let password = form.password.value

    let user = new LoginClass(username, password)

    fetch(`${url}login`, {
        method: 'POST',
        body: JSON.stringify(user)
    }
    )
    .then(response => {
        console.log(response)
        console.log(response.status)
        if(response.status === 404){
            throw new Error(response.text().then(body=>console.log(body)))
        }
        console.log(...response.headers)
        document.getElementById("login-form").innerHTML = "<h1 id='welcome'> Welcome to the Customer Tracker, " + username + "</h1><a href='../customers/customers.html'>Customer</a>"
        console.log(password)
        logoutButton()
        window.localStorage.setItem("token", response.headers.get("authorization"))
    })
    .catch(error => {
        console.error(error)   
        document.getElementById("login-form").innerHTML =`${loginInitial} <h1>Failed to login please try again</h1>`

    })

    
}

function logoutButton(){
    let button = document.createElement("button")
    let node = document.createTextNode("Logout")

    button.appendChild(node); // <button>Logout</button>
    button.setAttribute("onclick", "logout()")// <button onclick="logout()">Logout</button>
    const welcomeH1 = document.getElementById("welcome")
    welcomeH1.appendChild(button)
}

function logout(){
    document.getElementById("login-form").innerHTML = loginInitial;
}