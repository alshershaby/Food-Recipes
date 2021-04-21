

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
