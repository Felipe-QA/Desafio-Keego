export class ProductsSearchPage{
    searchProduct(productName) {
        return cy.request({
            method: 'GET',
            url: `/catalog/api/v1/products/search?name=${productName}`, 
        })
    }
}