
async function getAllProducts() {
    let response = await fetch('http://localhost:4000/products', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

export {getAllProducts}