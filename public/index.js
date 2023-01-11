const billingSwitcher = document.querySelector('.switcher');

const basicCard = document.querySelector('.basic')
const professionalCard = document.querySelector('.professional')
const masterCard = document.querySelector('.master')

function handleBillingPeriod(){
    let billingPeriodData = billingSwitcher.getAttribute('data-period');

    switch(billingPeriodData){
        case 'false': {
            billingSwitcher.setAttribute('data-period', 'monthly');
            break;
        }
        case 'monthly': {
            billingSwitcher.setAttribute('data-period', 'yearly');
            break;
        }
        case 'yearly': {
            billingSwitcher.setAttribute('data-period', 'false');
            break;
        }

    }
}

// function handleCosting() {
//     let basicPrice = basicCard.children
//     console.log(basicPrice)
// }
let basicPrice = basicCard.children
console.log(basicPrice)

billingSwitcher.addEventListener('click', handleBillingPeriod)