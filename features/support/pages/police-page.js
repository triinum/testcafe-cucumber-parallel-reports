const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.Police = {
    url: function() {
        return 'https://politsei.ee';
    },
    searchBox: function() {
        return select('#search').with({timeout: 70000}).with({ boundTestRun: testController });
    },
    firstSearchResult: function() {
        return Selector('.link').nth(0).with({boundTestRun: testController});
    },  
    myDateFromWebpage: function() {
        return Selector('.highlight.hours').nth(0).with({ boundTestRun: testController });
    },  
    secondSearchResult: function() {
        return Selector('.link').nth(0).with({boundTestRun: testController});
    }, 
    meetingListResult: function() {
        return Selector('.hidden-s').with({boundTestRun: testController});
    }, 
    searchBoxMeeleavaldus: function() {
        return Selector('.persons-search').with({boundTestRun: testController});
    },     
    menuItemPoliceWork: function() {
        return Selector('.has-submenu').withText('Politseitöö').with({ boundTestRun: testController });  
    },
    subMenuItemLostPerson: function() {
        return Selector('#menu-level1-last > ul > li:nth-child(1) > a').with({ boundTestRun: testController }); 
    },
    servicesIcon: function() {
        return Selector('.action').nth(4).with({ boundTestRun: testController });
    },
    tartuService: function() {
        return Selector('#cell-2').with({ boundTestRun: testController }); 
    },
    tartuServiceTitle: function() {
        return Selector('.highlight.hours').with({boundTestRun: testController});
    },
    loginErrorMessage: function() {
        return Selector('#js-flash-container > div > div');
    },
    searchButton: function() {
        return Selector('#search');
    },
    firstSearchResult: function() {
        return Selector('.link').nth(0).with({boundTestRun: testController});
    },    
    submitButton: function() {
        return Selector('.listitem').child('h5').with({ boundTestRun: testController });
    },
    contactFormSubmit: function() {
        return Selector('.content').child('h1').with({ boundTestRun: testController });
    },
    menuItemContacts: function() {
        return Selector('.has-submenu').withText('Kontaktid').with({ boundTestRun: testController });  
    },
    subMenuItemLostItems: function() {
        return Selector('#menu-level1-last > ul > li:nth-child(1) > a').with({ boundTestRun: testController }); 
    },
    subMenuItemLostPersons: function() {
        return Selector('#menu-level3').nth(1).with({ boundTestRun: testController }); 
    },
    
    searchInput: function() {
        return Selector('Search').withAttribute('type', 'input').with({ boundTestRun: testController }); 
    },
    searchByLetter: function() {
        return Selector('#maincontent > div > div > section > div > ul > li:nth-child(24)').with({boundTestRun: testController});
    },
    searchByLetterMenuItem: function() {
        return Selector('.contact-container > contact-ui-controls > control-buttons > li:nth-child(1)').with({ boundTestRun: testController });
    },    
    footerIcon: function() {
        return Selector('.action').nth(2).with({ boundTestRun: testController });
    },   
    ServiceTitleHeading: function() {
        return Selector('.content').child('h1').with({ boundTestRun: testController });
    }, 
    
    
};    