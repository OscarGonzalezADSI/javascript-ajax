class AjaxRequest
{
    constructor(url)
    {
        http_request = this.#window();
    }

    #window()
    {
        try {
            if(window.XMLHttpRequest)
            {
                return this.#xmlHttpRequest();
            } 
            else if (window.ActiveXObject)
            {
                return this.#activeXObject();
            }
        } catch (e) {
            return false;
        }
    }

    #xmlHttpRequest()
    {
        try {
            http_request = new XMLHttpRequest();
            if(http_request.overrideMimeType)
            {
                http_request.overrideMimeType('text/xml');
            }
            return http_request;
        } catch (e) {
            return false;
        }
    }

    #activeXObject()
    {
        try {
            return this.#msxmlTwo();
        } catch (e) {
            return this.#microsoft();
        }
    }
    
    #msxmlTwo()
    {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
        return http_request;
    }
    
    #microsoft()
    {
        try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
            return http_request;
        } catch (e){
            return false;
        }
    }
    
    validation(http_request, url)
    {
        if(http_request !== false)
        {
            this.use(http_request, url);
        }else{
            alert('Falla :( No es posible crear una instancia XMLHTTP');
            return false;
        }
    }
    
    use(http_request, url)
    {
        http_request.onreadystatechange = alert("function to change.");
        http_request.open('GET', url, true);
        http_request.send();
    }
    
}
