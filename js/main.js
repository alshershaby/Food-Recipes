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
                $("#closeSign").fadeIn(400);
                $("#switcher").fadeOut(400);
            })
        });

    });
});

$("#LogInBtn").click( ()=>{
    $("#overLanding").fadeToggle(700, ()=>{
        $("#loginSection").fadeIn(400,()=>{
            $("#LogInBtn").fadeOut(400,()=>{
                $("#closeSign").fadeIn(400);
                $("#switcher").fadeOut(400);
            })
        });
    })
})

$('#closeSign').click( ()=>{
   
    $("#joinSection").fadeOut(400,()=>{
        $("#searchRecipeBtn").removeClass("active");
        $("#viewAllRecipes").removeClass("active");
        $("#searchSection").fadeOut(400);
        $("#recipesByApi").fadeOut(400);
        $("#overLanding").fadeOut(400,()=>{
        $("#closeSign").fadeOut(400,()=>{
            $("#joinBtn").fadeIn(400);
            $("#switcher").fadeIn(400);
        })
    })     
    
    
    });

    $("#loginSection").fadeOut(400,()=>{
        $("#overLanding").fadeOut(400,()=>{
            $("#closeSign").fadeOut(400,()=>{
                $("#joinBtn").fadeIn(400);
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


    // start search functions 

    $("#searchRecipeBtn").click( ()=>{
        $("#searchSection").siblings().fadeOut(400,()=>{
            $("#searchRecipeBtn").addClass("active");
            $("#searchRecipeBtn").siblings().removeClass("active");
            $("#overLanding").fadeIn(700,()=>{
             $("#searchSection").fadeIn(400,()=>{
                $("#joinBtn").fadeOut(400,()=>{
                    $("#closeSign").fadeIn(400);
                    $("#switcher").fadeOut(400);
                })
             });   
            })
    
        });        
    } )

    // end search functions 

    // start recipes by api 
    $("#viewAllRecipes").click( ()=>{
        $("#recipesByApi").siblings().fadeOut(400,()=>{
        $("#viewAllRecipes").addClass("active");
        $("#viewAllRecipes").siblings().removeClass("active");
        $("#overLanding").fadeIn(700,()=>{
         $("#recipesByApi").fadeIn(400,()=>{
            $("#joinBtn").fadeOut(400,()=>{
                $("#closeSign").fadeIn(400);
                $("#switcher").fadeOut(400);
            })
         });   
        });

        });
    } )


    // end recipes by api 

});


let allRows = [];
let httpRequ =new XMLHttpRequest();
let apiAllRecipes = document.getElementById("apiAllRecipes");
httpRequ.open('GET','http://forkify-api.herokuapp.com/api/search?&q=pasta');
httpRequ.send();
let recippesContainer=``;


httpRequ.addEventListener('readystatechange',function(){
if(httpRequ.readyState == 4 && httpRequ.status == 200){
    allRows= JSON.parse(httpRequ.response).recipes;
    displayRecipes();
}
});

function displayRecipes(){
    for(let i=0;i< allRows.length; i++){
        recippesContainer +=`
         <div class="col-md-3 recipe p-3">
            <img class="img-fluid rounded" src="${allRows[i].image_url}" alt="">
        </div>`
    }
    apiAllRecipes.innerHTML=recippesContainer;
}



