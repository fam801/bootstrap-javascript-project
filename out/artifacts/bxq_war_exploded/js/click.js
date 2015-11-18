
function mbar(sobj) {
var docurl =sobj.options[sobj.selectedIndex].value;
if (docurl != "") {
   open(docurl,'_self');
   sobj.selectedIndex=0;
   sobj.blur();
}
}
//-->

function goto(){
    
    var values=document.getElementById('ss').value;
    window.location.href=values;
   
}
