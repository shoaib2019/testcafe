import { Selector, t } from 'testcafe';
import Routing from '../routing';
import * as commonMethods from '../../common/commonMethods';

class SignupPage {
	public countryCode: Selector;
	public registrationNumber: Selector;
	public firstName: Selector;
	public lastName: Selector;
	public email: Selector;
	public emailConfirmation: Selector;
	public phoneNumber: Selector;
	public submitButton: Selector;
	public loginLink: Selector;
	public successMessage: Selector;
	public errorMessage: Selector;
	public duplicatedCVRWarning: Selector;
	public consentCheckbox: Selector;
	public alertMessage: Selector;
	public verificationPage: Selector;
	public existingAccount: Selector;
	public language: Selector;
	public confirmButton: Selector;
	public createAccountText: Selector;
	public customerNumber: Selector;
	public verificationCode: Selector;

	constructor() {
		this.countryCode = Selector('mat-select[formcontrolname="countryCode"]');
		this.registrationNumber = Selector('input[formcontrolname="registrationNumber"]');
		this.firstName = Selector('input[formcontrolname="firstName"]');
		this.lastName = Selector('input[formcontrolname="lastName"]');
		this.email = Selector('input[formcontrolname="email"]');
		this.emailConfirmation = Selector('input[formcontrolname="emailConfirmation"]');
		this.phoneNumber = Selector('input[formcontrolname="phoneNumber"]');
		this.submitButton = Selector('button[type="submit"]');
		this.loginLink = Selector('a[href="#/public"]');
		this.successMessage = Selector('');
		// TODO - Define proper selectors for the missing class variables.
		this.consentCheckbox = Selector('span[class="mat-checkbox-inner-container"]');
		this.alertMessage = Selector('div[class="alert"][type="error"]');
		this.verificationPage = Selector('p[class="public-intro top bravo"]');
		this.language = Selector('div[class="locale-language"]');
		this.confirmButton = Selector('button[name="confirm"]')
		this.duplicatedCVRWarning = Selector('');
		this.errorMessage = Selector('');
		this.existingAccount = Selector('');
		this.createAccountText = Selector('#mat-dialog-title-1');
		this.customerNumber = Selector('input[name="customer-number"]')
		this.verificationCode = Selector('input[autocomplete="verification-code"]')
	}

	async navigateToPage() {
		await t.navigateTo(`https://app-demo.novemberfirst.com/${Routing.SIGN_UP}`);
	}

	async fillForm(cvr: string, firstName: string, lastName: string, email: string, mobileNumber: string) {
		// TODO - implement missing method.
		// This method is a guidance. You can define any other method in this page-model that resembles the page actions
		await commonMethods.selectLanguage();
		this.selectCountry();
		await t
			.typeText(this.registrationNumber, cvr)
			.typeText(this.firstName, firstName)
			.typeText(this.lastName, lastName)
			.typeText(this.email, email)
			.typeText(this.emailConfirmation, email)
			.typeText(this.phoneNumber, mobileNumber)
			.click(this.consentCheckbox);
		console.log('Form details are entered successfully');

	}

	async submitForm() {
		// TODO - implement missing method.
		// This method is a guidance. You can define any other method in this page-model that resembles the page actions
		await t.click(this.submitButton);
		console.log('Submit button is clickeed')

	}

	async selectCountry() {
		await t
			.click(this.countryCode)
			.wait(1000)
			.click(this.countryOption('DK'));
	}

	async fillPersonalInfo(cvr: string, email: string) {
		// TODO - implement missing method.
		// This method is a guidance. You can define any other method in this page-model that resembles the page actions
		await t
			.typeText(this.registrationNumber, cvr)
			.typeText(this.email, email)
			.typeText(this.emailConfirmation, email)
		console.log('Personal Details are entered successfully')

	}
	async clickConfirmButton() {
		await t
			.click(this.confirmButton)
	}
	async verification(account: string, otp: string) {
		await t
			.typeText(this.customerNumber, account)
			.typeText(this.verificationCode, otp)
			.click(this.confirmButton)
	}

	private countryOption(value: string): Selector {
		return Selector('mat-option[country-code="' + value + '"]');
	}
}

export default new SignupPage();
