Feature: Remove Products from Cart
    As a User
    I want to remove a product from cart
    So I can add another product to buy

    Scenario: Delete quantity of cart
        Given I Have a product with more than one quantity in the cart
        When I click on Edit
        Then I should be redirected to the Product Page
        And The product should contains the same quantity in the cart

        When I click on the Minus button to decrease the quantity
        And I click on Add to cart
        Then The cart should update the quantity of the product

    Scenario: Remove product from Shopping Cart Page
        Given I'm on the Shopping Cart Page with one product
        When I click on Remove
        Then The product should be removed from the Cart

    Scenario: Remove product from cart dropdown
        Given I have one product on Cart and mouse over cart icon
        When I click on the X button
        Then The product should be removed from Cart