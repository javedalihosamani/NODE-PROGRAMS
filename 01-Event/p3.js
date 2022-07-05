var arr=[];

arr.push(function(){
    console.log("ReactJS");
});

arr.push(function(){
    console.log("Python");
});

arr.push(function(){
    console.log("Angular");
});

arr.push(function(){
    console.log("MongoDB","Node");
});

arr.forEach(function(item){
    item();
});