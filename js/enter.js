const cards = document.querySelectorAll('.product-card')
cards.forEach((card) => {
	card.addEventListener('click', () => {
		console.log('click')

		const productId = card.getAttribute('data-id')
		window.location.href = `product.html?id=${productId}`
	})
})

function updateDropdownText(text) {
	const dropdowns = document.getElementsByClassName('dropdown2')
	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].textContent = text
	}
}

