//////////////////       PRACTICE  SINGLE CUSTOMER       ////////////////////




document.getElementById('button1').addEventListener('click',(e)=>{
    const xhr=new XMLHttpRequest();

    xhr.open('GET','customer.json',true);

    xhr.onload=function(){
        if(this.status===200){
            
            const customer=JSON.parse(this.responseText);
            document.getElementById('customer').innerHTML=
            `
            <ul>
            <li>ID:${customer.id}</li>
            <li>ID:${customer.name}</li>
            <li>ID:${customer.company}</li>
            <li>ID:${customer.phone}</li>`
        }
    }

    xhr.send()
})




///////////////////////      PRACTICE MULTIPLE CUSTOMER   ///////////////






document.getElementById('button2').addEventListener('click',(e)=>{

    const xhr=new XMLHttpRequest();

    xhr.open('GET','customers.json',true);

    xhr.onload=function(){

        const customers=JSON.parse(this.responseText);

        let output='';
        document.getElementById('customers').innerHTML=output;

        customers.forEach(customer => {
            output+=`
                <ul>
                <li>${customer.id}</li>
                <li>${customer.name}</li>
                <li>${customer.company}</li>
                <li>${customer.phone}</li>
                </ul>`
        });
                document.getElementById('customers').innerHTML=output;

    }


    xhr.send();

})







//////// LOAD SINGLE CUSTOMER





/*document.getElementById('button1').addEventListener('click',(e)=>{
    const xhr=new XMLHttpRequest;
    xhr.open('GET','Customer.json',true);

    xhr.onload=function(){
        if(this.status===200){
            const customer=JSON.parse(this.responseText);

            const output=`
            <ul>
            <li>ID:${customer.id}</li>
            <li>NAME:${customer.name}</li>
            <li>COMPANY:${customer.company}</li>
            <li>PHONE:${customer.phone}</li>
            </ul>`;

            document.getElementById('customer').innerHTML=output;
        }
    }
    xhr.send();
})




///////// LOAD CUSTOMERS




document.getElementById('button2').addEventListener('click',(e)=>{
    const xhr=new XMLHttpRequest;
    xhr.open('GET','customers.json',true);

    xhr.onload=function(){
        if(this.status===200){
            const customers=JSON.parse(this.responseText);
            let output='';
            customers.forEach(customer => {
             output +=`
            <ul>
            <li>ID:${customer.id}</li>
            <li>NAME:${customer.name}</li>
            <li>COMPANY:${customer.company}</li>
            <li>PHONE:${customer.phone}</li>
            </ul>`;

            });
            
            document.getElementById('customers').innerHTML=output;
        }
    }
    xhr.send();
})*/

