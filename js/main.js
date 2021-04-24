$(document).ready(function(){
    // start side bar code 



function sideHide(icon,content){
    $('.page').click( ()=> content.removeClass('openIt'))
    icon.click( ()=>{
        if( content.hasClass('openIt') ){
            content.removeClass('openIt')
        }else{
            content.addClass('openIt').siblings().removeClass('openIt')
        }
    } )
}

sideHide( $('#aboutUs'), $('#sideAboutContent') );
sideHide( $('#contactUs'), $('#sideContactContent') );
sideHide( $('#findUs'), $('#findUsContent') );
    // end side bar code 
});


let allRows = [];
let httpRequ =new XMLHttpRequest();
httpRequ.open('GET','http://forkify-api.herokuapp.com/api/search?&q=pasta');
httpRequ.send();


httpRequ.addEventListener('readystatechange',function(){
if(httpRequ.readyState == 4 && httpRequ.status == 200){
    console.log(
    allRows= JSON.parse( httpRequ.response).recipes);
}
});
