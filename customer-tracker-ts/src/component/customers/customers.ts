let url2 : string = "http://localhost:8080/"



async function viewCustomers(){

    intervalViewCustomers();

    setInterval( () => {
        intervalViewCustomers()
   
}, 120000)
}


async function intervalViewCustomers(){
    try {

        let headers:Headers = setHeaders();

        const response : Response = await fetch(`${url2}customer`,{
            method: "GET",
            headers: headers
        });

        interface User{
            customerId: number;
            customerName: string;
            password: string;
            tier?: string;
            ssn?: string
        }
    
        // const customers : Array<User> =  await response.json()
        const customers : Array<User> = [
            {customerId: 1, customerName: "reed", password:"pass"}, // passes the User interface
            {customerId: 1, customerName: "reed", password:"pass", tier:"Platnium"}, // passes the User interface
            // {customerId: 1, customerName: "reed"}, // fails User interface
        ]
        console.log(customers);
        let html_code = "<tr>"
        customers.map((element: { [x: string]: any; }) =>{
            for(const key in element){
                html_code += `<td>${element[key]}</td>`
            }
            html_code += "</tr>"
            console.log(html_code)
        })
    
        let customerTable : HTMLElement | null = document.getElementById("customerTable")

        if( customerTable === null){ 
            throw new Error();
        } else {
            customerTable.innerHTML = html_code
        }
    } catch(error){
        console.error(error);
    }
}

async function viewCustomersFTTC(){

    let headers:Headers = setHeaders();

  fetch(`${url}customer`,{
        method: "GET",
        headers: headers
    })
    .then(response => {
        if(response.status === 200){
            setTimeout(() => alert("Woop Woop we did boisss"), 5000)
        }
        return response.json()
    })
    .then(customers => {
        console.log(customers);
        let html_code = "<tr>"
        customers.map((element: { [x: string]: any; }) =>{
            for(const key in element){
                html_code += `<td>${element[key]}</td>`
            }
            html_code += "</tr>"
            console.log(html_code)
         })


        // ! ignores the typescript error about it potentially being a null value returned from the method as
        // we know for a fact the customerTable exists in our html file, see line 36-42 for an example of how it 
        // is handled if you want to remove the issue when something may be null
        document.getElementById("customerTable")!.innerHTML = html_code
        
    })

    
    .catch(error => {
        console.error(error);
    })
}

function setHeaders(){
    let headers = new Headers();
    let token = window.localStorage.getItem("token");

    if(token !== null){
        headers.append("authorization", token)
    } else {
        throw new Error("You haven't logged in as the token is not available")
    }
    return headers;
}