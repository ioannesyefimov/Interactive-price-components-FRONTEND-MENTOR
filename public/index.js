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
    handleCosting()
}

function handleCosting() {
    let basicPrice = document.getElementById('basic-price')
    let professionalPrice = document.getElementById('professional-price')
    let masterPrice = document.getElementById('master-price')
    
    let billingPeriodData = billingSwitcher.getAttribute('data-period');
    let pricingList = [basicPrice, masterPrice, professionalPrice]
    switch(billingPeriodData){
        case 'monthly': {
            basicPrice.innerHTML = `$19.99`
            professionalPrice.innerHTML = `$24.99`
            masterPrice.innerHTML = `$39.99`;
            pricingList.forEach(e => {
                e.classList.remove('error-message', 'error')
            })
            break;
        }
        case `yearly`: {
            basicPrice.innerHTML = `$${(19.99 * 10).toFixed(1)}9`;
            professionalPrice.innerHTML = `$${(24.99 * 10).toFixed(1)}9`;
            masterPrice.innerHTML = `$${(39.99 * 10).toFixed(1)}9`;
            pricingList.forEach(e => {
                e.classList.remove('error-message', 'error')
            })
            break;
         }
        case 'false':{
            
            basicPrice.innerHTML = `Please toggle billing period`;
            professionalPrice.innerHTML = `Please toggle billing period`;
            masterPrice.innerHTML = `Please toggle billing period`;
            pricingList.forEach(e => {
                e.classList.add('error-message', 'error')
            })
            break;

        }
    }
    

}

billingSwitcher.addEventListener('click', handleBillingPeriod)
