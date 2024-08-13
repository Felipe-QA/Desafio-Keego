Feature: Api Testing

    Scenario: Get a Product
        Given I have a Product Name
        When I send a request to search the products
        Then The response status should be 200
        And The response body must have only the product that I search