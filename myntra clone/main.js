let shop=document.getElementById("shopmen");
console.log(shop);
let generateshop=()=>{
    return (shop.innerHTML=`
    <div>
    <a href="smartwatch.html"><img class="minimain" src="1mini.jpg"></a>
    </div>`)
};
generateshop();