import { useState } from "react";
import { useEffect } from "react";

const ViewProducts = () => {

    const [products, setProducts] = useState([])
    const [price, setPrice] = useState()
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("Initization here..");
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                console.log(products);
                setProducts(data);

            })

    }, [])

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

    const deleteProduct = (id) => {

        fetch("http://localhost:3000/products/" + id, {
            method: 'DELETE'
        })
            .then(res => {
                console.log(res.status);
                if (res.status === 200) {
                    console.log("Product deleted successfully");
                    const updatedProducts = products.filter(product => product.id !== id);
                    setProducts(updatedProducts);
                } else {
                    console.log("Failed to delete product");
                }
            })


    }

    let productsList = products.map((product, i) => (
        <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td><button onClick={() => deleteProduct(product.id)} className="btn btn-danger">X</button></td>
        </tr>
    ))


    return (
        <>
            <div class="input-group mb-3">
                <span class="input-group-text" >Product Name</span>
                <input id="basic-addon1" type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Enter Product Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" >Product Price</span>
                <input id="basic-addon2" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} class="form-control" placeholder="Enter Product Price" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <button class="btn btn-primary" onClick={addProduct}>Add Product</button>


            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Price</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList}
                </tbody>
            </table>
        </>
    )

}

export default ViewProducts;