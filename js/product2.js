let btn = document.querySelector('.btns_btn')
console.log(btn);


function getProductIdFromURL() {
	const params = new URLSearchParams(window.location.search)
	return parseInt(params.get('id')) || null
}

function displayProductDetails(product) {
	// Main image
	document.getElementById('product-img').src = product.img

	// Name
	document.getElementById('product-name').textContent = product.name

	// Prices
	document.getElementById(
		'product-price'
	).textContent = `${product.price.toLocaleString()}₽`
	document.getElementById(
		'product-old-price'
	).textContent = `${product.old_price.toLocaleString()}₽`

	// Rating stars
	document.getElementById('product-rating').textContent =
		'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)

	// Reviews link text
	document.querySelector(
		'.tepaniki_link'
	).textContent = `(${product.reviews}) отзывов`
}

const productId = getProductIdFromURL()
const product = products.find((p) => p.id === productId)
let temp = [...JSON.parse(localStorage.getItem('cartItems'))]
console.log(temp, 'temp')
	


btn.onclick = function(){
	
	console.log('hello');
	
	temp.push(product)
	console.log(temp);
	
	localStorage.setItem('cartItem', JSON.stringify(temp))
	btn.innerHTML = 'Check cart !'
	btn.disabled = true;
}

if (product) {
	displayProductDetails(product)
} else {
	document.body.innerHTML = '<h2>Продукт не найден</h2>'
}




