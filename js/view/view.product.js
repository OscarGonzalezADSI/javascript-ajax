class ViewProduct
{
    constructor(data)
    {
        const text = JSON.parse(data);
        const table = document.createElement('table');
        const caption = document.createElement('caption');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        
        this.tableSetAttribute(table);
        this.caption(table, caption);
        this.title(thead);
        this.rows(tbody, text);
        this.end(table, thead, tbody);
    }
    
    tableSetAttribute(table)
    {
        table.setAttribute('id', 'product');
    }
    
    caption(table, caption)
    {
        const title = "productos";
        const textNode = document.createTextNode(title);
        caption.appendChild(textNode);
        table.appendChild(caption);
    }

    title(thead)
    {
        const theadRow = thead.insertRow();
        const th1 = document.createElement('th');
        const th2 = document.createElement('th');
        const th3 = document.createElement('th');
        
        th1.appendChild(document.createTextNode('nombre'));
        th2.appendChild(document.createTextNode('precio'));
        th3.appendChild(document.createTextNode('cantidad'));
        
        theadRow.appendChild(th1);
        theadRow.appendChild(th2);
        theadRow.appendChild(th3);
    }

    rows(tbody, text)
    {
        for(let i=0; text.productos.length>i;i++){
            const row = tbody.insertRow();
            row.insertCell().appendChild(document.createTextNode(text.productos[i].nombre));
            row.insertCell().appendChild(document.createTextNode(text.productos[i].precio));
            row.insertCell().appendChild(document.createTextNode(text.productos[i].cantidad));
        }
    }
    
    end(table, thead, tbody)
    {
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById("index").innerHTML = '';
        document.getElementById("index").appendChild(table);
        console.log(document.getElementById("index").innerHTML);
    }
    
}
