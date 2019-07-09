class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element; //ie. from the loop!!!!!
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    //IS THIS CORRECT TO GET THE DATA ATTR?  I know I want to get the 'tab' from 'data-tab' in the element

    // Using the custom data attribute, get the associated Item element
    //this.itemElement= document.querySelector(".tabs-item");
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]` //selecting the tabs-item the bracket notation !!!!!!
      //filters anything with that class AND the custom data attribute
    );
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance (of the constructor!!!!?!), calling the select method on click

    //this.element.addEventLisener("click", () => this.select()); // select is called on THIS instance of the constructor
    //constructor is baking a brownie with that feature
  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");
    console.log(links);
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    //Array.from(links).forEach();
    // Add a class named "tabs-link-selected" to this link
    //this.element;
    // Call the select method on the item associated with this link
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, 
//now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, 
//return a new instance of TabLink and pass in each link as a parameter

*/

links = document
  .querySelectorAll(".tabs-link")
  .forEach(eachLinkTab => new TabLink(eachLinkTab));

//console.log(links);

//    es5 function Version ????
//    forEach(function(eachLinkTab) {
//      return new TabLink(eachLinkTab)
//    });

//COPIED  EXAMPLE FROM DROPDOWN SECTION::::::::        .forEach(dropdown => new Dropdown(dropdown));
