// import { connection } from "./db/connection.js";

// const rawPaths = `src/public/products-pictures/ai-generated-8619138_640.webp
// src/public/products-pictures/bananas-1119790_640.jpg
// src/public/products-pictures/blueberries-7468718_640.jpg
// src/public/products-pictures/bread-399286_640.jpg
// src/public/products-pictures/carrots-673184_640.jpg
// src/public/products-pictures/category_img_01.jpg
// src/public/products-pictures/category_img_02.jpg
// src/public/products-pictures/category_img_03.jpg
// src/public/products-pictures/currants-3538617_640.jpg
// src/public/products-pictures/feature_prod_01.jpg
// src/public/products-pictures/feature_prod_02.jpg
// src/public/products-pictures/feature_prod_03.jpg
// src/public/products-pictures/macaroons-4851545_640.jpg
// src/public/products-pictures/oranges-2100108_640.jpg
// src/public/products-pictures/product_single_01.jpg
// src/public/products-pictures/product_single_02.jpg
// src/public/products-pictures/product_single_03.jpg
// src/public/products-pictures/product_single_04.jpg
// src/public/products-pictures/product_single_05.jpg
// src/public/products-pictures/product_single_06.jpg
// src/public/products-pictures/product_single_07.jpg
// src/public/products-pictures/product_single_08.jpg
// src/public/products-pictures/product_single_09.jpg
// src/public/products-pictures/product_single_10.jpg
// src/public/products-pictures/shish-kebab-417994_640.jpg
// src/public/products-pictures/shop_01.jpg
// src/public/products-pictures/shop_02.jpg
// src/public/products-pictures/shop_03.jpg
// src/public/products-pictures/shop_04.jpg
// src/public/products-pictures/shop_05.jpg
// src/public/products-pictures/shop_06.jpg
// src/public/products-pictures/shop_07.jpg
// src/public/products-pictures/shop_08.jpg
// src/public/products-pictures/shop_09.jpg
// src/public/products-pictures/shop_10.jpg
// src/public/products-pictures/shop_11.jpg
// src/public/products-pictures/strawberries-1339969_640.jpg
// src/public/products-pictures/strawberries-2960533_640.jpg
// src/public/products-pictures/tomato-1205699_640.jpg
// src/public/products-pictures/vegetables-752153_640.jpg
// src/public/products-pictures/vitamins-26622_640.webp`;

// const fix = rawPaths.replace("src/public/", "").split("src/public/");
// const description =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo itaque";

// fix.forEach(async (element) => {
//   const price = Math.floor(Math.random() * 100);
//   const quantity = Math.floor(Math.random() * 1000);

//   const query = await connection.query(
//     "INSERT INTO products (name,price,quantity,description) VALUES(?,?,?,?)",
//     [element, price, quantity, description]
//   );
// });


