const billingSwitcher = document.querySelector('.switcher');

const basicCard = document.querySelector('.basic')
const professionalCard = document.querySelector('.professional')
const masterCard = document.querySelector('.master')
const btns = document.querySelectorAll('.btn')

const professionalPrice = document.getElementById('professional-price')
const basicPrice = document.getElementById('basic-price')
const masterPrice = document.getElementById('master-price')
const pricingList = [basicPrice, masterPrice, professionalPrice]


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
    handleCosting()
}

function handleCosting() {
    
    
    let billingPeriodData = billingSwitcher.getAttribute('data-period');
    switch(billingPeriodData){
        case 'monthly': {
            basicPrice.innerHTML = `$19.99`
            professionalPrice.innerHTML = `$24.99`
            masterPrice.innerHTML = `$39.99`;
            pricingList.forEach(e => {
                e.classList.remove('error')
            })
            break;
        }
        case `yearly`: {
            basicPrice.innerHTML = `$${(19.99 * 10).toFixed(1)}9`;
            professionalPrice.innerHTML = `$${(24.99 * 10).toFixed(1)}9`;
            masterPrice.innerHTML = `$${(39.99 * 10).toFixed(1)}9`;
            pricingList.forEach(e => {
                e.classList.remove('error')
            })
            break;
         }
        
    }
    

}

function handleBtn(){
    let billingPeriodData = billingSwitcher.getAttribute('data-period')
    switch(billingPeriodData){
        case 'false':{
            basicPrice.innerHTML = `Please toggle billing period`;
            professionalPrice.innerHTML = `Please toggle billing period`;
            masterPrice.innerHTML = `Please toggle billing period`;
            pricingList.forEach(e => {
                e.classList.add('error')
            })
            break;
        }
        case 'monthly':
        case 'yearly': {
            // take customer to fill form or smth like that  ...instead of reloading page
            function refreshPage(){
                window.location.reload();
            }
            refreshPage()
        }
    }
}

billingSwitcher.addEventListener('click', handleBillingPeriod)
btns.forEach(e => {
    e.addEventListener('click', handleBtn)
})