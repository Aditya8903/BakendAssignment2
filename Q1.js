const http = require('http');

const PORT = 3000;
const HostName = 'localhost';

const menProducts = [
    {
      name: "Men's Shirt",
      category: "Men",
      price: 25.99,
      rating: 4.5,
    },
    {
      name: "Men's Jeans",
      category: "Men",
      price: 39.99,
      rating: 4.2,
    },
    {
      name: "Men's Sneakers",
      category: "Men",
      price: 59.99,
      rating: 4.7,
    },
    {
      name: "Men's Watch",
      category: "Men",
      price: 79.99,
      rating: 4.8,
    },
    {
      name: "Men's Backpack",
      category: "Men",
      price: 49.99,
      rating: 4.4,
    },
    {
      name: "Men's Sunglasses",
      category: "Men",
      price: 15.99,
      rating: 4.1,
    },
    {
      name: "Men's T-Shirt",
      category: "Men",
      price: 19.99,
      rating: 4.3,
    },
    {
      name: "Men's Shorts",
      category: "Men",
      price: 29.99,
      rating: 4.2,
    },
    {
      name: "Men's Wallet",
      category: "Men",
      price: 12.99,
      rating: 4.0,
    },
    {
      name: "Men's Belt",
      category: "Men",
      price: 17.99,
      rating: 4.6,
    },
  ];

  
  const womenProducts = [
    {
      name: "Women's Dress",
      category: "Women",
      price: 34.99,
      rating: 4.6,
    },
    {
      name: "Women's Shoes",
      category: "Women",
      price: 49.99,
      rating: 4.4,
    },
    {
      name: "Women's Handbag",
      category: "Women",
      price: 29.99,
      rating: 4.3,
    },
    {
      name: "Women's Earrings",
      category: "Women",
      price: 9.99,
      rating: 4.1,
    },
    {
      name: "Women's Perfume",
      category: "Women",
      price: 19.99,
      rating: 4.7,
    },
    {
      name: "Women's Skirt",
      category: "Women",
      price: 24.99,
      rating: 4.5,
    },
    {
      name: "Women's Sunglasses",
      category: "Women",
      price: 15.99,
      rating: 4.0,
    },
    {
      name: "Women's Necklace",
      category: "Women",
      price: 12.99,
      rating: 4.2,
    },
    {
      name: "Women's Blouse",
      category: "Women",
      price: 27.99,
      rating: 4.4,
    },
    {
      name: "Women's Scarf",
      category: "Women",
      price: 8.99,
      rating: 4.1,
    },
  ];
  

const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type', 'application/json');


    if (req.url=='/') {
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(200);
    res.end(`Welcome to Men & Women Dummy Data`);
    }else if(req.url=='/men'){
        res.writeHead(200);
        res.end(JSON.stringify(menProducts));
    }else if(req.url=='/women'){
        res.writeHead(200);
        res.end(JSON.stringify(womenProducts));
    }else{
        res.setHeader('Content-Type', 'text/plain');
        res.writeHead(404);
        res.end('Page not Found')
    }
})

server.listen(PORT,()=>{
    console.log(`Server Running at ${HostName}:${PORT}`);
})