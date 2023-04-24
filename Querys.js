/*
!To open data base in terminal
mongo 

!To see databases
show dbs

!to create data base and also use to switch dbs
use shop

!creating collections and inserting data in db.
!we can insert many data at a time by using this syntax but in below I insert only 1data for example
db.products.insertMany([
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    }
])

!to see collections
show collections

*/


//* 1) Find all information about each product:
   //Query syntax to get all products are shown below:
      db.products.find({})

//* 2) Find the product price which are between 400 to 800:
   //Query syntax to get specific product between some range are shown below:
      db.products.find({products_price:{$gt:400}})

//* 3) Find the product price which are not between 400 to 800:
   //Query syntax to get the product which are not in the range by using conditional operators.
      db.products.find({$or:[{product_price:{$lt:400}},{product_price:{$gt:600}}]})

//* 4)list four product which are greater than 500 in price:
   //Query syntax to get the first your products which are greater than 500:
      db.products.find({products_price:{$gt:500}}).limit(4)

//* 5)Find the product name and product material of each product:
   //Query syntax to get the only product name and material.
      db.products.find({},{product_name:1,product_material:1})

//* 6)Find the product with a row id of 10
   //Query syntax to get the specific data
      db.products.find({id:'10'})  

//* 7)Find only the product name and product material
   //Query syntax getting only the product name and material and also remote the id from list.
      db.products.find({},{_id:0,product_name:1,product_material:1})

//* 8)Find all products which contain the value of sort in product material
   //Query syntax to get specific matched data.
      db.products.aggregate([{$match:{product_material:'Soft'}}])

//* 9)Find products which contain product color indigo and product price 492.00
   //Query syntax to get the matched data of two rows
      db.products.aggregate([{$match:{product_color:'indigo',product_price:492.00}}])

//* 10)Delete the products which product price value are same:
   //Query syntax to delete the products which product price value are same by using for each method and ternary operator.
      db.products.find({}).forEach((data)=>{
          db.products.find({product_price:data.product_price}).count()>1?db.products.deleteMany({product_price:data.product_price}):false
      })