////////////////////////    CALLBACK     ////////////////////////





/*function user(email,phone,callback){
    setTimeout(()=>{
        console.log("I entered here");
        callback({usermail:email,userphone:phone}) ;
    },3000);
}

function getVideos(email,callback){
    setTimeout(()=>{
        callback(["video1","video2","video3"]);
    },1000)
}

function getanything(videos,callback){
    setTimeout(()=>{
        callback("title of the video");
    },2000);
}



/////////////  CALLBACKS MAKES IT NESTED  /////////////



const userfunc=user('ghjkl',22222,(user)=>{
    console.log(user.userphone);
    getVideos(user.usermail,videos=>{
        console.log(videos);
        getanything(videos[0],title=>{
            console.log(title);
        })
    })
});



console.log(userfunc);*/



////////////////////////////      PROMISES       /////////////////////////////

/*

function user(email,phone){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("I entered here");
            resolve({usermail:email,userphone:phone}) ;
        },3000);
    });
}

function getVideos(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["video1","video2","video3"]);
        },1000)
    });
   
}

function getanything(videos){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("title of the video");
        },2000);
    });
   
}


user("ghjkl","22222")
.then(user=>getVideos(user.email))
.then(videos=>getanything(videos))
*/



///////////////////////////     Promises     ////////////////////

/*var promise=new Promise(function(resolve,reject){
    const x=1;
    const y=2;

    if(x===y){
        resolve();
    }
    else
    {
        reject();
    }
});

promise
.then(function(){
    console.log("resolved");
},function(){
    console.log("rejected");
})*/


/*
var promise=new Promise(function(resolve,reject){
    reject('resolved');
})

promise
.then(function(success){
    console.log(success);
},function(){
    console.log(new Error("error"));
})
*/


/////////////////////////      Promise.resolve    ////////////////////////



/*var p=Promise.resolve(12345);

p.then(function(val){
    console.log(val);
});

var q=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([11,12,13]);
    },2000);
});

q.then(function(values){
    console.log(values);
});

const r=Promise.resolve(43255);

const res=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        r.then(val=>console.log(val));
    },1000);
});

res.then((valss)=>{
    console.log(valss);
})*/
