document.addEventListener('DOMContentLoaded', () => {
	const formInputs = document.querySelectorAll(
		'.l1-info-box input[required], .pay-method-box input[required]'
	)
	const confirmBtn = document.querySelector('.accept-order-btn')

	// Create success message element
	const successMsg = document.createElement('p')
	successMsg.textContent =
		'Buyurtmangiz qabul qilindi, 24 soat ichida aloqaga chiqamiz'
	successMsg.style.display = 'none'
	successMsg.style.color = 'green'
	successMsg.style.marginTop = '10px'
	confirmBtn.parentElement.appendChild(successMsg)

	// Enable button if all required inputs are filled
	function checkInputs() {
		let allFilled = true
		formInputs.forEach((input) => {
			if (input.type === 'radio') {
				const name = input.name
				if (!document.querySelector(`input[name="${name}"]:checked`)) {
					allFilled = false
				}
			} else if (!input.value.trim()) {
				allFilled = false
			}
		})
		confirmBtn.disabled = !allFilled
	}

	formInputs.forEach((input) => {
		input.addEventListener('input', checkInputs)
		input.addEventListener('change', checkInputs) // For radio buttons
	})

	checkInputs()

	confirmBtn.addEventListener('click', (e) => {
		e.preventDefault()

		// Show success message
		successMsg.style.display = 'block'

		// Clear all input fields
		document.querySelectorAll('input').forEach((input) => {
			if (input.type === 'radio' || input.type === 'checkbox') {
				input.checked = false
			} else {
				input.value = ''
			}
		})

		// Reset button state
		confirmBtn.disabled = true
	})
})
