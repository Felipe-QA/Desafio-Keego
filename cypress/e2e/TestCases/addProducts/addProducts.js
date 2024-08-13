import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { indexActions } from "../../../page-objects/PageActions/indexActions";
import { tabletsActions } from "../../../page-objects/PageActions/tabletsActions";
import { productsPageActions } from "../../../page-objects/PageActions/productsPageActions";
import { cartActions } from "../../../page-objects/PageActions/cartActions";
import { checkoutPageActions } from "../../../page-objects/PageActions/checkoutPageActions";
import { headphonesActions } from "../../../page-objects/PageActions/headphonesActions";

const index_Actions = new indexActions();
const tablets_Actions = new tabletsActions();
const products_Actions = new productsPageActions();
const cart_Actions = new cartActions();
const checkout_Actions = new checkoutPageActions();
const headphones_Actions = new headphonesActions();

describe("User insert Products on Cart", () => {
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

describe("User insert 2 or more products on Cart", () => {
  Given("I am on the Index Page", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
  });

  When("I click on a category and select a product", () => {
    index_Actions.tabletsClick();
    tablets_Actions.hpElitePadClick();
  });

  And(
    "I click on the Plus button to add more quantities of the product to the cart",
    () => {
      products_Actions.plusButton();
      products_Actions.saveToCartButton();
    }
  );

  And("go to the Shopping Cart", () => {
    index_Actions.cartButtonClick();
  });

  When("I click on the Checkout button", () => {
    cart_Actions.checkoutButton();
  });

  Then("I should be redirected to the Checkout Page", () => {
    checkout_Actions.checkOrderSummary();
  });

  And("the summary should contain the product with the same quantities that I selected",() => {
      checkout_Actions.checkProduct();
      checkout_Actions.checkQuantity();
    });
  });

describe("User selects a product that is out of stock", () => {
  Given("I am on the Index Page", () => {
    cy.visit("https://advantageonlineshopping.com/#/");
  });

  When("I click on a category", () => {
    index_Actions.headphonesClick();
  });

  And("I select a product that does not have stock", () => {
    headphones_Actions.checkSoldOutBanner();
  });

  Then("The button to add the cart must be disabled", () => {
    headphones_Actions.boseSoundLinkHeadphonesClick();
    products_Actions.saveToCartButtonDisable();
  });

  And("A tag with Sold Out must be visible", () => {
    products_Actions.checkSoldOutBanner();
  });
});
