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
            console.log(phone);
            // A div has been created here
            const div=document.createElement('div');
            div.innerHTML=`
            <div class="shadow rounded-3">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fw-bolder py-2">Name: ${phone.phone_name}</h5>
              <h5 class="card-title fw-bolder">Brand: ${phone.brand}</h5>
              <button href="#" class="custom-button-style my-3">Details Now</button>
            </div>
          </div>
            `
            parent.appendChild(div)
        })

    }

/*----------------- Search product code end now--------------------*/
