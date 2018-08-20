import { element, by, ElementFinder } from 'protractor';

export class BloodPressureComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-blood-pressure div h2#page-heading')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class BloodPressureUpdatePage {
    pageTitle = element(by.id('jhi-blood-pressure-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    timestampInput = element(by.id('field_timestamp'));
    systolicInput = element(by.id('field_systolic'));
    diastolicInput = element(by.id('field_diastolic'));
    userSelect = element(by.id('field_user'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setTimestampInput(timestamp) {
        await this.timestampInput.sendKeys(timestamp);
    }

    async getTimestampInput() {
        return this.timestampInput.getAttribute('value');
    }

    async setSystolicInput(systolic) {
        await this.systolicInput.sendKeys(systolic);
    }

    async getSystolicInput() {
        return this.systolicInput.getAttribute('value');
    }

    async setDiastolicInput(diastolic) {
        await this.diastolicInput.sendKeys(diastolic);
    }

    async getDiastolicInput() {
        return this.diastolicInput.getAttribute('value');
    }

    async userSelectLastOption() {
        await this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userSelectOption(option) {
        await this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    async getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
