async function createNewCustomer() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
      
    fetch("http://localhost:4000/customers/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

async function createUser(userID, userName, mail, password) {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
    
    fetch(`http://localhost:4000/customers/${userID}/${userName}/${mail}/${password}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}




async function deleteCustomer(userID) {

}