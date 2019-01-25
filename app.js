//Storage Controller

//Item Controller
const ItemCtrl = (function() {
  console.log("item controller");
  //Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data Structure / State
  const data = {
    items: [
      { id: 0, name: "Burger", calories: 500 },
      { id: 0, name: "Soda", calories: 240 },
      { id: 0, name: "Fries", calories: 300 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  //Public methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  };
})();

//UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: "#item-list"
  };
  return {
    populateItemList: function(items) {
      let html = "";

      items.forEach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });

      //Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  };
})();

//App Controller
const App = (function(ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function() {
      //Fetch items fom data structure
      const items = ItemCtrl.getItems();

      //Populate list
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

//Init App
App.init();
