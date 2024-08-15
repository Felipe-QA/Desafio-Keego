import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { ProductsSearchPage } from "../../../page-objects/PageActions/productsSearchPageActions";

const productSearch_Actions = new ProductsSearchPage();

let productName;
let response;

describe("Get a Product", () => {
    Given("I have a Product Name", () => {
        productName = "MICROSOFT SCULPT TOUCH MOUSE";
    });

    When("I send a request to search the products", () => {
        productSearch_Actions.searchProduct(productName).then((res) => {
        response = res;
        });
    });

    Then("The response status should be 200", () => {
        expect(response.status).to.eq(200);
    });

    And("The response body must have only the product that I search", () => {
        expect(response.body).to.have.lengthOf(1);
    });

    And("The category must be MICE", () => {
        expect(response.body[0]).to.have.property("categoryName").eq("MICE")
    });

    And("The product name must be Microsoft Sculpt Touch Mouse", () =>{
        expect(response.body[0].products[0]).to.have.property("productName").eq("Microsoft Sculpt Touch Mouse")
    });
});
