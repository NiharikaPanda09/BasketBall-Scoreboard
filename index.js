let para = document.getElementById("scoreboard-1");
let score2 = document.getElementById("scoreboard-2")
let count = 0;
let guestCnt = 0;
function addOne(){
 count += 1;
 para.textContent = count;
}
function addTwo(){
count += 2;
 para.textContent = count;
}
function addThree(){
count += 3;
 para.textContent = count;
}
function Once(){
 guestCnt += 1;
 score2.textContent = guestCnt;
}
function Twice(){
guestCnt += 2;
 score2.textContent = guestCnt;
}
function Thrice(){
guestCnt += 3;
 score2.textContent = guestCnt;
}
