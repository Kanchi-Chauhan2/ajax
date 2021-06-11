/////////////////////////    PROMISES     //////////////////////////



/*
function display(some){
    document.body.innerHTML=some;
}

let promise=new Promise(function(resolve,reject){
    
    let x=0;

    if(x==0){
        resolve("okk");
    }
    else{
        reject("error");
    }
});

promise.then(
    function(value){
        display(value);
    },
    function(error){
        display(error);
    }
)*/



///////////////////         practice by simple example       /////////////////////



/*

let promise=new Promise(function(resolve,reject){

    let x=8;

    if(x==0){
        resolve("okk");
    }
    else{
        reject("error");
    }
});

promise.then(
    function(value){
        document.body.innerHTML=value;
        console.log(value);
    },
    function(error){
        document.body.innerHTML=error;
        console.log(error);
    }
)

*/



////////////////////////     promises in callback   /////////////////////////


let posts=[
    {title:"post 1", body:"this is post one"},
    {title:"post 2", body:"this is post two"}
];

function createpost(post,callback){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);
            resolve();
        },3000);
    } );
}

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
        output+=`<li>${post.title}</li>`;
    })
    document.body.innerHTML=output;
    },1000);  
}

createpost({title:"post3", body:"post three"})
.then(getPost);