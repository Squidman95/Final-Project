async function createBasket(userID) {
    let requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      fetch(`http://localhost:4000/customers/${userID}/basket`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}


async function addItemToBasket(userID, itemID) {
    var requestOptions = {
        method: 'PUT',
        redirect: 'follow'
    };
      
    fetch(`http://localhost:4000/customers/${userID}/basket/${itemID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}


async function deleteItemFromBasket(userID, itemID) {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };
      
    fetch(`http://localhost:4000/customers/${userID}/basket/${itemID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



async function getBasket(userID) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let response = 
    await fetch(`http://localhost:3000/customers/${userID}/basket`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    return await response.json();
}

export {createBasket, addItemToBasket, deleteItemFromBasket, getBasket}