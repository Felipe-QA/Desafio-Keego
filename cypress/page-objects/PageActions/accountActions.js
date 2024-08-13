export class login{
    userLogin() {
        return cy.request({
            method: 'POST',
            url: `/accountservice/accountrest/api/v1/login`, 
            body: {
                email: "felipeferreirap.98@mail.com",
                loginPassword: "020418Mf@",
                loginUser: "felipep"
            }
        }).then((res) => {            
            const token = res.body.token 
        });
    }
}