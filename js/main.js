$(document).ready(function(){
    // start side bar code 
$('#aboutUs').hover(
    function(){
    $('#sideAboutContent').fadeIn(400);
    },function(){
        $('#sideAboutContent').fadeOut(200);
    }
)

$('#contactUs').hover(
    function(){
    $('#sideContactContent').fadeIn(400);
    },function(){
        $('#sideContactContent').fadeOut(200);
    }
)

$('#findUs').hover(
    function(){
    $('#findUsContent').fadeIn(400);
    },function(){
        $('#findUsContent').fadeOut(200);
    }
)

    // end side bar code 
});
















let allRows = [];
let httpRequ =new XMLHttpRequest();
httpRequ.open('GET','http://forkify-api.herokuapp.com/api/search?&q=pasta');
httpRequ.send();


httpRequ.addEventListener('readystatechange',function(){
if(httpRequ.readyState == 4){
    console.log(
allRows= JSON.parse( httpRequ.response).count);
}
});
