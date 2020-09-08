
function getLuckyNumber() {
    let luckyNumber = Math.floor(Math.random() * 10) + 1;
    return parseInt(luckyNumber);
}
let luckyNumber = getLuckyNumber();
let soluot = 0;
let mainForm = document.getElementById("mainForm");
mainForm.addEventListener("submit", function (e) {
    
    e.preventDefault();    
    let number = parseInt(mainForm.luckyNumber.value);
    let pError = document.getElementById("show-error");
    let pSuccess = document.getElementById("show-success");
    if (number > 10 || number < 1) {
        pError.innerText = "Vui lòng nhập vào số trong khoảng từ 1 đến 10!";
        mainForm.luckyNumber.value = "";
    }
    else if (number == luckyNumber) {
        pSuccess.innerText = `Chúc mừng bạn đã dự đoán chính xác! Con số may mắn của chúng ta là ${luckyNumber}`;
        pError.innerText = ``;
        
    }
    else if (number || luckyNumber) {        
        pError.innerText = `Bạn đã dự đoán sai! Vui lòng đoán lại`;
        pSuccess.innerText = ``;
        soluot++;
    }
    if (soluot > 3) {
        pError.innerText = `Bạn đã thua! Con số may mắn của chúng ta là ${luckyNumber}`;
        setTimeout(function(){
            window.location.reload();
        },3000)
        
    }
    console.log(soluot);
})
