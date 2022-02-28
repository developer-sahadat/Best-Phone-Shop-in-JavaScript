/*----------------- Search product code start now--------------------*/

    document.getElementById('search_btn').addEventListener('click', ()=>{
        // search input field
        const input_field=document.getElementById('search-input').value;

        //input error handling

        if(input_field==''){
            const h2=document.getElementById('error_message');
            h2.innerText='Plsease search by entering the product name'
            document.getElementById('products-section').textContent=''
            document.getElementById('product-details-page').textContent=''
            
        }else{
            const url=`https://openapi.programming-hero.com/api/phones?search=${input_field}`
            fetch(url)
            .then(Response=>Response.json())
            .then(data=>products_section(data.data.slice(0,20)))
            document.getElementById('search-input').value=''

        }
    })

    
// products function code start
    const products_section=(phones)=>{
        
        //error message empty
        document.getElementById('error_message').innerText=''

        if(phones.length=='0'){
            const h2=document.getElementById('error_message');
            h2.innerText=`Oops! We couldn't find results for your search:`
            document.getElementById('products-section').textContent=''
            document.getElementById('product-details-page').textContent=''
        }else{

            const parent=document.getElementById('products-section')
                parent.textContent='';
            phones.forEach(phone => {
                
                // A div has been created here
                const div=document.createElement('div');

                div.innerHTML=`
                <div class="shadow rounded-3 p-3">
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
            //error message empty
            document.getElementById('error_message').innerText=''

            
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
                <div class="card border-0   w-50">
                <img src="${details.data.image}" class=" img-fluid rounded-start" alt="...">
                    
                </div>
                <div class="ms-5 w-50">

                <h4 class="card-title fw-bolder py-2">${details.data.name}</h4>
                <h6 class="card-title fw-bolder">${details.data.brand}</h6>
                <p>${details.data.releaseDate}</p>
                <hr>
                
                <h6 style='border-bottom:1px solid gray; ' class='w-50 p-1 bold'>Main Features</h6>
                    <p > Chip Set: ${details.data.mainFeatures.chipSet}</p>
                    <p >Memory: ${details.data.mainFeatures.memory}</p>
                    <p >Display Size: ${details.data.mainFeatures.displaySize}</p>
                    <p > Storage:${details.data.mainFeatures.storage}</p>
                    <p > Sensors: ${details.data.mainFeatures.sensors}</p>
                    <hr>

                    <h6 style='border-bottom:1px solid gray; ' class='w-50 p-1 bold'>Other Features</h6>
                    <p >Bluetooth: ${details.data.others.Bluetooth}</p>
                    <p > GPS:${details.data.others.GPS}</p>
                    <p > NFC: ${details.data.others.NFC}</p>
                    <p >NFC: ${details.data.others.Radio}</p>
                    <p > NFC: ${details.data.others.USB}</p>
                    <p > NFC: ${details.data.others.WLAN}</p>

                </div>
                </div>
                </div>
                </div>

            `
            parent.appendChild(div)

     }



/*----------------- product details page code ends --------------------*/

