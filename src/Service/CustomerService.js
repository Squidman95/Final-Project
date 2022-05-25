async function createCustomer(userID, fname, lname, email, password) {
    let userData = {
        id: userID,
        fname: fname,
        lname: lname,
        email: email,
        password: password
    };

    fetch("http://localhost:4000/customers/signup",
        {
            method: "POST", 
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));;
}

async function login(fname, lname, email, password) {
    let userData = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
    };
    
    let response = await fetch("http://localhost:4000/customers/login",
                    {
                        method: "POST", 
                        body: JSON.stringify(userData),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    });

    return await response.json();
}

// async function deleteCustomer(userID) {
//     var requestOptions = {
//         method: 'DELETE',
//         redirect: 'follow'
//     };
      
//     fetch(`http://localhost:4000/customers/${userID}`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

export{createCustomer, login}