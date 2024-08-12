const speakersElementsLocators = require('../PageElements/speakersElements.json')

export class speakersActions{
    boseSoundLinkBluetoothClick(){
        cy.get(speakersElementsLocators.speakersLocators.boseSoundLinkBluetooth)
            .click()
        return
    }

    boseSoundLinkWirelessClick(){
        cy.get(speakersElementsLocators.speakersLocators.boseSoundLinkWireless)
            .click()
        return
    }

    hpRearMiniClick(){
        cy.get(speakersElementsLocators.speakersLocators.hpRearMini)
            .click()
        return
    }

    hpRoarPlusClick(){
        cy.get(speakersElementsLocators.speakersLocators.hpRoarPlus)
            .click()
        return
    }

    hpRoarWirelessClick(){
        cy.get(speakersElementsLocators.speakersLocators.hpRoarWireless)
            .click()
        return
    }

    hpS9500Click(){
        cy.get(speakersElementsLocators.speakersLocators.hpS9500)
            .click()
        return
    }

    LogitechX100Click(){
        cy.get(speakersElementsLocators.speakersLocators.LogitechX100)
            .click()
        return
    }

}