# NPM Project

1. goto project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type: module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

...

script{
    "start": "node app.js",
    "dev": "nodemon prg7.js"
}

7. add node_modules to .gitignore
8. to run use `npm run dev`


# NPM Project


## REST API

- majorly backend server
  return only data not html file
- REST API uses (get, post,
  put, patch, delete) method to
  communicate with client
- any browser can check only
  get method
- for other method type we use
  third party API Tester like
  postman, thunder client, echo
  api etc


  ## dhannesh/fsd3-12     repo link


  ## request type :
  1. Get all , Get by ID 
    Get : /api/products (to find all the products)
    Get : /api/products/1 (to find the product whose ID is 1)
  2. Post  
    Post : /api/products (to send data to server)
  3. Patch/Put 
    Put/Patch : api/products/20
  4. Delete 
    Delete : api/products/20

  ## Export :
  exported function can be use any where by importing
