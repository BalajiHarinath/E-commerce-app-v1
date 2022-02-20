const filterBtnSmallScreen = document.querySelector(".filter-btn-small-screen");
const applyBtnSmallScreen = document.querySelector(".left-filter-apply-btn-small-screen");
const clearBtnSmallScreen = document.querySelector(".left-filter-clear-btn-small-screen");
const leftFilter = document.querySelector(".left-filter");

const clickableItems = [filterBtnSmallScreen,applyBtnSmallScreen,clearBtnSmallScreen]

clickableItems.forEach((button) => {
    button.addEventListener("click",() => {
        leftFilter.classList.toggle("left-filter-small-screen");
    })
})