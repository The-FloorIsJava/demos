const url = "http://localhost:8080/"

async function viewCustomers(){

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