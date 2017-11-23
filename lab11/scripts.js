function Number(){
var userNum = document.getElementById('userNum').value;

for(count=0;count<=userNum;count++){
console.log(count);
document.getElementById('para').innerHTML += "<br />" +count;
}
}
