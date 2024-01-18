$.ajax({
    type: "GET",
    url: "https://dragonball-api.com/api/characters",
    success: function (response) {
        // console.log(response.items[1]);
        for (let i = 0; i < response.items.length; i++){
            $(".cards").append(`<div class="card"> 
            <div class="card_image"> 
            <img src="${response.items[i].image}" alt="" class="img"> 
            </div>
            <div class="card-content"> 
            <h1 class="name">${response.items[i].name}</h1>  
            <h3 class="gender">${response.items[i].race} - ${response.items[i].gender}</h3> 
            <h5 class="k">Base KI:</h5> 
            <h3 class="ki">${response.items[i].ki}</h3>  
            <h5 class="k">Total KI:</h5>
            <h3 class="maxKi">${response.items[i].maxKi}</h3>
            <h5 class="k">Afilliation:</h5> 
            <h3 class="affiliation">${response.items[i].affiliation}</h3>  
            </div> </div>`);
        }
    }
});