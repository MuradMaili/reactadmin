import './productlist.css'
import { DeleteOutline } from "@mui/icons-material"
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const[data,setData]=useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };
      


      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "price",
          headerName: "Price",
          width: 120,
        },
        
        {
          field: "action",
          headerName: "Action",
          width: 120,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
                
              </>
            );
          },
        },
      ];

  return (
    <div className="productList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
      
    </div>
  )
}

export default ProductList