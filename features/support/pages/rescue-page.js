const {Selector} = require('testcafe');

// Selectors

function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.rescue = {
    url: function() {
        return 'https://rescue.ee';
    },
    searchBox: function() {
        return select('#search').with({timeout: 70000}).with({ boundTestRun: testController });
    },
    mainLogo: function() {
        return select('.brand').with({timeout: 70000}).with({ boundTestRun: testController });
    },
    firstSearchResult3: function() {
        return Selector('.listitem').child('h4').with({ boundTestRun: testController }); 
    },
    loginButton: function() {
        return select('.control-buttons').nth(1).with({boundTestRun: testController});
    },
    loginErrorMessage: function() {
        return select('#js-flash-container > div > div');
    },
    searchButton: function() {
        return select('.search-button');
    },
    rescueServicesIcon: function() {
        return Selector('.action').nth(2).with({ boundTestRun: testController });
    },
    firstSearchResult: function() {
        return Selector('.link').nth(0).with({boundTestRun: testController});
    },  
    secondSearchResult: function() {
        return Selector('.link').nth(1).with({boundTestRun: testController});
    }, 
    submitButton: function() {
        return Selector('.listitem').child('h5').with({ boundTestRun: testController });
    },
    menuItemContacts: function() {
        return Selector('.has-submenu').withText('Kontaktid').with({ boundTestRun: testController });  
    },
    mainPageSlider1: function() {
        return Selector('.card.is-notification .is-slider .slider-text .card-body[data-v-7d15a678]').with({ boundTestRun: testController });  
    },
    mainSliderArrow: function() {
        return Selector('.slider-arrow[data-v-7d15a678]').with({ boundTestRun: testController });  
    },
    mainCardActions: function() {
        return Selector('.grid .actions[data-v-21b4fbd8]').with({ boundTestRun: testController });  
    },
    mainNewsHeading: function() {
        return Selector('.news-item > h3').with({ boundTestRun: testController });  
    },   
    Accessibility: function() {
        return Selector('.links').with({ boundTestRun: testController });  
    },  
    footerLinks: function() {
        return Selector('.footer').with({ boundTestRun: testController });  
    },  
    secondaryNewsHeadingfirst: function() {
        return Selector('.news-list-item > p').with({ boundTestRun: testController });  
    }, 
    mainExtras: function() {
        return Selector('#extra').with({ boundTestRun: testController });  
    },
    mainExtrasTitle: function() {
        return Selector('#extra .section-subtitle').with({ boundTestRun: testController });  
    },
    sidebar: function() {
        return Selector('.sidebar').with({ boundTestRun: testController });  
    },   
    navBar: function() {
        return Selector('#navigation').with({ boundTestRun: testController });  
    },
    subMenuItem: function() {
        return Selector('#menu-level1-last > ul > li:nth-child(1) > a').with({ boundTestRun: testController }); 
    },
    subMenuElement: function() {
        return Selector('#menu-level2').with({ boundTestRun: testController }); 
    },
    pageContent: function() {
        return Selector('#content').with({ boundTestRun: testController }); 
    },
    pageHeading: function() {
        return Selector('.h1').with({ boundTestRun: testController }); 
    },
    searchInput: function() {
        return Selector('Search').withAttribute('type', 'input').with({ boundTestRun: testController }); 
    },
    searchByLetter: function() {
        return Selector('#maincontent > div > div > section > div > ul > li:nth-child(24)').with({boundTestRun: testController});
    },
    searchByLetterMenuitem: function() {
        return Selector('.contact-container > contact-ui-controls > control-buttons > li:nth-child(1)').with({ boundTestRun: testController });
    },
    contactsDepartments: function() {
        return Selector('.contact-ui-menu').with({ boundTestRun: testController });
    },
    contactsDetailView: function() {
        return Selector('.contact-detail-view').with({ boundTestRun: testController });
    }, 
    chiefName: function() {
        return Selector('h3').with({ boundTestRun: testController });
    }, 
    menuItemEnlighLanguage: function() {
        return Selector('#lang').with({ boundTestRun: testController });
    },  
    bookAppointment: function() {
        return Selector('.is-unstyled').with({ boundTestRun: testController });
    }, 
    bookAppointment2: function() {
        return Selector('.action').nth(1).with({ boundTestRun: testController });
    },    
    footerIconBooking: function() {
        return Selector('.action').nth(2).with({ boundTestRun: testController });
    },   
    registerCheckbox1: function() {
        return Selector('input[type="radio"]').nth(1).with({ boundTestRun: testController });
    }, 
    showAllNews: function() {
        return Selector('.link-right.news').with({ boundTestRun: testController });
    }, 
    articleHeadline: function() {
        return Selector('.article-headline').withText('rohkem uudiseid').with({ boundTestRun: testController });
    }
    
    
    
    
    
    

    
};    