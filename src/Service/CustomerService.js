async function createCustomer(userID, fname, lname, mail, password) {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    
    fetch(`http://localhost:4000/customers/${userID}/${fname}/${lname}/${mail}/${password}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

async function login(fname, lname, mail, password) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    let response = await fetch(`http://localhost:4000/customers/${fname}/${lname}/${mail}/${password}`, requestOptions)

    return await response.json();
}

// async function login(fname, lname, mail, password) {
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
      
//     let response = await fetch(`http://localhost:4000/customers/${fname}/${lname}/${mail}/${password}`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//     return await response.json();
// }

async function deleteCustomer(userID) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
      
    fetch(`http://localhost:4000/customers/${userID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export{createCustomer, login, deleteCustomer}