const miceElementsLocators = require('../PageElements/miceElements.json')

export class miceActions{
    speaker(){
        cy.get(miceElementsLocators.miceLocators.up3button)
            .click()
        return
    }

    tablets(){
        cy.get(miceElementsLocators.miceLocators.hpZ3200)
            .click()
        return
    }

    laptops(){
        cy.get(miceElementsLocators.miceLocators.hpZ3600)
            .click()
        return
    }

    mice(){
        cy.get(miceElementsLocators.miceLocators.hpZ4000)
            .click()
        return
    }

    headphones(){
        cy.get(miceElementsLocators.miceLocators.hpZ8000)
            .click()
        return
    }

    cartButtonClick(){
        cy.get(miceElementsLocators.miceLocators.kensington72337)
            .click()
        return
    }

    cartButtonMouseover(){
        cy.get(miceElementsLocators.miceLocators.kensington72352)
            .click()
        return
    }

    checkoutButton(){
        cy.get(miceElementsLocators.miceLocators.logitechG502)
            .click()
        return
    }

    checkoutButton(){
        cy.get(miceElementsLocators.miceLocators.microsoftSculpt)
            .click()
        return
    }
}