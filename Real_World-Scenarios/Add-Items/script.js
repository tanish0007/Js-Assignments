const nameBox = document.querySelector("#nameBox");
const quanBox = document.querySelector("#quanBox");
const priceBox = document.querySelector("#priceBox");
const descBox = document.querySelector("#descBox");
const addBtn = document.querySelector("#addBtn");
const buttons = document.querySelector(".Buttons");
const showItems = document.querySelector(".lower-div");

let items = [];
let id = 1;

addBtn.addEventListener("click", (event) => {
    let item = {
        id: id, 
        name: nameBox.value, 
        quantity: quanBox.value, 
        price: priceBox.value,
        description: descBox.value, 
    }

    console.log(item);
    items.push(item);
    addToDom(item);
})

function addToDom(item) {
    const div = document.createElement("div");
    div.setAttribute("id", item.id);

    const firstLI = document.createElement("li");
    firstLI.classList.add(".itemName");
    firstLI.innerText = item.name;
    div.appendChild(firstLI);

    const secondLI = document.createElement("li");
    secondLI.classList.add(".itemQuantity");
    secondLI.innerText = item.quantity;
    div.appendChild(secondLI);

    const thirdLI = document.createElement("li");
    thirdLI.classList.add(".itemPrice");
    thirdLI.innerText = item.price;
    div.appendChild(thirdLI);

    const fourthLI = document.createElement("li");
    fourthLI.classList.add(".itemDesc");
    fourthLI.innerText = item.description;
    div.appendChild(fourthLI);

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    div.appendChild(delBtn);
    delBtn.addEventListener("click", (evt) => {
        items = items.filter((element) => {
            if(element.id != item.id)
                return true;
        });
        div.remove();
    })

    const updBtn = document.createElement("button");
    updBtn.innerText = "Update";
    div.appendChild(updBtn);
    updBtn.addEventListener("click", (e) => {
        nameBox.value = firstLI.innerText;
        quanBox.value = secondLI.innerText;
        priceBox.value = thirdLI.innerText;
        descBox.value = fourthLI.innerText;

        const updNow = document.createElement("button");
        updNow.innerText = "Update Now"
        buttons.appendChild(updNow);

        updNow.addEventListener("click", () => {
            items = items.map((elem) => {
                if(elem.id == item.id){
                    if(nameBox.value != elem.name)
                        elem.name = nameBox.value;
                    if(quanBox.value != elem.quantity)
                        elem.quantity = quanBox.value;
                    if(priceBox.value != elem.price)
                        elem.price = priceBox.value;
                    if(descBox.value != elem.description)
                        elem.description = descBox.value;
                }
                return elem;
            })
        })
    })

    showItems.appendChild(div);

    nameBox.value = "";
    quanBox.value = "";
    priceBox.value = "";
    descBox.value = "";
}