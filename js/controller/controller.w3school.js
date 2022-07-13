document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById("enviar").addEventListener("click", ()=>{
        const data = 'fname=Henry&lname=Ford';
        new ServerRoutes('/hello', 'POST', data);
    });
    
    document.getElementById("enviar2").addEventListener("click", ()=>{
        new ServerRoutes('/loadDoc', 'GET', '');
    });
    
    document.getElementById("enviar3").addEventListener("click", ()=>{
        new ServerRoutes('/demo-get', 'GET', '');
    });
    
    document.getElementById("enviar4").addEventListener("click", ()=>{
        const data = Math.random();
        new ServerRoutes('/demo-get/', 'GET', data);
    });
    
    document.getElementById("enviar5").addEventListener("click", ()=>{
        const data = 'fname=Henry&lname=Ford';
        new ServerRoutes('/demo-get2/', 'GET', data);
    });
    
});
