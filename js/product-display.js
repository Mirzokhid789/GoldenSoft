function displayProducts(arr) {
	const ProductWrapper = document.querySelector('.products')
	ProductWrapper.innerHTML = ''
	arr.forEach((el) => {
		ProductWrapper.insertAdjacentHTML(
			'beforeend',
			`  <a href="product.html?id=${el.id}" class="product-card-link">
		<div class="product-card">
		  <div class="top-labels">
			<span class="stock out">${el.availability}</span>
			<span class="sale">SALE</span>
		  </div>
		  <div class="gift-label">🎁 Подарок</div>
		  <img src="./${el.img}" alt="Product Image" class="product-image" />
		  <div class="product-info">
			<div class="rating">      ${'★'.repeat(el.rating)}${'☆'.repeat(
				5 - el.rating
			)}<span class="review-count">(12) отзывов</span></div>
			<p class="title">${el.name}</p>
			<p class="price">
			  <span class="new">${el.price}₽</span>
			  <span class="old">${el.old_price}₽</span>
			</p>
		  </div>
		</div>`
		)
	})
}

function updateDropdownText(text) {
	const buttonText = document.querySelector(
		'#dropdownSortButton .selected-text'
	)
	if (buttonText) {
		buttonText.textContent = text
	} else {
		console.error('Could not find .selected-text inside #dropdownSortButton')
	}
}

function sortProducts(criteria, label) {
	let sorted = [...products]
	if (criteria === 'rating') {
		sorted.sort((a, b) => b.rating - a.rating)
	} else if (criteria === 'reviews') {
		sorted.sort((a, b) => b.reviews - a.reviews)
	} else if (criteria === 'price') {
		sorted.sort((a, b) => a.price - b.price)
	}
	updateDropdownText(label)
	displayProducts(sorted)
}

displayProducts(products)

const checkboxes = document.querySelectorAll(
	'.type__material-box input[type="checkbox"]'
)

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener('change', handleFilterChange)
})

function handleFilterChange() {
	const selectedCategories = Array.from(checkboxes)
		.filter((cb) => cb.checked)
		.map((cb) => cb.value)

	if (selectedCategories.length === 0) {
		displayProducts(products) // Show all
		return
	}

	const filtered = products.filter((product) =>
		selectedCategories.includes(product.category)
	)

	displayProducts(filtered)
}

window.addEventListener('DOMContentLoaded', () => {
	displayProducts(products)
})

document.querySelector('.mobile-filter-btn').addEventListener('click', () => {
	document.querySelector('.mobile-filter-panel').classList.toggle('active')
})

document.querySelectorAll('.accordion').forEach((button) => {
	button.addEventListener('click', () => {
		const panel = button.nextElementSibling
		panel.classList.toggle('active')
	})
})

document.querySelector('.show-filters-btn').addEventListener('click', () => {
	const filtered = getFilteredProducts() // Apply active filters
	displayProducts(filtered) // Update product list
	// closeMobileFilter()
})

function getFilteredProducts() {
	const checkedFeatures = Array.from(
		document.querySelectorAll('input[name="feature"]:checked')
	).map((cb) => cb.value)

	const priceMin = parseInt(document.querySelector('#price-min').value)
	const priceMax = parseInt(document.querySelector('#price-max').value)

	return products.filter((p) => {
		const matchesFeature =
			checkedFeatures.length === 0 || checkedFeatures.includes(p.category)
		const matchesPrice = p.price >= priceMin && p.price <= priceMax
		return matchesFeature && matchesPrice
	})
}

let showBtn = document
	.querySelector('.show-filters-btn')
	.addEventListener('click', (evt) => {
		evt.preventDefault()
		window.location.href = `catalog.html`
	})

const resetFiltersBtn = document.querySelector('.reset-filters-btn')

resetFiltersBtn.addEventListener('click', () => {
	// Uncheck all checkboxes
	document
		.querySelectorAll('input[name="feature"]')
		.forEach((cb) => (cb.checked = false))

	// Reset price range
	document.getElementById('price-min').value = 0
	document.getElementById('price-max').value = 25000

	// Display all products
	displayProducts(products)

	// Optional: close the filter panel
})
