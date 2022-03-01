// -------Spinner loading code---------
const loadingSpinner=show=>{
    document.getElementById('spinner_loading').style.display=`${show}`
}

// main parent

const main_parent=show=>{
    document.getElementById('main-section').style.display=`${show}`
}


/*----------------- Search product code start now--------------------*/

document.getElementById('search_btn').addEventListener('click', ()=>{

        // loading Spinner show
        loadingSpinner('block')

        // main parent off
        main_parent('none')

        // search input field
        const input_field=document.getElementById('search-input').value;

        //input error handling
        if(input_field==''){
            const h2=document.getElementById('error_message');
            h2.innerText='Plsease search by entering the product name'
            document.getElementById('products-section').textContent=''
            document.getElementById('product-details-page').textContent=''

            // loading Spinner off
             loadingSpinner('none')
              // main parent off
                main_parent('block')
            
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

        // error handling
        if(phones.length=='0'){
            const h2=document.getElementById('error_message');
            h2.innerText=`Oops! We couldn't find results for your search:`
            document.getElementById('products-section').textContent=''
            document.getElementById('product-details-page').textContent=''
            // loading Spinner off
              loadingSpinner('none')

            // main parent off
            main_parent('block')
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
                    </div>`

                parent.appendChild(div)

                })
            
        // loading Spinner show
        loadingSpinner('none')
        // main parent off
         main_parent('block')
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

    //Release Date error handling      
    let releaseDate;
    if(details.data.releaseDate==''){
        releaseDate=`No Release Date Found`
    }else{
        releaseDate=details.data.releaseDate;
    }


    let bluetooth, gps, nfc, radio, usb, wlan;   
    if(details.data.others==undefined){
        bluetooth='No'
        gps='No'
        nfc='No'
        radio='No'
        usb='No'
        wlan='No'
    }else{
        bluetooth=details.data.others.Bluetooth;
        gps=details.data.others.GPS;
        nfc=details.data.others.NFC
        radio=details.data.others.Radio
        usb=details.data.others.USB
        wlan=details.data.others.WLAN
    }



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
                <div class="d-lg-flex m-2 justify-content-center align-items-center ">

                <div class="card border-0   w-80">
                <img src="${details.data.image}" class="img-fluid" alt="...">   
                </div>

                <div class="ms-lg-5  w-80 ">

                <h4 class="card-title fw-bolder py-2">${details.data.name}</h4>
                <h6 class="card-title fw-bolder">${details.data.brand}</h6>
                <p>${releaseDate}</p>
                <hr>
                
                <h6 style='border-bottom:1px solid gray; ' class='w-50 p-1 tw-bolder'>Main Features</h6>
                        <ul>
                            <li> Chip Set: ${details.data.mainFeatures.chipSet}</li>
                            <li >Memory: ${details.data.mainFeatures.memory}</li>
                            <li >Display Size: ${details.data.mainFeatures.displaySize}</li>
                            <li > Storage:${details.data.mainFeatures.storage}</li>
                            <li> Sensors: ${details.data.mainFeatures.sensors.slice(0,2)}
                                        <br>
                                        ${details.data.mainFeatures.sensors.slice(2,6)} 
                            </li>
                        </ul>
                    <hr>
   
                    <h6 style='border-bottom:1px solid gray; ' class='w-50 p-1 tw-bolder'>Other Features</h6>
                    <ul>
                        <li >Bluetooth: ${bluetooth}</li>
                        <li > GPS:${gps}</li>
                        <li > NFC: ${nfc}</li>
                        <li >Radio: ${radio}</li>
                        <li > USB: ${usb}</li>
                        <li > WLAN: ${wlan}</li>   
                    </ul>

                </div>
                </div>
                </div>
                </div>

            `
            parent.appendChild(div)

}



/*----------------- product details page code ends --------------------*/

