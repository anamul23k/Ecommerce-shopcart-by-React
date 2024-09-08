# Ecommerce-shopcart-by-React
<br />
<p align="center"><img src="src/assets/logo/pngegg.png" width='100px'></p>
  <h1 align="center">Shopcart</h1>
  <h3 align="center">Shop smart, shop easy, shop now.</h3>


  
</p>

<p align="center">Shopcart is an easy-to-use ecommerce platform where you can browse products, add items to your cart, and view detailed product information. You can also leave reviews to help others make informed purchasing decisions. As an admin, you have the ability to create, edit, and delete items, as well as you can see progress of orders shipment as user and manipulate it as admin.</p>

## ✨ Features

- <b>View products:</b> Users can browse all products available on the website.
- <b>Filter products:</b> Users can filter products by brand, category, price range, and sorting options.
- <b>Search for products:</b> Users can search for specific products by name.
- <b>View cart items:</b> Users can view the items they have added to their cart.
- <b>Checkout:</b> Users can proceed to checkout and add their payment method.
- <b>View orders:</b> After completing checkout, users can view their orders and order details.
- <b>Review products:</b> Users can leave reviews for products they have purchased.
- <b>Add products:</b> Admins can add new products to the website.
- <b>Edit products:</b> Admins can edit existing product details.
- <b>Delete products:</b> Admins can delete products from the website.
- <b>View orders:</b> Admins can view all orders that have been placed on the website.
- <b>Manipulate order progress:</b> Admins can update the status of orders and track their progress.
- <b>View order progress chart:</b> Admin can view a chart showing the progress of their order from processing to delivery.
- <b>Account management:</b> Admin can see their earings and view their order history.

### Installation
 <i>General requirement</i> - <br/>
  In order for those projects to work, you'll need to have: <br/>
  <ul>
  <li>
    An IDE of your choice, but I'd really recommand Visual Studio code. If you do not own it yet, take a look
    <a href="https://code.visualstudio.com/"> here </a>.
  </li>
  </ul>

### Step 1: Clone the repo
- Either clone the repo or download the app and open the folder in the cli
- To clone the repo locally by doing -
```sh
git clone https://github.com/anamul23k/Ecommerce-shopcart-by-React.git
```

### Step 2: Install dependencies
  - Install all dependencies using the `npm install` command
  - To do so, open your IDE, select the persistence Project and open the terminal, type `npm install` 

### Step 3: Setup firebase
- Go to firebase app, create a Firebase project and register your app
- Install the SDK and initialize Firebase, take a look at the documentation <a href="https://firebase.google.com/docs/web/setup"> here </a>.
- Don't use my `firebase.js` file, which is inside `src` folder, because my firebase configuration is different from yours, please read the documentation mentioned in 2nd point.
- Start the web server using the `npm start` command. The app will be served at http://localhost:3000/

#### And you are good to go



# Application presentation and flow:

## I - Home Page
When you visit the Shopcart application, the first page you will directed to the home page of the application.
<img src="readme-images/2-home/1-home.png">

- If you do not have an account, you will have access to the following pages:
   * Home page
   * Cart page
   * Account menu (with login and register page links)
   * Login page
   * Register page
   * Reset password page."
- On the home page header, you can see the app logo on the left side and three menus on the far right side - <b>home</b>,<b>cart </b>, and <b>account</b>.
- If you have an account and logged in to that account, the <b>myOrders</b> option will be displayed and in the account menu <b>login</b> and <b>register</b> will be replaced with <b>resetPassword</b> and <b>logout</b> options, which you will see later in this documentation.
-Below the menu header, there is a wide banner with text and an image. Below the banner, you will see a list of products. On the left side of the products, you will see filters, and at the top of the list of products, you will see a search input box.



  ## Author

👤 **Md Anamul Hoque**

- Linkedin: [@Md Anamul Hoque](https://www.linkedin.com/in/md-anamul-hoque-833857198/)
- Github: [@Md Anamul Hoque](https://github.com/anamul23k)

## Show your support

Please ⭐️ this repository if you liked the project!
