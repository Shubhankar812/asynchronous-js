const getTodos = (resource) =>{
    const request = new XMLHttpRequest();
 
    return new Promise((resolve,reject) => {
    request.addEventListener('readystatechange',() => {
        // console.log(request,request.readyState);
       
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined,data);
        }
        else if(request.readyState === 4){
            callback("Could not fetch data",undefined);
        }
    });
    
    request.open('GET',resource);
    request.send();  
})
};

// // console.log(1);
// // console.log(2);

// // CALLBACK HELL....
// getTodos('todos/mario.json',(err,data) =>{
//   console.log(data); 
//     getTodos('todos/qwerty.json',(err,data)=>{
//      console.log(data);
//        getTodos('todos/shaun.json',(err,data)=>{
//         console.log(data);
//     });
//  });
// });

getTodos('todos/mario.json').then((data) => {
    console.log("Promise resolved");
}).then((err)=>{
    console.log("rejected !")
})
// Promises
const getSomething = () =>{

    return new Promise((resolve,reject)=>{
        // fetch something
        resolve("Some data");
        // reject("Some error");
    }) 
};

// getSomething().then((data)=>{
//     console.log(data);
// }, (err)=>{
//     console.log(err);
// });

getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);

})