var products = [
    {name: "Chair", headline: "soft like cotton", url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "12,000"},
    {name: "Refrigerator", headline: "cold cold", url: "https://images.unsplash.com/photo-1582484898866-ac15ca496f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D", price: "52,600"},
    {name: "Television", headline: "watching everything", url: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHZ8ZW58MHx8MHx8fDA%3D", price: "34,000"},
    {name: "Washing Machine", headline: "wash clothes in a minutes", url: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "58,000"},
    {name: "Chair", headline: "lakdi ki chair", url: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww", price: "9,000"},
    {name: "Television", headline: "watching everything", url: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHZ8ZW58MHx8MHx8fDA%3D", price: "34,000"},
    {name: "Washing Machine", headline: "wash clothes in a minutes", url: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "58,000"},
    {name: "Chair", headline: "lakdi ki chair", url: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww", price: "9,000"}
]

var popularProducts = [
    {name: "Chair", headline: "soft like cotton", url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "12,000"},
    {name: "Refrigerator", headline: "cold cold", url: "https://images.unsplash.com/photo-1582484898866-ac15ca496f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D", price: "52,600"},
    {name: "Television", headline: "watching everything", url: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHZ8ZW58MHx8MHx8fDA%3D", price: "34,000"},
    {name: "Washing Machine", headline: "wash clothes in a minutes", url: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "58,000"},
]

var cart = [];


function showCart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";

        cart.forEach(function(product,index){
            clutter += `
            <div class="flex gap-2 bg-white p-2 rounded-lg overflow-hidden">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.url}"/>
            </div>
            </div>
            <h3 class="font-semibold">${product.name}</h3>
            <h5 class="text-sm font-semibold opacity-80"> &#x20B9; ${product.price}</h5>
            </div>
            </div>
            `
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })

}

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(dets){
        if(dets.target.classList.contains('add')){
            cart.push(products[dets.target.dataset.index])
            console.log(cart)
        }
    })
}

function addPopularProducts(){
    var clutter = "";
    popularProducts.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.url}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&#x20B9; ${product.price}</h4>
        </div>
    </div>`
    })
    document.querySelector(".populars").innerHTML = clutter;
}

function addProducts(){
    var clutter = "";
products.forEach(function(product,index){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden ">
    <img class="w-full h-full object-cover" src ="${product.url}" />
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}.</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}.</h3>
                <h4 class="font-semibold mt-2">&#x20B9; ${product.price}</h4>
            </div>
            <button data-index = ${index} class="add w-10 h-10 rounded-full shader text-yellow-400">
            <i data-index = ${index} class="add ri-add-line"></i></button>
        </div>
    </div>
</div>`
})

document.querySelector(".products").innerHTML = clutter
}

showCart()
addToCart()
addPopularProducts()
addProducts()