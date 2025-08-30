let copyCount=0;
const navberCopy=document.getElementById('navberCopy');
const btnCopys=document.getElementsByClassName('copy-btn')
for(const btnCopy of btnCopys){
  btnCopy.addEventListener('click',function(){
    copyCount++;
    navberCopy.innerText=copyCount;
  })
}