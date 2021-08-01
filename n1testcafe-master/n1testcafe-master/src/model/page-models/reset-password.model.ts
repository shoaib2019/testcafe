import { Selector, t } from 'testcafe';
import Routing from '../routing';
import * as commonMethods from '../../common/commonMethods';
import * as data from '../account'
class ResetPasswordPage {
	// TODO - Create page model following the standards of login.model.ts and forgot-password.model.ts
	public forgotPassword: Selector;
	public accountNumber: Selector;
	public email: Selector;
	public continueButton: Selector;
	public verificationCode: Selector;
	public enterNewPwd: Selector;
	public reEnterNewPwd: Selector;

	constructor() {
		this.forgotPassword = Selector('a[class="info-right"]');
		this.accountNumber = Selector('input[name="customer-number"]')
		this.email = Selector('input[name="email"]')
		this.continueButton = Selector('button[class="btn btn-primary btn-center"]')
		this.verificationCode = Selector('input[autocomplete="verification-code"]')
		this.enterNewPwd = Selector('input[name="password"]');
		this.reEnterNewPwd = Selector('input[name="password-confirmation"]')


	}

	async navigateToPage() {
		await t.navigateTo(`https://app-demo.novemberfirst.com/${Routing.RESET_PASSWORD}`);
	}

	async enterDetails(accountNumber: string, email: string) {
		await t.maximizeWindow();
		await commonMethods.selectLanguage()
		await t.
			typeText(this.accountNumber, accountNumber)
			.typeText(this.email, email)
			.click(this.continueButton)
		console.log('Submit button is clickeed')
	}

	async clickOnForgotLink() {
		await t
			.click(this.forgotPassword)
		console.log('Submit button is clickeed')
	}

	async enterOpt(otp: string) {
		await t
			.typeText(this.verificationCode, otp)
			.click(this.continueButton);
		console.log('Submit button is clickeed')
	}

	async enterNewPassword(pwd: string) {
		await t
			.typeText(this.enterNewPwd, pwd)
			.typeText(this.reEnterNewPwd, pwd)
			.click(this.continueButton);
		console.log('Submit button is clickeed')
	}


}

export default new ResetPasswordPage();
