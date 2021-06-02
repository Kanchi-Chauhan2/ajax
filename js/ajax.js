//////////////// PRACTICE  ///////////////////
document.getElementById('button').addEventListener('click',loadtxt);

function loadtxt(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET','data.txt',true);
    
    /*xhr.onreadystatechange=function(){
        console.log(this.readyState);
        if(this.status===200 && this.readyState===4){
            console.log(this.responseText);
        }
    }*/
    xhr.onprogress=function(){
        console.log(xhr.readyState);
    }
    xhr.onload=function(){
        console.log(xhr.readyState);

        if(this.status===200){
            document.getElementById('output').innerHTML=
            `<h1>${this.responseText}<h1>`
        }
    }
    xhr.onerror=function(){
        console.log('error occured');
    }
    xhr.send();
}




////////////////    AJAX    ///////////////////





/*document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    const xhr=new XMLHttpRequest();

    //OPEN
    xhr.open('GET','data.txt',true);

    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }
    }
    xhr.send();
}*/

