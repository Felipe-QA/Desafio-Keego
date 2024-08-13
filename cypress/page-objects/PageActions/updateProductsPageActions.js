export class UpdateProductsPage {
  UpdateProducts(userId, source, color, product_id) {
    cy.fixture("mouse2.jpg", "binary").then((image) => {
      const blob = Cypress.Blob.binaryStringToBlob(image, "image/jpg");
      const formData = new FormData();
      formData.append("image", blob, "mouse2.jpg");

    return cy.request({
        method: "POST",
        url: `/catolog/api/v1/product/image/${userId}/${source}/${color}?product_id=${product_id}`,
        body: formData,
        headers: {'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9`}
      });
    });
  }
}
