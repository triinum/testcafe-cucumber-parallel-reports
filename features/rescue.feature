Feature: Päästeameti kasutuslood

 Ma tahan brausida

  Scenario: Browsing around in rescue site
    Given I open the rescue page
    When I verify items exist and content appears front page
    When I am typing my search request "mingid asjad" on Rescue
    Then I am pressing enter key on Rescue
    When I should see that the first Rescue's result includes Päästeamet kontrollib nädala jooksul
    Then I click on the news title
    Then I click the submit button
    When I see "Asutuse kontaktid" in the name field
    Then I am redirected to a new URL
    Then I search from the first list "Päästeamet"
    When I am redirected to Northern rescue department and search the name "ÜLDKONTAKTID"
    Then I want to change the language to "en"
    When I move on to icon menu "ru"
    Then I click to view statistics in russian
    When I search for instructions "juhend" on Rescue
    Then I press enter key on Rescue
    When I should see that the Rescue result includes Восточный спасательный центр - Восточный спасательный центр
    Then I click on juhendid and expect url to change
    When I go back to main page and check the news archive