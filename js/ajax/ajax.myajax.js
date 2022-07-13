class MyAjax extends AjaxRequest
{
    constructor(url, met)
    {
        super(http_request);
        this.validation(http_request, url, met);
    }
    
    validation(http_request, url, met)
    {
        if(http_request !== false)
        {
            this.use(http_request, url, met);
        }else{
            alert('Falla :( No es posible crear una instancia XMLHTTP');
            return false;
        }
    }
    
    use(http_request, url, met)
    {
        http_request.onreadystatechange = ()=>{ this.alertContents(); };
        http_request.open(met, url, true);
        http_request.send();
    }
    
    alertContents()
    {
        if(http_request.readyState == 4)
        {
            if(http_request.status == 200)
            {
                const data = http_request.responseText;
                const dataDecode = JSON.parse(data);
                alert(dataDecode[0]);
            } else {
                alert('Hubo problemas con la petición.....');
            }
        }
    }
}
