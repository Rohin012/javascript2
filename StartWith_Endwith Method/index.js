

        const carts = [];
        let Products = [];

        const fetchProduct =()=>
        {
            fetch("https://fakestoreapi.com/products")
            .then(y=>y.json())
            .then(y=> {

                Products = y;
                display(y);
            })

        }
        fetchProduct();
        const display = (data)=> {

         const dis =   data.map((y,index)=>{

                return (`<div class="col-6 style="margin: 0px 10px;""><div class="card" style="width:300px; height: 300px;">
                        <img class="card-img-top" src="${y.image}" alt="Card image">
                        <div class="card-body">
                            <h4 class="card-title">${y.title}</h4>
                            <h4 class="price">${y.price}</h4>
                            <a href="#" class="btn btn-primary" onclick="addProduct(${index})">Add To Cart</a>
                        </div>
                        </div>
                        </div>
                        `)})
            document.getElementById("carts").innerHTML = dis.join(" ");
         }

        const addProduct = (myindex)=>{

            const selectedProduct= Products[myindex];
            const findProduct = carts.find((v)=>{

                return v.item.id == selectedProduct.id
            })

            if(!findProduct)
            {

                carts.push({item: selectedProduct,count:1});
            }
            else
            {
                findProduct.count = findProduct.count+1;

            }

          console.log(carts);
            

        
          let p = carts.reduce((pre,cuu)=>{

            return pre + cuu.item.price * cuu.count;

           },0);

           document.getElementById("mycart").innerHTML= carts.join(' ');
           document.getElementById("dis").innerHTML= carts.length;

           document.getElementById("price").innerHTML=p;
        
        
        updateCart();
        
        }
        


    updateCart=()=>{
      
      const Carts = carts.map((v)=>{
        return( `<div class="col-6 style="margin: 0px 20px;""><div class="card" style="width:300px; mix-height: 500px;">
                    <img class="card-img-top" src="${v.item.image}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${v.item.title}</h4>
                        <h4 class="price">${v.item.price}</h4>
                    </div>
                    </div>
                    </div>`)
                    })
            document.getElementById("mycart").innerHTML= Carts.join(' ');
      }

      const searchValue = ()=>{

          let filterData = Products.filter((value)=>{
          
          let selectcategory = document.getElementById("searchCategory").value

          let searchTerm = document.getElementById("searchTerm").value

          switch(selectcategory){

            case "start":

            return value.title.startsWith(searchTerm);

            case "end":

            return value.title.endsWith(searchTerm);

            case "contains":

            return value.title.includes(searchTerm);

          }

          
        })
      
        display(filterData);
      
      }
      const filterPrice = ()=>{

            const withPrice = carts.sort((a, b)=>{

                if(a.price>b.price){

                    return 1
                }
                else{
                    return -1
                }
            })
            display(withPrice);
      }

   