class Table extends AjaxRequest
{
    constructor(url, met, data)
    {
        super(http_request);
        this.validation(http_request, url, met, data);
    }
    
    validation(http_request, url, met, data)
    {
        if(http_request !== false)
        {
            this.use(http_request, url, met, data);
        }else{
            alert('Falla :( No es posible crear una instancia XMLHTTP');
            return false;
        }
    }
    
    use(http_request, url, met, data)
    {
        http_request.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
               new ViewProduct(this.responseText);
            }
        };
        
        if(met === 'POST')
        {
            http_request.open(met, url, true);
            http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http_request.send(data);
        }
        
        if(met === 'GET')
        {
            http_request.open(met, url, true);
            http_request.send();
        }
        
    }
    
}
