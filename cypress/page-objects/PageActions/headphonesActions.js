import { visible } from 'ansi-colors'

const headphonesElementsLocators = require('../PageElements/headphonesElements.json')

export class headphonesActions{
    beatsStudioClick(){
        cy.get(headphonesElementsLocators.headphonesLocators.beatsStudio)
            .click()
        return
    }

    boseSoundLinkHeadphonesClick(){
        cy.get(headphonesElementsLocators.headphonesLocators.boseSoundLinkHeadphones)
            .click()
        return
    }

    hpH2310Click(){
        cy.get(headphonesElementsLocators.headphonesLocators.hpH2310)
            .click()
        return
    }

    logitechH390Click(){
        cy.get(headphonesElementsLocators.headphonesLocators.logitechH390)
            .click()
        return
    }

    item1Click(){
        cy.get(headphonesElementsLocators.headphonesLocators.item1)
            .click()
        return
    }

    checkSoldOutBanner(){
        cy.get(headphonesElementsLocators.headphonesLocators.soldOutBanner)
            .should("be.visible")
        return
    }

}