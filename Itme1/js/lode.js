
var obox = document.getElementsByClassName(".S_center")[0];
var dhj = document.getElementsByClassName("lan");
// console.log(dhj.length);
for(var i=0;i<dhj.length;i++){
    dhj[i].index=i;
    dhj[i].onclick=function(){
        for(var i=0;i<dhj.length;i++){
            dhj[i].className = "lan";
        }
        this.className="lan spa"
    }
}