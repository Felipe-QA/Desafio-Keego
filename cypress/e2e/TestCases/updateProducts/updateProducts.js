import { login  } from "../../../page-objects/PageActions/accountActions"
import { UpdateProductsPage } from "../../../page-objects/PageActions/updateProductsPageActions"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const user_Login = new login()
const update_Products = new UpdateProductsPage()
const userId = "319534308"
const color = "black"
const source = 1
const productId = 34

let response;

beforeEach("Login", () => {
    user_Login.userLogin()
})


Given("I have a Login", () => {
    update_Products.UpdateProducts(userId, source, color, productId)
})

When("I send a request", () =>{
    
})

Then("I am login", () => {
    
})
