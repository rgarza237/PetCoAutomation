Feature: Buying and paying

  Background: User logs in
    Given the user navigates to the sign page
    When the user submit username and password
    Then the user should be logged into home screen


  Scenario Outline: As a user, I want to be able to get 2 articles and proceed with the payment.

    Given the user search for 2 articles and add them to cart
    When the user move into cart and fill the payment information
    Then The payment should proceed successfully