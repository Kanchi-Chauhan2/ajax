///////////////////////      PRACTICE         ////////////////////////





const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post one',body:'this is post two'}
];

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
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
createPost({title:'post 3',body:'asdfggggggggg'},getPost);

























///////////////////////       BRAD TRAVERSY        //////////////////////////




/*const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post one',body:'this is post one'}
];

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post)=>{
            output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

createPost({title:'post 3',body:'this is post 3'},getPosts);
*/