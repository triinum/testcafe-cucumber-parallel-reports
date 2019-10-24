const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const rescuePage = require('../support/pages/rescue-page');
const {RequestLogger} = require('testcafe');
const { ClientFunction } = require('testcafe');



Given(/^I open the rescue page$/, async function() {
    await testController.navigateTo(rescuePage.rescue.url());
});

When('I verify items exist and content appears front page', async function() {
    //await testcontroller.expect(rescuePage.rescue.mainPageSlider().visible).ok();  

    await testController.expect((rescuePage.rescue.navBar()).visible).ok();
    await testController.click(rescuePage.rescue.mainSliderArrow());
    await testController.expect((rescuePage.rescue.mainPageSlider1().innerText).visible).ok();
    await testController.expect((rescuePage.rescue.mainCardActions()).visible).ok();
    await testController.expect((rescuePage.rescue.mainNewsHeading().innerText).visible).ok();
    
    //kriisiks valmis veerus on pealkirjade arv korrektne
    await testController.expect(rescuePage.rescue.mainExtrasTitle().count).eql(4);

    await testController.expect(rescuePage.rescue.mainNewsHeading().count).eql(1);
    
    //navigeerib uudisesse ja sisu on olemas
    await testController.expect(rescuePage.rescue.secondaryNewsHeadingfirst().count).eql(7);
    await testController.expect((rescuePage.rescue.secondaryNewsHeadingfirst().innerText).visible).ok();
    await testController.click(rescuePage.rescue.secondaryNewsHeadingfirst());
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('komandode');
    await testController.click(rescuePage.rescue.sidebar());
    
    //juurdepääsetavus
    await testController.click(rescuePage.rescue.Accessibility());
    await testController.expect(getLocation()).contains('juurdepaasetavus');
    //await testController.expect((rescuePage.rescue.footerLinks()).visible).ok();   
});

When(/^I search for instructions "([^"]*)" on Rescue$/, async function(text) {
    await testController.typeText(rescuePage.rescue.searchBox(), text);
});

Then(/^I press (.*) key on Rescue$/, async function(text) {
    await testController.pressKey(text);
});

When(/^I should see that the Rescue result includes (.*)$/, async function(text) {
    await testController.expect(rescuePage.rescue.secondSearchResult().innerText).contains(text);
    await testController.click(rescuePage.rescue.secondSearchResult());
});

Then(/^I click on juhendid and expect url to change$/, async function() {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('juhendid');
});

When('I verify menu {string} exist and content appears on subpage', async function(text) {
    
    //navigatsioon
    await testcontroller.expect(rescuePage.rescue.navBar().visible).ok();
    
    //alammenüüde element
    await testcontroller.expect(rescuePage.rescue.subMenuElement().visible).ok();
    
    await testController.click(rescuePage.rescue.subMenuItem().withText(text)).wait(5000);

    await testcontroller.expect(rescuePage.rescue.pageContent().visible).ok(); 
    await testcontroller.expect(rescuePage.rescue.pageHeading().visible).ok(); 
});

When(/^I am typing my search request "([^"]*)" on Rescue$/, async function(text) {
    await testController.typeText(rescuePage.rescue.searchBox(), text);
});

Then(/^I am pressing (.*) key on Rescue$/, async function(text) {
    await testController.pressKey(text);
});

When(/^I should see that the first Rescue\'s result includes (.*)$/, async function(text) {
    await testController.expect(rescuePage.rescue.firstSearchResult().innerText).contains(text);
});


Then('I click on the news title', async function () {
    await testController.click(rescuePage.rescue.firstSearchResult());
    await this.addScreenshotToReport();
});

When('I see {string} in the title', async function (name) {
    await testController.expect(rescuePage.rescue.firstSearchResult2().innerText).contains(name).wait(5000);

});

Then('I click the submit button', async function () {
    await testController.click(rescuePage.rescue.menuItemContacts()).wait(5000);
    await this.addScreenshotToReport();
});


When('I see {string} in the name field', async function (name) {

    await testController.expect(rescuePage.rescue.subMenuItem().innerText).contains(name)
    await testController.click(rescuePage.rescue.subMenuItem()).wait(5000);
});

Then('I am redirected to a new URL', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('kontaktid'); 
});

When('I click on some contacts', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.click(rescuePage.rescue.loginButton());
    await this.addScreenshotToReport();
    await testController.expect(getLocation()).contains('otsi');
});

Then('I search from the first list {string}', async function (name) {
    await testController.click(rescuePage.rescue.contactsDepartments().withText(name)).wait(5000);
});

When('I am redirected to Northern rescue department and search the name {string}', async function (name) {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('laane_paastekeskus');
    await testController.expect(rescuePage.rescue.chiefName().innerText).contains(name);
}); 
  
 Then('I want to change the language to {string}', async function (name) {
    await testController.click(rescuePage.rescue.menuItemEnlighLanguage().withText(name));
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    //await testController.expect(getLocation()).contains('en'); 
    await testController.click(rescuePage.rescue.bookAppointment());
}); 

When('I move on to icon menu {string}', async function (name) {
    await testController.click(rescuePage.rescue.rescueServicesIcon());
    await this.addScreenshotToReport();
    await testController.click(rescuePage.rescue.menuItemEnlighLanguage().withText(name)).wait(5000);
    
}); 

Then('I click to view statistics in russian', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.click(rescuePage.rescue.footerIconBooking()).wait(5000);
    await testController.expect(getLocation()).contains('statistika');
    await this.addScreenshotToReport();
}); 

When('I book an appointment', async function () {

    await testController.click(rescuePage.rescue.bookAppointment2());
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('broneering');  
    await testController.click('select').click(Selector('option', { text: 'Idaregioon' }));
    await testController.click(rescuePage.rescue.registerCheckbox1());
    await this.addScreenshotToReport();
}); 


When('I go back to main page and check the news archive', async function () {
    await testController.click(rescuePage.rescue.mainLogo());
    await testController.click(rescuePage.rescue.showAllNews());
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('uudised');
    await testController.expect(rescuePage.rescue.articleHeadline().count).eql(6);
});


Then('I want to make sure items exist on a mobile screen 480 and 853px', async function () {
    await testController.resizeWindow(480, 853);
    await testController.click(rescuePage.rescue.mainLogo());
    await testController.click(rescuePage.rescue.showAllNews());
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('uudised');
    await testController.expect(rescuePage.rescue.articleHeadline().count).eql(6);
});

    

