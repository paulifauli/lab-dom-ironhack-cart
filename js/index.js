// ITERATION 1


function updateSubtotal(product) {
 // console.log('Calculating subtotal, yey!');
const price = product.querySelector(".price span").innerHTML;
const quantity = product.querySelector(".product input").value;
// funktionirt nur mit dem product.querySelector weil querySelector
// always just pics the first one. you defined prodcut as the class list .product
// so its like inside the element you do the selector, that way
const subTotalPrice= price * quantity 
 product.querySelector(".subtotal span").innerHTML = subTotalPrice
return subTotalPrice
}
/*
function removeSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
 const price = document.querySelector(".price span").innerHTML;
 const quantity = document.querySelector(".product input").value;
 const subTotalPrice= (price * quantity)* -1
  document.querySelector(".subtotal span").innerHTML = subTotalPrice
 return subTotalPrice
 }
*/


// ITERATION 2

function calculateAll() {
  const product = document.querySelectorAll('.product');
          // querySelectorAll returns node list which is Array like and 
          // allowes the use of a for each loop
          // getElementsByClassName returns an html collection that doesnt
          // allow forEach for example u have to use a normal for loop that iterates
          // through the indexes 
          let totalPrice = 0 
 product.forEach(function(product){
  totalPrice += updateSubtotal(product)
  })
 document.querySelector("#total-value span").innerHTML = totalPrice
}

// ITERATION 4

// --> musterlösung mit notes
function removeProduct(event) {
  const target = event.currentTarget;
  // --> set variable for the "selection action" target = to "click" event + the currentTarget you are clicking
  const tbody = target.parentNode.parentNode.parentNode;
//--> add to the "selection action" by adding the acces to the different parent nodes
  tbody.removeChild(target.parentNode.parentNode);
// --> tell the new "selection action tbody" to trigger the removal of two out of three parent nodes 
//thereby removing the entire row 
  calculateAll();}//
  // --> invoke the function that updates the total looking at the new 
  // product list from which you have just removed one product
// notes hierzu:
// >event< ist kein keyword, sondern einfach nur das rgument weil die ganze fuction
// unten beim evenlistener evoked wird
// >event.currentTarget< funktioniert auch wegen dem eventListener unten 
//



// --> lösungsansatz über den umweg reduce quantity and then update total value (aufklappen)
/*
--> schlechte angehensweise einfach die ganze row removen s.o. aber 


we need an event listener for all the buttons 
it has to reuce thr quantity by one then 
it has to evoke a function that reduces the subtotal
according to the new quantity
then evokes the calculate all to 

    const quantity = document.querySelector(".quantity input").value;
    document.querySelector(".quantity input").value = quantity - 1 // works 
    quantity -1 // doesnt work
    console.log(document.querySelector(".quantity input").value)
  

  //--> warum hat quantity -1 one nicht geklappt ? 
  // der selector >document.querySelector(".quantity input")< selected ein object mit dem >.value< 
  //dazu selected er ne zahl 
  // wenn ich die operation nur an der zahl anwende hat das keine auswirkung auf den content im object
  // ich muss natürlich das object accessen sonst ist das eine random operation im luftleeren raum 
*/



// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input');
  // --> set a variable = to a nodelist (like an array) of all the input
  // tags within the class create-product

  //--> the following sets some variables we gonna use after so logic is below
  const name = inputs[0].value;
      // variable = to >inputs[0].value< ,which means node list (.products s.o.), containing multiple >input< tags, index [0] of the nodelist
      // so the first input tag, then acces its .value 
      // the value of an input tag in html is whatever you type into the inputfield on screen so you cant 
      // find it in the HTML and cant log it straight away what you are accessing is the value tiped into the inputfield 
      // to make it easier to understand you could just give the first input tag an id = name and select it that way
  const price = inputs[1].value;
      // same as name 
  const tbody = document.querySelector('tbody');
      // selects the parentnode comtaining the .product class
  const row = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`
      // variable = to literaly a string of HTML code defining a row with the variables representing the iput fields cocatinated inside
      // this will 
  const tr = document.createElement('tr');
  // beasically here we start builing a table/row or Element in HTML like the list of products we have above 
  // tr = to creatin new Element tag tr means table 
  tr.classList.add('product');
  // here we add the table elemt and add the product class to it 
  tr.innerHTML = row;
  // insert the string of "row" HTML code from earlier into the Element "row" inside the table creating 

  tbody.appendChild(tr);

  // here we attach the newly created element as a child node inside the parent node >tbody<

  //--> rest nochmal selbst ausklügeln wenn dus brauchst 
  
  let removeProductBtns = document.querySelectorAll('.btn-remove');
  let removeProductBtn = removeProductBtns[removeProductBtns.length - 1];
  
  removeProductBtn.addEventListener('click', removeProduct);  
}

/*
function createProduct() {
document.querySelector(".create-product input ").setAttribute("Name","bob");
const newProductName = document.querySelector(".create-product input ").Name ;
const newProductPrice = document.querySelector(".create-product input").value;
console.log(newProductName, newProductPrice)
//calculateAll();
}
*/

//--> selectors eventlisteners and invocations for the buttons:

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

const removeProductBtns =document.querySelectorAll(".btn-remove");
removeProductBtns.forEach(function (removeProductBtn){
  removeProductBtn.addEventListener("click", removeProduct)
})

const createBtn = document.querySelector("#create");
createBtn.addEventListener("click", createProduct);

});
