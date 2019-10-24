const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const PolicePage = require('../support/pages/police-page');
const {RequestLogger} = require('testcafe');
const { ClientFunction } = require('testcafe');
const moment = require('moment');
moment().format();



Given(/^I open the police page$/, async function() {
    await testController.navigateTo(PolicePage.Police.url());
});


When(/^I search for meetings "([^"]*)" on Police$/, async function(text) {
    await testController.typeText(PolicePage.Police.searchBox(), text);
});

Then(/^I will press (.*) key on Police$/, async function(text) {
    await testController.pressKey(text);
});

When(/^I should see that the Police result includes (.*)$/, async function(text) {
    await testController.expect(PolicePage.Police.secondSearchResult().innerText).contains(text);
    await testController.click(PolicePage.Police.secondSearchResult()).wait(7000);
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('koosolekud'); 
    await testController.expect(PolicePage.Police.meetingListResult().count).eql(10);
    
});

Then(/^I search for meeleavaldused "([^"]*)" on Police$/, async function(text) {
    await testController.typeText(PolicePage.Police.searchBoxMeeleavaldus(), text);
});

When(/^I click on services icon$/, async function() {
    await testController.click(PolicePage.Police.servicesIcon());
});

Then('I am redirected to a subpage', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('teenindused'); 
});

When('I click on Tartu service', async function () {
    await testController.click(PolicePage.Police.tartuService());
    await this.addScreenshotToReport();
});

Then('I see the Tartu service title', async function () {
    const myElement = PolicePage.Police.myDateFromWebpage();
    
    await testController.expect(myElement.innerText).contains('2019');
    
    const elementText = await myElement.innerText;

    const waitingTimeRegex = /(?:.*)dokumendi taotluse esitamise keskmine ooteaeg: ([0-9]{2}) min/g;
    const returnTimeRegex = /(?:.*)dokumendi kättesaamise(?:.*): ([0-9]{2}) min/g;
    const lastUpdatedRegex = /(?:.*)uuendati: (\d+.\d+.\d+ - \d{2}:\d{1,2})/g;

    const parsedWaitingGroup = waitingTimeRegex.exec(elementText);
    const parsedReturnGroup = returnTimeRegex.exec(elementText);
    const lastUpdatedGroup = lastUpdatedRegex.exec(elementText);

    // Debug
    // console.log("taotluse esitamise ooteaeg (min):",  Number(parsedWaitingGroup[1]));
    // console.log("kättesaamise ooteaeg (min):", Number(parsedReturnGroup[1]));
    // console.log("Viimati uuendati:", lastUpdatedGroup[1]); // HH:mm
    
    const pageDate = moment.utc(lastUpdatedGroup[1], "dd:mm:YYYY HH:mm");
    const actualDate = moment.utc();
    
    const diff = actualDate.diff(pageDate);
    const duration = moment.duration(diff);
    

    // Expect
    await testController.expect(duration.minutes()).lte(15); // Väiksem kui või võrdne 15'nega
    await testController.expect(Number(parsedWaitingGroup[1])).lte(25); // Et taotluse esitamise aeg oleks väiksem või 20
    await testController.expect(Number(parsedReturnGroup[1])).lte(25); // Et taotluse kättesaamise aeg oleks väiksem või 20
    
    await this.addScreenshotToReport();  
});

When(/^I verify all items exist on front page$/, async function() {
    await testController.expect(PolicePage.Police.frontBoxes().count).eql(4);
    await testController.expect(PolicePage.Police.actionBoxes().count).eql(6);
    await testController.expect(PolicePage.Police.greyColumns().count).eql(4);
    await testController.expect(PolicePage.Police.newsListSmall().count).eql(7);
    await testController.expect(PolicePage.Police.date().visible).ok();
    
});

Then(/^I verify all items exist on front page in English$/, async function() {
    await testController.click(PolicePage.Police.englishButton().withText('en')).wait(5000);
    await testController.expect(PolicePage.Police.frontBoxes().nth(0).innerText).contains('Emergency');   
    await testController.expect(PolicePage.Police.actionBoxes().nth(0).innerText).contains('Crossing the border');
    
    await testController.navigateTo('https://www.politsei.ee/et');
    await testController.click(PolicePage.Police.mainNews());  
    //await testController.click(PolicePage.Police.allNews());   
    
});

 When('I click on footericon {string}', async function (String) {   
    await testController.expect(PolicePage.Police.footerIcon().innerText).contains(String);
    await this.addScreenshotToReport();
 });

Then('I am redirected to a booking subpage', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('teenindused'); //Checks if the current page URL contains the 'thank-you' string
    await testController.expect(PolicePage.Police.ServiceTitleHeading().innerText).contains('Politsei iseteenindus');
});


 When('I click on policework subpage {string}', async function (name) {   
    await testController.click(PolicePage.Police.menuItemPoliceWork());
    await testController.click(PolicePage.Police.subMenuItemLostItems(), name);
 });

 Then('I can click on lost persons menu item', async function () {  
    await testController.click(PolicePage.Police.menuItemLostPersons());
});          