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

describe("Insert Products on Cart", () => {
  Given("I am on the Index Page", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
  });

  When("I click on a category and select a product", () => {
    index_Actions.tabletsClick();
    tablets_Actions.hpElitePadClick();
  });

  And("I add the product to the cart and go to the Shopping Cart", () => {
    products_Actions.saveToCartButton();
    index_Actions.cartButtonClick();
  });

  When("I click on the Checkout button", () => {
    cart_Actions.checkoutButton();
  });

  Then("I should be redirected to the Checkout Page", () => {
    checkout_Actions.checkOrderSummary();
  });

  And("the summary should contain the product", () => {
    checkout_Actions.checkProduct();
  });
});

describe("Insert 2 or more products on Cart", () =>{
    Given("I am on the Index Page", () => {
        cy.visit("https://advantageonlineshopping.com/#/");
      });
      
    When("I click on a category and select a product", () => {
        index_Actions.tabletsClick();
        tablets_Actions.hpElitePadClick();
      });

    And("I click on the Plus button to add more quantities of the product to the cart", () => {
        products_Actions.plusButton();
        products_Actions.saveToCartButton();
      });

    And("go to the Shopping Cart", () =>{
        index_Actions.cartButtonClick();
    });

    When("I click on the Checkout button", () => {
        cart_Actions.checkoutButton();
    });

    Then("I should be redirected to the Checkout Page", () => {
        checkout_Actions.checkOrderSummary();
    });

    And("the summary should contain the product with the same quantities that I selected", () => {
        checkout_Actions.checkProduct();
        checkout_Actions.checkQuantity();
    });



})