
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ShopService } from '../../service/ShopService';
import { MultiSelect } from 'primereact/multiselect';
import './ShopDetailsTable.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    

const DataTableColTogglerDemo = () => {
    const columns = [
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    const [selectedColumns, setSelectedColumns] = useState(columns);
    const [products, setProducts] = useState([]);
    const shopService = new ShopService();

    useEffect(() => {
        shopService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter(col => selectedColumns.some(sCol => sCol.field === col.field));
        setSelectedColumns(orderedSelectedColumns);
    }

    const header = (
        <div style={{ textAlign:'left' }}>
            <MultiSelect value={selectedColumns} options={columns} optionLabel="header" onChange={onColumnToggle} style={{width:'20em'}}/>
        </div>
    );

    const columnComponents = selectedColumns.map(col=> {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <div className="card">
                <DataTable value={products} header={header} responsiveLayout="scroll" className="dataTable">
                    <Column field="code" header="Code" />
                    {columnComponents}
                </DataTable>
            </div>
        </div>
    );
}
export default DataTableColTogglerDemo