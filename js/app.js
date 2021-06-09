const http=new easyhttp();

/*http.get('https://jsonplaceholder.typicode.com/posts/1',
function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
    
})*/

const data={
    title:'post',
    body:'this is a custom post'
};

/*http.post('https://jsonplaceholder.typicode.com/posts/1',data,
function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
    
})*/

/*http.put('https://jsonplaceholder.typicode.com/posts/1',data,
function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
    
})*/

http.delete('https://jsonplaceholder.typicode.com/posts/1',data,
function(err,response){
    if(err){
        console.log(err);
    }else{
        console.log(response);
    }
    
})
