const tabletsElementsLocators = require('../PageElements/tabletsElements.json')

export class tabletsActions{
    hpElitePadClick(){
        cy.get(tabletsElementsLocators.tabletsLocators.hpElitePad)
            .click()
        return
    }

    hpEliteX2Click(){
        cy.get(tabletsElementsLocators.tabletsLocators.hpEliteX2)
            .click()
        return
    }

    hpProTabletClick(){
        cy.get(tabletsElementsLocators.tabletsLocators.hpProTablet)
            .click()
        return
    }
}