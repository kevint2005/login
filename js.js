function validate(){
var username=document.getElementById("us").value;
var password=document.getElementById("pw").value;
if(
username=="Kevin" && password=="Kkevinvip8" || 
username=="ila" && password=="mamtapecr" ||
username=="mattia" && password=="porro" ||
username=="andrea" && password=="ricchiuti" ||
username=="gabriele" && password=="storelli" ||
username=="santo" && password=="butera" ||
username=="francesco" && password=="diluzio" ||

){
    window.location.href = 'index2.html';
}else{
alert("login failed");
return false;


}






}
