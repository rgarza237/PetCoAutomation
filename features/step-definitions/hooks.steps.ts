import { Before } from "@wdio/cucumber-framework";
const dataJson = require('../Tools/passwords.json')

Before(function(){

    browser.addCommand('getEmail', (role: string, environment: string) => {
        const email = dataJson.users.find(e => e.role.toLowerCase() === role.toLowerCase() && e.environment.toLowerCase() === environment.toLowerCase())?.email;
        if (!email) {
            throw new Error(`Email not found for role ${role} in environment ${environment}`);
        }
        return email;
    });
    
    browser.addCommand('getPassword', (role: string, environment: string) => {
        const password = dataJson.users.find(e => e.role.toLowerCase() === role.toLowerCase() && e.environment.toLowerCase() === environment.toLowerCase())?.password;
        if (!password) {
            throw new Error(`Password not found for role ${role} in environment ${environment}`);
        }
        return password;
    });
    
})

