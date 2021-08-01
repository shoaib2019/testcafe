import { t } from 'testcafe';
import Routing from '../model/routing';
import Times from '../model/waiting-times';
import LoginPage from '../model/page-models/login.model';
import { Account }  from '../model/account';
import 	* as data from '../data-sets/accounts'
import url from '../launchURL'
const subURL = Routing.PUBLIC;
fixture('Login')
	 .page(`https://app-demo.novemberfirst.com${Routing.PUBLIC}`)
	 .meta('section', 'public');
	
test
	('Signup link exists', async t => {
		/**to launch the url at testcase level */
		//url.launchUrl(subURL)
		await t.maximizeWindow()
		await t.expect(LoginPage.signupLink.exists).ok({ timeout: Times.SHORT });
	});

test
	('Forgot password link exists', async t => {
		// TODO - assert that the forgot password link exists.
		await t.expect(LoginPage.forgotPasswordLink.exists).ok({ timeout: Times.SHORT });
	})

test
	('Submit valid credentials and accounts', async t => {
		//TODO - Login with the created account and assert a correct login.
		const accountNumber =data.e2eaccount.accountNumber;
	    const email=data.e2eaccount.email;
	    const password=data.e2eaccount.password;
		await LoginPage.submitForm(accountNumber, email, password);
		await t.expect(LoginPage.errorMessage.exists).ok({ timeout: Times.SHORT });
	})

test
	('Submit invalid credentials and show an error message', async t => {
		// TODO - Type a wrong password and assert that an error message appear.
		// NOTE: if the password is type 5 times wrong in a row the account is blocked. Might be good idea to use the same account
		// as the login to prevent the account lock.
		const accountNumber =data.e2eaccount.accountNumber;
	    const email=data.e2eaccount.email;
	    const password=data.e2eaccount.password;
		await LoginPage.submitForm(accountNumber, email, password);
		await t.expect(LoginPage.errorMessage.exists).ok({ timeout: Times.SHORT });
	}).skip
