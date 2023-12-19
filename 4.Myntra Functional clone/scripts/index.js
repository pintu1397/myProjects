let bagItems;
onLoad();
function onLoad(){
  let bagItemsStr = localStorage.getItem('bag-items');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bag-items' , JSON.stringify(bagItems));
  displayBagIcon();
}
function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagItemCountElement.innerText = bagItems.length;
    bagItemCountElement.style.visibility = 'visible'; 
  } else {
    bagItemCountElement.innerText = ''; 
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage(){
  let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
      return ;
    }
    let innerHTML = '';
    items.forEach(item  => {
    innerHTML += 
    `
      <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name"> ${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs ${item.price.current_price}</span>
          <span class="original-price">Rs ${item.price.original_price}</span>
          <span class="discount">(${item.price.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
      </div>
  `
  })
  itemsContainerElement.innerHTML = innerHTML;
}


console.log(bagItems);