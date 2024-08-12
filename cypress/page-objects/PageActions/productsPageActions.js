const productsPageElementsLocators = require('../PageElements/productsPageElements.json')

export class productsPageActions{
    plusButton(){
        cy.get(productsPageElementsLocators.productsPageLocators.plusButton)
            .click()
        return
    }

    minusButton(){
        cy.get(productsPageElementsLocators.productsPageLocators.minusButton)
            .click()
        return
    }

    saveToCartButton(){
        cy.get(productsPageElementsLocators.productsPageLocators.saveToCartButton)
            .click()
        return
    }

    checkQuantity(){
        cy.get(productsPageElementsLocators.productsPageLocators.quantityButton)
            .should("have.value", '3')
    }

    checkPage(){
        cy.get(productsPageElementsLocators.productsPageLocators.checkPage)
            .eq(0)
            .should("contain", "HP ELITEPAD 1000 G2 TABLET")
    }
}