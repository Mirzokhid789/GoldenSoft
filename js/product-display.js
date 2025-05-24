const ProductWrapper = document.querySelector('.products')

function displayProducts(arr) {
	ProductWrapper.innerHTML = ''
	arr.forEach((el) => {
		ProductWrapper.insertAdjacentHTML(
			'beforeend',
			`
      <div class="product-card">
        <div class="top-labels">
          <span class="stock out">${el.availability}</span>
          <span class="sale">SALE</span>
        </div>
        <div class="gift-label">🎁 Подарок</div>
        <img src="./${el.img}" alt="Product Image" class="product-image" />
        <div class="product-info">
          <div class="rating">★★☆☆☆ <span class="review-count">(12) отзывов</span></div>
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

displayProducts(products)

function updateDropdownText(text) {
	document.getElementById('dropdownMenuButton').textContent = text
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
