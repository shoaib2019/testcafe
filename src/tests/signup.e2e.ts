import Routing from "../model/routing";
import { t } from 'testcafe';
import Times from '../model/waiting-times';
import SignupPage from '../model/page-models/signup.model';
import { Account } from '../model/account';
import * as data from '../data-sets/accounts'
import *as commonMethod from '../common/commonMethods'
import ResetPasswordPage from '../model/page-models/reset-password.model'
import url from '../launchURL'
let subUrl = Routing.SIGN_UP;
fixture('Signup')
	//.page(`https://app-demo.novemberfirst.com/${Routing.SIGN_UP}`)
	.meta('section', 'public');

test
	('Submit valid credentials', async t => {
		await url.launchUrl(subUrl)
		const cvr = "36542993"; //this is a danish company registration number. You can find more at https://datacvr.virk.dk/
		// TODO - use a email that you have access. Can also use a mailosaur.com email if you want to assert the email confirmation.
		// Email verification is OPTIONAL. Not required.
		const firstName = data.e2eaccount.firstName;
		const lastName = data.e2eaccount.lastName;
		const mobileNumber = data.e2eaccount.mobileNumber;
		const yourPersonalEmail = data.e2eaccount.email;
		// TODO - fillform from the SignupPage need to be implemented.
		// NOTE - If you use a CVR that is already registered you will receive a warning. You can continue without any issues.
		await SignupPage.fillForm(cvr, firstName, lastName, yourPersonalEmail, mobileNumber);
		//await t.expect(SignupPage.verificationPage.exists).ok({ timeout: Times.LONG });
		await SignupPage.submitForm();
		await SignupPage.clickConfirmButton()

		//To enter otp fro account verification commenting since email verification is optional
		/*
		let otp = await commonMethod.getOpt(data.e2eaccount.randomEmail);
		await ResetPasswordPage.enterOpt(otp);
		await SignupPage.verification(data.e2eaccount.accountNumber,otp)
		*/
	})

