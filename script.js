const counterDisplayEl = document.querySelector('.counterDisplay')
const counterPlusElem = document.querySelector('.add')
const counterMinusElem = document.querySelector('.minus')
let count = 0;
updateCount()
counterPlusElem.addEventListener("click", () => {
    count++
    updateCount()
});
counterMinusElem.addEventListener('click', () => {
    count--
    updateCount()
    if (count === 0) {
        updateCount = 0
    }
})

function updateCount() {
    counterDisplayEl.innerHTML = count;
}