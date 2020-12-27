import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            name: "Habib",
            email: "admin@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: "John",
            email: "user@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        },
    ]
    ,
    products : [
        {
            name: 'Awesome Shirt',
            category: 'Shirts',
            image: 'images/s2.jpg',
            price: 110,
            countInStock: 23,
            brand: 'Panda',
            rating: 4.5,
            numReviews: 10,
            description: "high quality shirts"
        },
        {
            name: 'Outstanding Shirt',
            category: 'Shirts',
            image: 'images/s1.jpg',
            price: 120,
            countInStock: 12,
            brand: 'Marvel',
            rating: 5,
            numReviews: 7,
            description: "high quality shirts"
        },
        {
            name: 'Trending Shirt',
            category: 'Shirts',
            image: 'images/s3.jpg',
            price: 130,
            countInStock: 0,
            brand: 'Panda',
            rating: 3.5,
            numReviews: 8,
            description: "high quality shirts"
        },
        {
            name: 'Gorgeous Shirt',
            category: 'Shirts',
            image: 'images/s4.jpg',
            price: 110,
            countInStock: 17,
            brand: 'Ninja',
            rating: 3.5,
            numReviews: 12,
            description: "high quality shirts"
        },
        {
            name: 'Fit Shirt',
            category: 'Shirts',
            image: 'images/s5.jpg',
            price: 210,
            countInStock: 14,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: "high quality shirts"
        },
        {
            name: 'Nike Shirts',
            category: 'Shirts',
            image: 'images/s6.jpg',
            price: 100,
            countInStock: 36,
            brand: 'Gorgia',
            rating: 4,
            numReviews: 17,
            description: "high quality shirts"
        },
        {
            name: 'Being Human Shirts',
            category: 'Shirts',
            image: 'images/s7.jpg',
            price: 100,
            countInStock: 6,
            brand: 'Attire',
            rating: 4.5,
            numReviews: 17,
            description: "high quality shirts"
        },
    ]
}

export default data;