

Feature: User insert Products on Cart
    As a User
    I want to add a product on cart
    So I can buy the product

    Scenario: User insert Products on Cart
        Given I am on the Index Page
        When I click on a category and select a product
        And I add the product to the cart and go to the Shopping Cart
        When I click on the Checkout button
        Then I should be redirected to the Checkout Page
        And the summary should contain the product

    Scenario: User insert 2 or more quantities on cart
        Given I am on the Index Page
        When I click on a category and select a product
        And I click on the Plus button to add more quantities of the product to the cart
        And go to the Shopping Cart
        When I click on the Checkout button
        Then I should be redirected to the Checkout Page
        And the summary should contain the product with the same quantities that I selected

    Scenario: User selects a product that is out of stock
        Given I am on the Index Page
        When I click on a category
        And I select a product that does not have stock
        Then The button to add the cart must be disabled
        And A tag with Sold Out must be visible