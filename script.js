const billAmountInput = document.querySelector('#bill-amount')
const customTipInput = document.querySelector('.custom-tip')
const numberOfPeopleInput = document.querySelector('.number-of-people')
const generateBillBtn = document.querySelector('.generate-bill-btn')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const totalbill=document.querySelector('.total span')
const tip_amount=document.querySelector('.tip-amount span')
const tip_container=document.querySelector('.tip-container')
const reset_btn=document.querySelector('.reset-btn')
let tipPercentage=0;

generateBillBtn.addEventListener('click',()=>{
    const billamount=parseInt(billAmountInput.value)
    const numberofpeople=parseInt(numberOfPeopleInput.value)
    const tipamount=billamount*(tipPercentage/100);
    const totalbillamount=billamount+tipamount
    const eachPersonBill=totalbillamount/numberofpeople;

    tip_amount.innerText=`₹${tipamount}`
     eachPersonBillOutput.innerText=`₹${eachPersonBill}`
     totalbill.innerText=`₹${totalbillamount}`
     reset_btn.disabled=false
})

tip_container.addEventListener('click',(e)=>{
    if(tip_container.classList.contains('disabled')) return
    if(tip_container!==e.target){
        [...tip_container.children].forEach((tip) => {
            tip.classList.remove('selected')
        });
        e.target.classList.add('selected')
        tipPercentage=(parseInt(e.target.innerText))
        customTipInput.value=''
    }
})

customTipInput.addEventListener('input',()=>{
    tipPercentage=parseInt(customTipInput.value);
    [...tip_container.children].forEach((tip) => {
        tip.classList.remove('selected')
    });

})

reset_btn.addEventListener('click',()=>{
    tipPercentage=0;
    numberOfPeopleInput.value='';
    customTipInput.value='';
    billAmountInput.value='';
    [...tip_container.children].forEach((tip) => {
        tip.classList.remove('selected')
    });
    tip_amount.innerText='';
     eachPersonBillOutput.innerText='';
     totalbill.innerText='';
     reset_btn.disabled=true
     generateBillBtn.disabled=true
})

billAmountInput.addEventListener('input',()=>{
    if(billAmountInput.value){
        customTipInput.disabled=false;
        numberOfPeopleInput.disabled=false;
        tip_container.classList.remove('disabled')
    } else{
        customTipInput.disabled=true
        numberOfPeopleInput.disabled=true
        tip_container.classList.add('disabled')
    }
})

numberOfPeopleInput.addEventListener('input',()=>{
    if(numberOfPeopleInput.value &&tipPercentage){
        generateBillBtn.disabled=false;
    }
    else{
      generateBillBtn.disabled=true      
    }
})
