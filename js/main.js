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
        $("#addRecipeBtn").removeClass("active");
        $("#addedRecipesBtn").removeClass("active");
        $("#profileBtn").removeClass("active");
        $("#searchSection").fadeOut(400);
        $("#recipesByApi").fadeOut(400);
        $("#addRecipesSection").fadeOut(400);
        $("#UsersAddedRecipesSection").fadeOut(400);
        $("#profileSection").fadeOut(400);
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
            $('.sideIcon2').removeClass('openIt');
        }
    } )
}

sideHide( $('#aboutUs'), $('#sideAboutContent') );
sideHide( $('#contactUs'), $('#sideContactContent') );
sideHide( $('#findUs'), $('#findUsContent') );
    

$("#scoialLinks").click( ()=>{
    $('.page').click( ()=> $('.sideIcon2').removeClass('openIt'))
    if( $('.sideIcon2').hasClass('openIt') ){
        $('.sideIcon2').removeClass('openIt')
    }else{
        $('.sideIcon2').addClass('openIt');
     $('.sideBar2').siblings().removeClass('openIt')
    }
})

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


// start add recipe 
$("#addRecipeBtn").click( ()=>{
    $("#addRecipesSection").siblings().fadeOut(400,()=>{
    $("#addRecipeBtn").addClass("active");
    $("#addRecipeBtn").siblings().removeClass("active");
    $("#overLanding").fadeIn(700,()=>{
     $("#addRecipesSection").fadeIn(400,()=>{
        $("#joinBtn").fadeOut(400,()=>{
            $("#closeSign").fadeIn(400);
            $("#switcher").fadeOut(400);
        })
     });   
    });

    });
} )




// end add recipe 



// start added recipes 

$("#addedRecipesBtn").click( ()=>{
    $("#usersAddedRecipesSection").siblings().fadeOut(400,()=>{
    $("#addedRecipesBtn").addClass("active");
    $("#addedRecipesBtn").siblings().removeClass("active");
    $("#overLanding").fadeIn(700,()=>{
     $("#usersAddedRecipesSection").fadeIn(400,()=>{
        $("#joinBtn").fadeOut(400,()=>{
            $("#closeSign").fadeIn(400);
            $("#switcher").fadeOut(400);
        })
     });   
    });

    });
} )



// end added recipes 




// start profile 
$("#profileBtn").click( ()=>{
    $("#profileSection").siblings().fadeOut(400,()=>{
    $("#profileBtn").addClass("active");
    $("#profileBtn").siblings().removeClass("active");
    $("#overLanding").fadeIn(700,()=>{
     $("#profileSection").fadeIn(400,()=>{
        $("#joinBtn").fadeOut(400,()=>{
            $("#closeSign").fadeIn(400);
            $("#switcher").fadeOut(400);
        })
     });   
    });

    });
} )




function profileSwitcher(btn,content){
    btn.click( ()=>{
        btn.siblings().removeClass("active");
        btn.addClass("active");

        content.siblings().fadeOut(400);
        content.delay(400).fadeIn(400);
    })
}

profileSwitcher( $('#profiler'),$('#profileData') );

profileSwitcher( $('#favoriter'),$('#profileFavorites')  );

profileSwitcher( $('#myReciper'),$('#recipesAddedByme')  );

// end profile 

});






let allRecipes = [];
let apiAllRecipes = document.getElementById("apiAllRecipes");

async function getRecipe(){
let apiResponse =   await fetch('http://forkify-api.herokuapp.com/api/search?&q=pasta');
     apiResponse = await apiResponse.json();
    allRecipes = apiResponse.recipes;
    displayAllRecipes();
}

 function displayAllRecipes(){
    container = ``;
    for( let i=0; i< allRecipes.length;i++ ){
        container+=`
        <div class="col-md-3 p-4 recipe">
        <img src="${allRecipes[i].image_url}" class="img-fluid recipe_img">
        <div class="overImage p-4">
        ${allRecipes[i].title}
        </div>
        </div>
        `
    }
    apiAllRecipes.innerHTML = container;
    
}

getRecipe();




// star searching 


// end searching 