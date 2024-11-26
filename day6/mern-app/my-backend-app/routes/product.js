const express = require('express')
const router = express.Router()

// crud from DB (mongo db)
const products = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300}
]

router.get('/', (req, res)=> {
    res.json(products)
})

router.get('/:id', (req, res)=> {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product) return res.status(404).send('Product not found')
    res.json(product)
})

router.post('/', (req, res)=> {
    const newProduct = req.body
    newProduct.id = products.length + 1
    products.push(newProduct)
    res.status(201).json(newProduct)
})


router.patch('/', (req, res)=> {
    const productIndex = products.findIndex(p => p.id === parseInt(req.body.id))
    if (productIndex === -1) return res.status(404).send('Product not found')

    const updatedProduct = {...products[productIndex],...req.body}
    products[productIndex] = updatedProduct
    res.json(updatedProduct)
})

router.delete('/:id', (req, res)=> {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id)   )
    if (productIndex === -1) return res.status(404).send('Product not found')

    products.splice(productIndex, 1)
    res.sendStatus(204)
})

module.exports = router