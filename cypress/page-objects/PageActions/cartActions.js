const cartElementsLocators = require('../PageElements/cartElements.json')

export class cartActions{
    editButton(){
        cy.get(cartElementsLocators.cartLocators.editButton)
            .first()
            .click()
        return
    }

    removeButton(){
        cy.get(cartElementsLocators.cartLocators.removeButton)
            .first()
            .click()
        return
    }

    checkoutButton(){
        cy.get(cartElementsLocators.cartLocators.checkoutButton)
            .click()
        return
    }

    checkEmptyCart(){
        cy.get(cartElementsLocators.cartLocators.emptyCart)
            .should("contain.text", "Your shopping cart is empty")
    }
}