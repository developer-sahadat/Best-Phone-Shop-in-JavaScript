/*----------------- Search product code start now--------------------*/

    document.getElementById('search_btn').addEventListener('click', ()=>{
        // search input field
        const input_field=document.getElementById('search-input').value; 
       const url=`https://openapi.programming-hero.com/api/phones?search=${input_field}`
       fetch(url)
       .then(Response=>Response.json())
       .then(data=>products_section(data.data.slice(0,20)))
    })

    
    // products function code start

    const products_section=(phones)=>{
        // all products parent
        const parent=document.getElementById('products-section')

        phones.forEach(phone => {
            // A div has been created here
            const div=document.createElement('div');
            div.innerHTML=`
            <div class="shadow rounded-3">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fw-bolder py-2">Name: ${phone.phone_name}</h5>
              <h5 class="card-title fw-bolder">Brand: ${phone.brand}</h5>
              <button href="#" class="custom-button-style my-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="products_details('${phone.slug}')">Details Now</button>
            </div>
          </div>
            `
        parent.appendChild(div)
        })

    }

/*----------------- Search product code end now--------------------*/





/*----------------- product details page code start --------------------*/

    const products_details=id=>{
        const url=`https://openapi.programming-hero.com/api/phone/${id}`
        fetch(url)
        .then(Response=>Response.json())
        .then(data=>details_page(data))
    }


     // product details page function code start:
        const details_page=details=>{

            console.log(details);

            const parent=document.getElementById('product-details-page')
            parent.textContent=""

            // A div has been created here
            const div=document.createElement('div');

            div.innerHTML=`
                
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="d-flex m-2 justify-content-center align-items-center ">
                <div class="card border-0 shadow-none  w-40">
                <img src="${details.data.image}" class=" img-fluied rounded-start" alt="...">
                    
                </div>
                <div class="ms-5 w-60">
                    <h5  >Name: ${details.data.name}</h5>
                    <h6 >Brand: ${details.data.brand}</h6>
                     
                </div>
                </div>
                </div>
                </div>

            `
            parent.appendChild(div)

     }



/*----------------- product details page code ends --------------------*/

