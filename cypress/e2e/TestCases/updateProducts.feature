Feature: Update Product

    Scenario: Update product image
    Given I have a Product to update
    When I send a request with the image 
    Then The response status should be 200
    And The response body should contain the imageId