// Selectors
const inputRange = document.querySelector('#range')
const inputCheck = document.querySelector('#check')

// Event Listeners
inputRange.oninput = () => {
	return calculate(inputRange.value, inputCheck.checked)
}
inputCheck.onchange = () => {
	return calculate(inputRange.value, inputCheck.checked)
}

// Functions
function calculate(range, check) {
	const MAX_INPUT_RANGE = 30
	const PERCENT = MAX_INPUT_RANGE / 100
	const fillValue = `${range / PERCENT}%`

	if (check) {
		const DISCOUNT = 0.75
		show(range * DISCOUNT, fillValue)
	} else {
		show(range, fillValue)
	}
}
function show(rangeNo, fillValue) {
	console.log(rangeNo)
	const inputValue = document.querySelector('.amount')
	const inputFillValue = document.querySelector('.active-slide')

	inputValue.innerHTML = ''

	const inputText = document.createTextNode(
		`$ ${parseFloat(rangeNo).toFixed(2)}`
	)
	inputValue.append(inputText)

	inputFillValue.style.width = fillValue
}
function showViews(res) {
	let value = res.value
	if (value >= 1000) {
		value.splice(value.length - 4, 'k')
	}
	document.querySelector('.pageviews').innerText = `${res.value} pageviews`
}
