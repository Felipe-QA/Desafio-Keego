const indexElementsLocators = require('../PageElements/indexElements.json')

export class indexActions{
    speakerClick(){
        cy.get(indexElementsLocators.indexLocators.speakerCategory)
            .click()
        return
    }

    tabletsClick(){
        cy.get(indexElementsLocators.indexLocators.tabletsCategory)
            .click()
        return
    }

    laptopsClick(){
        cy.get(indexElementsLocators.indexLocators.laptopsCategory)
            .click()
        return
    }

    miceClick(){
        cy.get(indexElementsLocators.indexLocators.miceCategory)
            .click()
        return
    }

    headphonesClick(){
        cy.get(indexElementsLocators.indexLocators.headphonesCategory)
            .click()
        return
    }

    cartButtonClick(){
        cy.get(indexElementsLocators.indexLocators.cartButton)
            .click()
        return
    }

    cartButtonMouseover(){
        cy.get(indexElementsLocators.indexLocators.cartButton)
            .trigger('mouseover')
        return
    }

    checkoutButtonClick(){
        cy.get(indexElementsLocators.indexLocators.checkoutButton)
            .click()
        return
    }

    removeProductFromCart(){
        cy.get(indexElementsLocators.indexLocators.removeProduct)
            .click()
        return
    }

    checkQuantityFromCart(){
        cy.get(indexElementsLocators.indexLocators.emptyCart)
            .should("contain.text", "Your shopping cart is empty")
        return
    }
}