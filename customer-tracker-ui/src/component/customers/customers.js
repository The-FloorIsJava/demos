const url = "http://localhost:8080/"

async function viewCustomers(){

    intervalViewCustomers();

    setInterval( async () => {
        intervalViewCustomers()
   
}, 120000)
}


async function intervalViewCustomers(){
    try {
        const response = await fetch(`${url}customer`,{
            method: "GET",
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        });
    
        const customers = await response.json();
    
        console.log(customers);
        let html_code = "<tr>"
        customers.map(element =>{
            for(const key in element){
                html_code += `<td>${element[key]}</td>`
            }
            html_code += "</tr>"
            console.log(html_code)
        })
    
        document.getElementById("customerTable").innerHTML = html_code
    } catch(error){
        console.error(error);
    }
}

async function viewCustomersFTTC(){

  fetch(`${url}customer`,{
        method: "GET",
        headers: {
            authorization: window.localStorage.getItem("token")
        }
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
        customers.map(element =>{
            for(const key in element){
                html_code += `<td>${element[key]}</td>`
            }
            html_code += "</tr>"
            console.log(html_code)
         })

        document.getElementById("customerTable").innerHTML = html_code
    })

    
    .catch(error => {
        console.error(error);
    })
}