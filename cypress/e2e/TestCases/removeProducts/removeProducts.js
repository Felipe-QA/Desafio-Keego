import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { indexActions } from "../../../page-objects/PageActions/indexActions";
import { tabletsActions } from "../../../page-objects/PageActions/tabletsActions";
import { productsPageActions } from "../../../page-objects/PageActions/productsPageActions";
import { cartActions } from "../../../page-objects/PageActions/cartActions";
import { checkoutPageActions } from "../../../page-objects/PageActions/checkoutPageActions";

const index_Actions = new indexActions();
const tablets_Actions = new tabletsActions();
const products_Actions = new productsPageActions();
const cart_Actions = new cartActions();
const checkout_Actions = new checkoutPageActions();

beforeEach("",() => {
  cy.visit("https://advantageonlineshopping.com/#/");
  index_Actions.tabletsClick();
  tablets_Actions.hpElitePadClick();
  products_Actions.plusButton();
  products_Actions.plusButton();
  products_Actions.saveToCartButton();
})

describe("User delete quantity of cart", () => {
    Given("I Have a product with more than one quantity in the cart", () => {
        index_Actions.cartButtonClick();
    });
  
    When("I click on Edit", () => {
        cart_Actions.editButton();
    });
  
    Then("I should be redirected to the Product Page", () => {
       products_Actions.checkPage();
    });

    And("The product should contains the same quantity in the cart", () =>{
      products_Actions.checkQuantity();
    })
  
    When("I click on the Minus button to decrease the quantity", () => {
      products_Actions.minusButton();
    });
  
    Then("I click on Add to cart", () => {
      products_Actions.saveToCartButton();
    });
  
    And("The cart should update the quantity of the product", () => {
      checkout_Actions.checkProduct();
      checkout_Actions.checkQuantity();
    });
  });

describe("User remove product from Shopping Cart Page", () => {
  Given("I'm on the Shopping Cart Page with one product", () =>{
    index_Actions.cartButtonClick();
  });

  When("I click on Remove", () => {
    cart_Actions.removeButton();
  });

  Then("The product should be removed from the Cart", () => {
    cart_Actions.checkEmptyCart();
  })
})

describe("User remove product from cart dropdown", () => {
  Given("I have one product on Cart and mouse over cart icon", () => {
    index_Actions.cartButtonMouseover();
  })

  When("I click on the X button", () => {
    index_Actions.removeProductFromCart();
  })

  Then("The product should be removed from Cart", () =>{
    index_Actions.checkQuantityFromCart();
  })
})