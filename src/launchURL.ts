import { t, Selector } from "testcafe";
import _ = require("lodash");
const argv = require('minimist')(process.argv)
const env = require('./data-sets/env.json')
import * as commonMethods from './common/commonMethods';

export function getEnvironment() {
    const argvEnvironment = _.get(argv, 'environment') || _.get(argv, 'ENVIRONMENT')
    const procssEnvEnvironment = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'demo'
    return (argvEnvironment ? argvEnvironment : procssEnvEnvironment);
}

export async function getFullUrl(urlpath: string) {
    let baseUrl = _.get(env, getEnvironment());
    let suburl = urlpath;
    let fullURL = "";
    fullURL = baseUrl + suburl
    return fullURL;
}

class LaunchUrl {

    launchUrl = async (urlpath: string) => {
        let baseUrl = _.get(env, getEnvironment());
        let suburl = urlpath;
        let fullURL = "";
        fullURL = baseUrl + suburl;
        await t
            .navigateTo(fullURL)
            .maximizeWindow()
        await commonMethods.selectLanguage();
    }


}

export default new LaunchUrl;
