import { UpdateProductsPage } from "../../../page-objects/PageActions/updateProductsPageActions"
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


const update_Products = new UpdateProductsPage()



let userId
let color
let source
let response;



Given("I have a Product to update", () => {
    userId = '319534308'
    color = 'black'
    source= 1
})

When("I send a request with the image", () =>{
    update_Products.UpdateProducts(userId, color, source)
})

Then("The response status should be 200", () =>{
    expect(response.status).to.eq(200);
})

And("The response body should contain the imageId", () => {
    expect(response.body).to.have.propriety(imageId)
})
