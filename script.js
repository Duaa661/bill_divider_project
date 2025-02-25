const billAmountInput = document.querySelector('#bill-amount')
const customTipInput = document.querySelector('.custom-tip')
const numberOfPeopleInput = document.querySelector('.number-of-people')
const generateBillBtn = document.querySelector('.generate-bill-btn')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const totalbill=document.querySelector('.total span')
const tip_amount=document.querySelector('.tip-amount span')
const customTip=document.querySelector('.custom-tip');

generateBillBtn.addEventListener('click',()=>{
    const billamount=parseInt(billAmountInput.value)
    const numberofpeople=parseInt(numberOfPeopleInput.value)
    const customtipamount=parseInt(customTip.value)

    const totalbillamount=billamount*((100+customtipamount)/100);
    const eachPersonBill=totalbillamount/numberofpeople;

    tip_amount.innerText=`₹${billamount*(customtipamount/100)}`
     eachPersonBillOutput.innerText=`₹${eachPersonBill}`
     totalbill.innerText=`₹${billamount}`
})