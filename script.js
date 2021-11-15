// // Mouse Over 
let cont = document.getElementById('container')
let preHtml = document.getElementById('container').innerHTML

cont.addEventListener('mouseover', function () {
    cont.style.width = "300px";
    cont.style.height = "300px";
    cont.style.border = "8px solid #c7cce4";
    cont.style.background = "#f45353";
    document.getElementById('container').innerHTML = "This is not sample"
    console.log('Mouse Over')
})
cont.addEventListener('mouseout', function () {
    cont.style.width = "150px";
    cont.style.height = "150px";
    cont.style.background = "#c7cce4";
    cont.style.border = "8px solid #f45353";
    document.getElementById('container').innerHTML = preHtml;
    console.log('Mouse Out')
})

function checkLeapYear(){
    let year = document.getElementById('year').value
    year = parseInt(yar)
    console.log(year)
    document.getElementById('')
}