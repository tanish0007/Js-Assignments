const nameBox = document.querySelector("#nameBox");
const quanBox = document.querySelector("#quanBox");
const priceBox = document.querySelector("#priceBox");
const descBox = document.querySelector("#descBox");
const addBtn = document.querySelector("#addBtn");
const buttons = document.querySelector(".Buttons");
const showItems = document.querySelector(".lower-div");

let items = [];

addBtn.addEventListener("click", (event) => {
    const existingUpdNow = document.querySelector("#updNowBtn");
    if (existingUpdNow) existingUpdNow.remove();

    if (!nameBox.value || !quanBox.value || !priceBox.value || !descBox.value) {
        alert("Please fill in all fields.");
        return;
    }

    // ********* if don't want to add same entry *********
    // const duplicateItems = items.filter(item => 
    //     item.name.trim().toLowerCase() === nameBox.value.trim().toLowerCase()
    // );

    // if (duplicateItems.length > 0) {
    //     alert(`Item "${duplicateItems[0].name}" already exists.`);
    //     return;
    // }


    let item = {
        id: Date.now(), 
        name: nameBox.value, 
        quantity: quanBox.value, 
        price: priceBox.value,
        description: descBox.value, 
    }
    items.push(item);
    addToDom(item);
    localStorage.setItem("items", JSON.stringify(items));   
    console.log(items);
})

function addToDom(item) {
    const div = document.createElement("div");
    div.setAttribute("id", item.id);
    div.classList.add("item");

    const ul = document.createElement("ul");

    const firstLI = document.createElement("li");
    firstLI.classList.add("itemName");
    firstLI.innerText = `Name : ${item.name}`;
    ul.appendChild(firstLI);

    const secondLI = document.createElement("li");
    secondLI.classList.add("itemQuantity");
    secondLI.innerText = `Quantity : ${item.quantity}`;
    ul.appendChild(secondLI);

    const thirdLI = document.createElement("li");
    thirdLI.classList.add("itemPrice");
    thirdLI.innerText = `Price : ${item.price}`;
    ul.appendChild(thirdLI);

    const fourthLI = document.createElement("li");
    fourthLI.classList.add("itemDesc");
    fourthLI.innerText = `Description : ${item.description}`;
    ul.appendChild(fourthLI);

    div.appendChild(ul);
    
    const btnBox = document.createElement("div");
    btnBox.classList.add("button-box");

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.setAttribute("id", "delBtn");
    delBtn.addEventListener("click", () => {
        const confirmDelete = confirm(`Are you sure you want to delete "${item.name}"?`);
        if (!confirmDelete) return;

        items = items.filter((element) => {
            if(element.id !== item.id)
                return true;
        });
        localStorage.setItem("items", JSON.stringify(items));
        div.remove();
    })
    btnBox.appendChild(delBtn);

    const updBtn = document.createElement("button");
    updBtn.innerText = "Update";
    updBtn.addEventListener("click", () => {
        const confirmUpdate = confirm(`Are you sure you want to update "${item.name}"?`);
        if (!confirmUpdate) return;

        nameBox.value = item.name;
        quanBox.value = item.quantity;
        priceBox.value = item.price;
        descBox.value = item.description;

        const existingUpdNow = document.querySelector("#updNowBtn");
        if (existingUpdNow) existingUpdNow.remove();

        const updNow = document.createElement("button");
        updNow.innerText = "Update Now";
        updNow.id = "updNowBtn";
        buttons.appendChild(updNow);

        let changed = false;

        updNow.addEventListener("click", () => {
            items = items.map((elem) => {
                if(elem.id == item.id){
                    if(nameBox.value != elem.name && nameBox.value != ''){
                        elem.name = nameBox.value;
                        changed = true;
                    }
                    if(quanBox.value != elem.quantity && quanBox.value != null){
                        elem.quantity = quanBox.value;
                        changed = true;
                    }
                    if(priceBox.value != elem.price && priceBox.value != null){
                        elem.price = priceBox.value;
                        changed = true;
                    }
                    if(descBox.value != elem.description && descBox.value != ''){
                        elem.description = descBox.value;
                        changed = true;
                    }
                }
                return elem;
            })
            if(changed) {
                localStorage.setItem("items", JSON.stringify(items));
                showItems.innerHTML = '';
                loadLocalStorage();
                console.log(items);
                updNow.remove();
            } else {
                alert("No changes were made");
            }
        })
    })
    btnBox.appendChild(updBtn);
    div.appendChild(btnBox)

    showItems.appendChild(div);
    nameBox.value = "";
    quanBox.value = "";
    priceBox.value = "";
    descBox.value = "";
}

function loadLocalStorage() {
    items = JSON.parse(localStorage.getItem("items")) || [];
    items.forEach(element => {
        addToDom(element);
    });
}

loadLocalStorage();