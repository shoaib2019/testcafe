import { Selector, t } from 'testcafe';
import Routing from '../routing';
import { Account } from '../account';

class ForgotPasswordPage {
	public customerNumber: Selector;
	public email: Selector;
	public submitButton: Selector;
	public loginLink: Selector;
	public successMessage: Selector;
	public verificationPage: Selector;

	constructor() {
		this.customerNumber = Selector('input[formcontrolname="customerNumber"]');
		this.email = Selector('input[formcontrolname="email"]');
		this.submitButton = Selector('button[type="submit"]');
		this.loginLink = Selector('a[name="login"]');
		this.successMessage = Selector('n1-alert-message .alert[type="success"]');
		this.verificationPage = Selector('n1-verification-code');
	}

	async navigateToPage() {
		await t.navigateTo(`https://app-demo.novemberfirst.com/${Routing.FORGOT_PASSWORD}`);
	}

	async submitForm(account: Account) {
		await t.maximizeWindow()
		await t
			.typeText(this.customerNumber, account.accountNumber)
			.typeText(this.email, account.email)
			.click(this.submitButton);
	}

}

export default new ForgotPasswordPage();
