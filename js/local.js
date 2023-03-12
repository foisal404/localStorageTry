const getInput=()=>{
    const textinput=document.getElementById("product");
    const amountinput=document.getElementById("amount");
    const text=textinput.value ;
    const amount=amountinput.value ;
    textinput.value="";
    amountinput.value="";
    displayListdata(text,amount);
    setLocalStoragecart(text,amount);
}
const displayListdata=(text,amount)=>{
    const container=document.getElementById('list-container');
    const li= document.createElement('li');
    li.innerHTML=`${text} ${amount}`;
    container.appendChild(li);
}

const getLocalStorageCart= ()=>{
    const cartdata= localStorage.getItem('cart');
    let cart={}
    if(cartdata){
        cart=JSON.parse(cartdata);
    }
    return cart;
}

const setLocalStoragecart= (key,value)=>{
    let cart=getLocalStorageCart();
    cart[key]=value;
    console.log(cart);
    cart=JSON.stringify(cart);
    localStorage.setItem('cart',cart);
}
const displayFromLocalStorage=()=>{
    const cart =getLocalStorageCart();
    for(let product in cart){
        displayListdata(product,cart[product]);
    }
}
displayFromLocalStorage();