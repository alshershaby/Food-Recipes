$(document).ready(function(){

// start joining 
$("#switcher span").click( ()=>{
    $("#joinBtn").fadeToggle(400);
    $("#LogInBtn").fadeToggle(400);
 
} )


$("#joinBtn").click( ()=>{
    $("#joinBtn").toggleClass('active');
    $("#overLanding").fadeToggle(700,function(){
        $("#joinSection").fadeIn(400,()=>{
            $('#joinBtn').fadeOut(400,()=>{
                $("#closeSign").fadeIn("400")
            })
        });

    });
});

$("#LogInBtn").click( ()=>{
    $("#overLanding").fadeToggle(700, ()=>{
        $("#loginSection").fadeIn(400,()=>{
            $("#LogInBtn").fadeOut(400,()=>{
                $("#closeSign").fadeIn("400");
            })
        });
    })
} )

$('#closeSign').click( ()=>{
    $("#joinSection").fadeOut(400,()=>{
    $("#overLanding").fadeOut(400,()=>{
        $("#closeSign").fadeOut(400,()=>{
            $("#joinBtn").fadeIn(400)
        })
    })     
    });
    $("#loginSection").fadeOut(400,()=>{
        $("#overLanding").fadeOut(400,()=>{
            $("#closeSign").fadeOut(400,()=>{
                $("#joinBtn").fadeIn(400)
            })
        })     
        });
} )


// end joining 
    // start side bar code 



function sideHide(icon,content){
    $('.page').click( ()=> content.removeClass('openIt'))
    icon.click( ()=>{
      
        if( content.hasClass('openIt') ){
            content.removeClass('openIt');
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


// let allRows = [];
// let httpRequ =new XMLHttpRequest();
// httpRequ.open('GET','http://forkify-api.herokuapp.com/api/search?&q=pasta');
// httpRequ.send();


// httpRequ.addEventListener('readystatechange',function(){
// if(httpRequ.readyState == 4 && httpRequ.status == 200){
//     console.log(
//     allRows= JSON.parse( httpRequ.response).recipes);
// }
// });
