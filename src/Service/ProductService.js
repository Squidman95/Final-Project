
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

async function getAllCategories() {
    let response = await fetch('http://localhost:4000/categories', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

async function getAllSubCategories() {
    let response = await fetch('http://localhost:4000/subcategories', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

async function getSingleProduct(productID) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:4000/products/${productID}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export {getAllProducts, getAllCategories, getAllSubCategories, getSingleProduct}