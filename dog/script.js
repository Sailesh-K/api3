document.querySelector("button").addEventListener("click",result)
document.getElementById("ran").addEventListener("click",resultRan)

var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result(){
    try {
        row.innerHTML=" ";
        var ask = document.getElementById("Shows").value;   
        var data = await fetch(`https://dog.ceo/api/breed/${ask}/images/random`);
        var res = await data.json();
        var col= document.createElement("div");
        col.className='col-lg-4';
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${res.message}" alt="Card image cap">
        </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);
    } 
    
    catch (error) {
        console.log(error);
    }
}

async function resultRan(){
    try {
        row.innerHTML=" ";
       /* var ask = document.getElementById("Shows").value;   */
        var data = await fetch(`https://dog.ceo/api/breeds/image/random`);
        var res = await data.json();
        var col= document.createElement("div");
        col.className='col-lg-4';
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${res.message}" alt="Card image cap">
        </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);
    } 
    
    catch (error) {
        console.log(error);
    }
}

