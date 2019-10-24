Feature: Politsei kasutusvoog desktop ja mobiil

  Brausimine, meeleavalduste leht, teenindusaja kuvamine

  Scenario: doing stuff
    Given I open the police page
    When I search for meetings "koosolekud" on Police
    Then I will press enter key on Police
    When I should see that the Police result includes koosolekud
    Then I search for meeleavaldused "meeleavaldus" on Police
    When I click on services icon
    Then I am redirected to a subpage
    When I click on Tartu service
    Then I see the Tartu service title


  Scenario: ekraanisuurus 300 ja 400
    Given I open the police page
    When I search for meetings "koosolekud" on Police