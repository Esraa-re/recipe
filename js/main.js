
let allData = [];
function getData(type) {
    let myhttp = new XMLHttpRequest();

    //connection established
    myhttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${type}`);

    //send request to server
    myhttp.send();

    //recieve response 
    myhttp.addEventListener("readystatechange", function () {
        if (myhttp.readyState == 4) {
            let data = JSON.parse(myhttp.response);
            allData = data.recipes;
            display();


        }
    });
}


//call getData
getData("pizza");

//display data
function display() {
    let recipe = ``;
    for (let i = 0; i < allData.length; i++) {
        recipe += ` <div class="col-md-3 col-xs-12" id="recipe">
           <a href="${allData[i].source_url}" target="_blank" ><img src="${allData[i].image_url}" alt="Recipes-photo" class="w-100 shadow"/></a>
           <a href="${allData[i].source_url}" target="_blank" > <h3 class="fs-5 text-center pt-2 shadow">${allData[i].title}</h3></a>
        </div>`
    }
    document.querySelector("#myData").innerHTML = recipe;
}

let select = document.querySelector("select");
select.addEventListener("change", function (e) {
    getData(e.target.value);
});