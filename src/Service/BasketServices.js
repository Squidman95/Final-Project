async function getBasket(customerId) {
    let response = await fetch(`http://localhost:4000/customers/${customerId}/basket`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

async function addToBasket(customerId, productId) {
    let response = await fetch(`http://localhost:4000/customers/${customerId}/basket/${productId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
    });
    return await response.json();
}

async function createBasket(customerId) {
    let response = await fetch(`http://localhost:4000/customers/${customerId}/basket`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
    });
    return await response.json();
}

async function removeItemFromBasket(customerId, productId) {
    let response = await fetch(`http://localhost:4000/customers/${customerId}/basket/${productId}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
    });
    return await response.json();
}

export {getBasket, addToBasket, createBasket, removeItemFromBasket}