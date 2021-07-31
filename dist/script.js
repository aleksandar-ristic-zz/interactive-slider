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
	values = getValues(range)
	const MAX_INPUT_RANGE = 4
	const PERCENT = MAX_INPUT_RANGE / 100
	const fillValue = `${range / PERCENT}%`

	if (check) {
		const DISCOUNT = 0.75
		show(values.range * DISCOUNT, fillValue, values.views)
	} else {
		show(values.range, fillValue, values.views)
	}
}
function show(rangeNo, fillValue, viewsNo) {
	const inputValue = document.querySelector('.amount')
	const inputFillValue = document.querySelector('.active-slide')
	const pageviews = document.querySelector('.pageviews')

	inputValue.innerText = `$ ${parseFloat(rangeNo).toFixed(2)}`

	pageviews.innerText = `${viewsNo} pageviews`
	inputFillValue.style.width = fillValue
}
function getValues(i) {
	const range = [8, 12, 16, 24, 36]
	const views = ['10k', '50k', '100k', '500k', '1M']

	return { range: range[i], views: views[i] }
}

//* CountAPI
function showViews(res) {
	document.querySelector('.viewed-times').innerText = res.value
}
