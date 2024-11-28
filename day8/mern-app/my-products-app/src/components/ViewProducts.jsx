import { useState } from "react";
import { useEffect } from "react";

const ViewProducts = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        console.log("Initization here..");
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                console.log(products);
                setProducts(data);

            })

    }, [])

    

    const deleteProduct = (id) => {

        fetch("http://localhost:3000/products/" + id, {
            method: 'DELETE'
        })
            .then(res => {
                console.log(res.status);
                if (res.status === 204) {
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
            <td><button onClick={() => deleteProduct(product._id)} className="btn btn-danger">X</button></td>
        </tr>
    ))


    return (
        <>
           

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