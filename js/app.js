/*----------------- Search product code start now--------------------*/

    document.getElementById('search_btn').addEventListener('click', ()=>{
        // search input field
        const input_field=document.getElementById('search-input').value; 
       const url=`https://openapi.programming-hero.com/api/phones?search=${input_field}`
       fetch(url)
       .then(Response=>Response.json())
       .then(data=>products_section(data.data.slice(0,20)))
       document.getElementById('search-input').value=''
    })

    
    // products function code start

    const products_section=(phones)=>{
        
        // all products parent
        const parent=document.getElementById('products-section')
            parent.textContent='';
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
                <h5 class="modal-title" id="exampleModalLabel">Phone Details</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="d-flex m-2 justify-content-center align-items-center ">
                <div class="card border-0 shadow-none  w-50">
                <img src="${details.data.image}" class=" img-fluied rounded-start" alt="...">
                    
                </div>
                <div class="ms-5 w-50">
                    <p > <span class='h6 fw-bolder'>Release Date:</span> 
                    ${details.data.releaseDate}</p>
                    <p > <span class='h6 fw-bolder'>Chip Set:</span> ${details.data.mainFeatures.chipSet}</p>
                    <p > <span class='h6 fw-bolder'>Memory:</span> ${details.data.mainFeatures.memory}</p>
                    <p > <span class='h6 fw-bolder'>Display Size:</span> ${details.data.mainFeatures.displaySize}</p>
                    <p > <span class='h6 fw-bolder'>Storage:</span> ${details.data.mainFeatures.storage}</p>
                    <p > <span class='h6 fw-bolder'>Sensors:</span> ${details.data.mainFeatures.sensors}</p>
                    <p > <span class='h6 fw-bolder'>Bluetooth:</span> ${details.data.others.Bluetooth}</p>
                    
                    <p > <span class='h6 fw-bolder'>GPS:</span> ${details.data.others.GPS}</p>
                    <p > <span class='h6 fw-bolder'>NFC:</span> ${details.data.others.NFC}</p>
                    <p > <span class='h6 fw-bolder'>NFC:</span> ${details.data.others.Radio}</p>
                    <p > <span class='h6 fw-bolder'>NFC:</span> ${details.data.others.USB}</p>
                    <p > <span class='h6 fw-bolder'>NFC:</span> ${details.data.others.WLAN}</p>
                </div>
                </div>
                </div>
                </div>

            `
            parent.appendChild(div)

     }



/*----------------- product details page code ends --------------------*/

