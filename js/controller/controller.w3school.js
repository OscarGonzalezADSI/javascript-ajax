document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById("enviar").addEventListener("click", ()=>{
        const data = 'fname=Henry&lname=Ford';
        new RoutesW3school('/hello', 'POST', data);
        document.getElementById("menu").click();
    });
    
    document.getElementById("enviar2").addEventListener("click", ()=>{
        new RoutesW3school('/loadDoc', 'GET', '');
        document.getElementById("menu").click();
    });
    
    document.getElementById("enviar3").addEventListener("click", ()=>{
        new RoutesW3school('/demo-get', 'GET', '');
        document.getElementById("menu").click();
    });
    
    document.getElementById("enviar4").addEventListener("click", ()=>{
        const data = Math.random();
        new RoutesW3school('/demo-get/', 'GET', data);
        document.getElementById("menu").click();
    });
    
    document.getElementById("enviar5").addEventListener("click", ()=>{
        const data = 'fname=Henry&lname=Ford';
        new RoutesW3school('/demo-get2/', 'GET', data);
        document.getElementById("menu").click();
    });
    
    document.getElementById("enviar6").addEventListener("click", ()=>{
        new RoutesW3school('/table', 'GET', '');
        document.getElementById("menu").click();
    });
    
});
