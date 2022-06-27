// 1. use the rest countries and display the flags of all the countries:


var request =new XMLHttpRequest();
request.open('get','https://restcountries.com/v3.1/all ','true');
request.send();
request.onload=function(){
   var data = json.parse(request.response) ;
   console.log(data);
   for(vari=0;i<=data.length;i++){
    console.log(data[i].flag)
   }
}

//2.print all countries name , sub region, regions and population:


var request =new XMLHttpRequest();
request.open('get','https://restcountries.com/v3.1/all ','true');
request.send();
request.onload=function(){
   var data = json.parse(request.response) ;
   console.log(data);
   for(vari=0;i<=data.length;i++){
    console.log(data[i].name,data[i].subregion ,data[i].populations,data[i].region)
   }
}

3.//obj 1 and obj 2

// both are similar but the position of array is varries. and 
// when the output are same but they are interchanging
