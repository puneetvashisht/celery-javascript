import { useState } from "react";

const AddProduct = () => {
    const [price, setPrice] = useState()
    const [name, setName] = useState('')
    const addProduct = () => {
        console.log(name, price);
        const product = { name, price };
        
        fetch("http://localhost:3000/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
           .then(res => {
                console.log(res.status);
                if (res.status === 201) {
                    console.log("Product added successfully");
                    setProducts([...products, product]);
                } else {
                    console.log("Failed to add product");
                }
            })
    }

    return (
        <>
        <div className="input-group mb-3">
        <span className="input-group-text" >Product Name</span>
        <input id="basic-addon1" type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Product Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" >Product Price</span>
            <input id="basic-addon2" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Enter Product Price" aria-label="Username" aria-describedby="basic-addon2" />
        </div>
        <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
    </>
    )
}

export default AddProduct;