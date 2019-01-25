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
    logData: function() {
      return data;
    }
  };
})();

//UI Controller
const UICtrl = (function() {
  return {};
})();

//App Controller
const App = (function(ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function() {
      console.log("Init App...");
    }
  };
})(ItemCtrl, UICtrl);

//Init App
App.init();
