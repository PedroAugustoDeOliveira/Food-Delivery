function burgerSelect(option){
    const select = document.querySelector(".burger .selected")
    
    if(select !== null){
        select.classList.remove("selected");
    }

    option.classList.add("selected");

    orderButton();
}

function drinkSelect(option){
    const select = document.querySelector(".drinks .selected")
    
    if(select !== null){
        select.classList.remove("selected");
    }

    option.classList.add("selected");

    orderButton();
}

function dessertSelect(option){
    const select = document.querySelector(".desserts .selected")
    
    if(select !== null){
        select.classList.remove("selected");
    }

    option.classList.add("selected");

    orderButton();
}

function orderButton(){
    const foodSelected = document.querySelector(".burger .selected")
    const drinkSelected = document.querySelector(".drinks .selected")
    const dessertSelected = document.querySelector(".desserts .selected")
    const finalButton = document.querySelector(".footer")

    if(
        foodSelected &&
        drinkSelected &&
        dessertSelected
    ){
        finalButton.classList.add("click")
        finalButton.innerHTML = "Close the Order"
        console.log("botão ativado")
    }
}

function closeOrder(finishOrder){
    if(finishOrder.classList.contains("click")){
        const nome = prompt("Your name")
        const adress = prompt("Your Adress")

        const burger = document.querySelector(".burger .selected");
        const drink = document.querySelector(".drinks .selected");
        const dessert = document.querySelector(".desserts .selected");

        const burgerName = burger.querySelector(".food-name h3").innerText;
        const burgerPrice = parseFloat(burger.querySelector(".price").innerText.slice(1));

        const drinkName = drink.querySelector(".food-name h3").innerText;
        const drinkPrice = parseFloat(drink.querySelector(".price").innerText.slice(1));

        const dessertName = dessert.querySelector(".food-name h3").innerText;
        const dessertPrice = parseFloat(dessert.querySelector(".price").innerText.slice(1));

        const totalPrice = burgerPrice + drinkPrice + dessertPrice;
    

        document.querySelector(".food-order").innerText = burgerName;
        document.querySelector(".price-food").innerText = `$${burgerPrice.toFixed(2)}`;

        document.querySelector(".drink-order").innerText = drinkName;
        document.querySelector(".price-drink").innerText = `$${drinkPrice.toFixed(2)}`;

        document.querySelector(".dessert-order").innerText = dessertName;
        document.querySelector(".price-dessert").innerText = `$${dessertPrice.toFixed(2)}`;

        document.querySelector(".total-price").innerText = `$${totalPrice.toFixed(2)}`;


        document.querySelector(".smoke-background").classList.remove("display-none");
    }
}

function finalConfirmation(){
    alert("Order Confirmed")
}

