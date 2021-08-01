import { t, Selector } from 'testcafe';

const language = Selector('div[class="locale-language"]');

const typeEmail = Selector('input[placeholder="anything"]')
const checkEMailButton = Selector('button[class="btn btn-primary"]')
const email = Selector('strong[class="ng-binding"]')
let otptext = Selector('div[dir="ltr"]')
const CheckMessageInInbox = Selector('tr[ng-show="!messages.length"]')
const newEmailChecking = Selector('strong[class="ng-binding"]')
let otp = '';
/**To Change the default language */
export async function selectLanguage() {
    await t
        .click(language)
        .click(Selector('[class="mat-option-text"]').withText('English'));
    console.log('Language changed successfull')
}


/**To verify otp */
export async function getOpt(randomEmail: string) {
    await t.openWindow('https://mailsac.com/')
    await t
        .typeText(typeEmail, randomEmail)
        .click(checkEMailButton)
    console.log('Mail Entered successfull')
    await t.wait(60000);
    let messageLen = await CheckMessageInInbox.innerText;
    if (messageLen === 'No mail!') {
        console.log('Otp received in inbox')
    } else {
            await t.click(newEmailChecking)
            otp = await otptext.innerText;
    }

    return otp;
}
