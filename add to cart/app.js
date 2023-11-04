let menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://img.freepik.com/premium-photo/delicious-pancakes-with-fresh-berries-honey_79782-2527.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=sph  ",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://img.freepik.com/free-photo/milkshake-with-whipped-cream-oreo-cookie-top_140725-3457.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://img.freepik.com/premium-photo/traditional-turkish-breakfast-table-bright-background_392895-385573.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://img.freepik.com/free-photo/squid-fried-with-curry-paste-white-plate-with-vegetables-side-dishes-white-wooden-floor_1150-28469.jpg?size=626&ext=jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://img.freepik.com/premium-photo/delectable-chocolate-cocktail-infused-with-cookies-cream-resembling-mudslide-this-delightf_908985-14608.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://img.freepik.com/free-photo/front-view-fresh-sliced-ham-with-bread-slices-buns-dark-meat-color-snack-meal-food-pig_140725-92968.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://img.freepik.com/free-photo/delicious-fast-food-composition_23-2147695691.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://img.freepik.com/free-photo/assortment-milkshake-glasses-tray-with-chocolate-fruits_23-2148707764.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "https://img.freepik.com/free-photo/grilled-beef-fillet-medallion-with-sauce-vegetables-white-plate_140725-9210.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  
  const carts = [];
  
  
  display = (data) => {
  
    const displayHtml = data.map((v, index) => {
  
      return (`<article class="menu-item">
        <img src="${v.img}"alt="menu item" class="photo" />
      <div class="item-info">
          <header>
            <h4>${v.title}</h4>
            <h4 class="price">${v.price}</h4>
          </header>
          <p class="item-text">${v.desc}</p>
          <a type="button" class=" btn filter-btn" data-id="all" onclick="addProduct('${index}')">Add to cart</a>
          
        </div>
      </article>`)
    })
  
    let category = menu.map((v) => {
  
      return v.category;
  
    }).reduce((pre, curr, index) => {
      if (!pre.includes(curr)) {
        pre.push(curr)
      }
      return pre;
  
    }, [])
  
    let button = category.map((p) => {
  
      return (`<button type="button" class="filter-btn" data-id="breakfast" onclick="filterData('${p}')">${p}</button>`)
    })
  
  
    document.getElementById("btn").innerHTML = button.join(" ");
  
    document.getElementById("menu").innerHTML = displayHtml.join(" ");
  
  }
  display(menu);
  
  
  
  filterData = (category) => {
  
    const filterValue = menu.filter((v) => {
  
      return v.category === category;
    })
  
    display(filterValue);
  }
  
  ascending = () => {
  
    const ascending = menu.sort((a, b) => {
  
      if (a.price > b.price) {
        return 1
      }
      else {
        return -1;
      }
    })
  
    display(ascending);
  }
  
  dscending = () => {
  
    const dscending = menu.sort((a, b) => {
  
      if (a.price < b.price) {
        return 1
      }
      else {
        return -1
      }
    })
    display(dscending);
  }
  
  
  const addProduct = (myindex) => {
  
    const selectedProduct = menu[myindex];
  
    const findProduct = carts.find((v) => {
  
      return v.item.id === selectedProduct.id
    })
  
    if (!findProduct) {
  
      carts.push({ item: selectedProduct, count: 1 });
    }
    else {
      findProduct.count = findProduct.count + 1;
    }
  
    let p = carts.reduce((pre, curr) => {
  
      return pre + curr.item.price * curr.count;
  
    }, 0)
  
    document.getElementById("dis").innerHTML = carts.length;
   
     document.getElementById("total").value = p;
  
    displayCartItems(carts);
  }
  
  
  const displayCartItems = (carts) => {
  
    let p = carts.map((v,index) => {
  
      return (`<tr>
          <td><img src="${v.item.img}" alt="menu item" class="photo" /></td>
          <td><h4>${v.item.category}<h4></td>
          <td ><h4 class="price">${v.item.price}</h4></td>
          <td><input type="text" class="inputchange" value="${v.count}"/>
          <button type="button" class="filter-btn" onclick="inc('${index}')">+</button>
          <button type="button" class="filter-btn" onclick="dec('${index}')">-</button></td>           
        </tr>`)
    })
  
    document.getElementById("cartitems").innerHTML = p.join("");
  }
  
  const inc = (index) =>
  {
    carts[index].count = carts[index].count+1;
  
    displayCartItems(carts);
  } 
  
  const dec = (index) =>
  {
    carts[index].count = carts[index].count-1;
    
    displayCartItems(carts);
  } 
  