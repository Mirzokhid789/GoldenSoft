const featureMap = {
	'Электронные кодовые замки': 'electronic',
	'Биометрические замки': 'biometric',
	'Замок с отппечатком': 'fingerprint',
	'Замок с бесконтактной картой': 'contactless',
	'Программируемые замки': 'programmable',
	'Замки на батарейках': 'battery',
	'Замки с удаленным доступом': 'remote',
	'Bluetooth замки': 'bluetooth',
	'Электронные замки для квартиры': 'apartment',
	'Замки для стеклянных дверей': 'glass',
	'Электронные цилиндры': 'cylinder',
}

const featureCheckboxes = document.querySelectorAll(
	'.type-of__item input[type="checkbox"]'
)
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

function getCheckedFeatures() {
	return Array.from(featureCheckboxes)
		.filter((checkbox) => checkbox.checked)
		.map((checkbox) => {
			const labelText = checkbox.nextElementSibling.textContent.trim()
			return featureMap[labelText]
		})
		.filter(Boolean)
}

function filterByFeatures() {
	const selectedFeatures = getCheckedFeatures()
	if (selectedFeatures.length === 0) {
		displayProducts(products)
		return
	}

	const filtered = products.filter((product) =>
		selectedFeatures.every((feature) => product.features.includes(feature))
	)

	displayProducts(filtered)
}

featureCheckboxes.forEach((checkbox) =>
	checkbox.addEventListener('change', filterByFeatures)
)

displayProducts(products)
