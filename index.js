//Identifica as mudanças feitas
function formatMoney(value){
    value = value.toFixed(2)
    return '$ ' + value
}


function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    // confere se os valores dos inputs são armazendados e mostrados no console
    //console.log(bill, tipPercent, split)

    let tipValue = bill * (tipPercent / 100)
    //console.log(tipPercent)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    //console.log(billEach)

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = split 
    document.getElementById('billEach').innerHTML = formatMoney(billEach)  
}

