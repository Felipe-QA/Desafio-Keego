const laptopsElementsLocators = require('../PageElements/laptopsElements.json')

export class laptopsActions{
    hpChromebookEnergyStarClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpChromebookEnergyStar)
            .click()
        return
    }

    hpChromebookESClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpChromebookES)
            .click()
        return
    }

    hpEnvy17tClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpEnvy17t)
            .click()
        return
    }

    hpEnvyX360Click(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpEnvyX360)
            .click()
        return
    }

    hpPavilionTouchClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpPavilionTouch)
            .click()
        return
    }

    hpPavilion15zClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpPavilion15z)
            .click()
        return
    }

    hpPavilion15zTouchClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpPavilion15zTouch)
            .click()
        return
    }

    hpPavilionX360TouchClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpPavilionX360Touch)
            .click()
        return
    }

    hpSpectreClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpSpectre)
            .click()
        return
    }

    hpStreamClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpStream)
            .click()
        return
    }

    hpZBookClick(){
        cy.get(laptopsElementsLocators.laptopsLocators.hpZBook)
            .click()
        return
    }
}