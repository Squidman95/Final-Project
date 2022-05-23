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

export{createCustomer, deleteCustomer}