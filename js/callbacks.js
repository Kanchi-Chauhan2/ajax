
/////////////////////      SUM     ////////////////////////////

function display(a){
    document.body.innerHTML=`${a}`;
}

function sum(x,y,callback){
    console.log('sum');
    let a=x+y;
    callback(a);
}
sum(1,2,display);





/////////////////////       image transitions          /////////////////////////////





/*
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '../img/about.jpg';

imgArray[1] = new Image();
imgArray[1].src = '../img/about-banner.jpg';

imgArray[2] = new Image();
imgArray[2].src = '../img/flag_america.jpg';

document.querySelector('.container').src=imgArray[0].src;

console.log('finished');

*/




//////////////////////////////////////////////////////////////////






/*
array=[
    {title:"array one"},
    {title:"array two"}
];

function createPost(post){
    setTimeout(()=>{
        array.push(post);
    },2000);
}
function getPost(){
    setTimeout(()=>{
        let output='';
    array.forEach(element => {
        output+=`<li>${element.title}</li>`
    });
    document.body.innerHTML=output;
    },1000);
    
}
getPost();

createPost({title:"array three"});

console.log(array);

*/



///////////////////////      PRACTICE         ////////////////////////




/*
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

*/


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
