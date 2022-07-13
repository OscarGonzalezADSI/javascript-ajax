var http_request = false;

document.addEventListener('DOMContentLoaded', () =>{

    document.getElementById("enviar").addEventListener("click", ()=>{
        const myAjax = new MyAjax('./model/test.php', 'GET');
    });
    
});
