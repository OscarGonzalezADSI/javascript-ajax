class RoutesW3school
{
    constructor(route, type, data)
    {
        this.helloUser(route, type, data);
        this.loadDoc(route, type);
        this.demo_get(route, type);
        this.demo_getMath(route, type, data);
        this.demo_get2(route, type, data);
        this.table(route, type, data);
    }

    helloUser(route, type, data)
    {
        if(route == '/hello')
        {
            const url = 'https://www.w3schools.com/xml/demo_post2.asp';
            const myAjax = new AjaxW3school(url, type, data);
        }
    }
    
    loadDoc(route, type)
    {
        if(route == '/loadDoc')
        {
            const url = 'https://www.w3schools.com/xml/ajax_info.txt';
            const myAjax = new AjaxW3school(url, type, '');
        }
    }
    
    demo_get(route, type)
    {
        if(route == '/demo-get')
        {
            const url = 'https://www.w3schools.com/xml/demo_get.asp';
            const myAjax = new AjaxW3school(url, type, '');
        }
    }
    
    demo_getMath(route, type, data)
    {
        if(route == '/demo-get/')
        {
            const url = 'https://www.w3schools.com/xml/demo_get.asp?t='+data;
            const myAjax = new AjaxW3school(url, type, '');
        }
    }
    
    demo_get2(route, type, data)
    {
        if(route == '/demo-get2/')
        {
            const url = 'https://www.w3schools.com/xml/demo_get2.asp?'+data;
            const myAjax = new AjaxW3school(url, type, '');
        }
    }
    
}
