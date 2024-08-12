const checkoutPageElementsLocators = require('../PageElements/checkoutPageElements.json')

export class checkoutPageActions{
    checkOrderSummary(){
        cy.get(checkoutPageElementsLocators.checkoutLocators.orderSummary)
            .first()
            .should("contain", "ORDER SUMMARY")
        return
    }

    checkProduct(){
        cy.get(checkoutPageElementsLocators.checkoutLocators.productInCart)
            .eq(1)
            .should("contain", "HP ELITEPAD 1000 G2 TABLET")
        return
    }

    checkQuantity(){
        cy.get(checkoutPageElementsLocators.checkoutLocators.quantity)
            .eq(1)
            .should("contain", "QTY: 2")
    }
}