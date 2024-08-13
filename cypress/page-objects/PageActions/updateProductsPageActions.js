export class UpdateProductsPage {
  UpdateProducts(userId, color, source) {
    cy.fixture("mouse2.jpg", "binary").then((image) => {
      const blob = Cypress.Blob.binaryStringToBlob(image, "image/jpg");
      const formData = new FormData();
      formData.append("image", blob, "mouse2.jpg");

     return cy.request({
        method: "POST",
        url: `/catalog/api/v1/product/image/${userId}/${source}/${color}`,
        body: formData,
        qs: {
            product_id: 34
        },
        headers: {
            'accept': '*/*',
            'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjozMTk1MzQzMDgsInN1YiI6ImZlbGlwZXAiLCJyb2xlIjoiQURNSU4ifQ.JkQ4Ek7lteM4BqXBUQWMAQEZQL0upVqWMA3JCniH6eM`,
            'Content-Type': 'multipart/form-data'
    }});
    });
  }
}
