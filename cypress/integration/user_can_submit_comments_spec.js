describe("Comments", () => {
  it("user can create post and add comment to it", () => {
    // sign up
    cy.task("wipe_database");
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.get('.new-post-link').click();
    cy.get("#message").type("Hello, world!");
    cy.get("#new-post-form > [type='submit']").click();

    // add a comment
    cy.contains("More details").click();
    cy.get("body").should("contain", "Hello,");
    cy.get("#message").type("Comment 1");
    cy.contains("Create").click();
    cy.get(".comments li").should("contain", "Comment 1");
  });

  it("user can't add empty comment to post", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to add a comment
    cy.contains("More details").click();
    cy.contains("Create").click();
    cy.get(".comments li").should("contain", "Comment 1");
    cy.get(".comments li").should("have.length", 1);
  });

  it("user can't add comment with just spaces to post", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to add a comment
    cy.contains("More details").click();
    cy.get("#message").type("     ");
    cy.contains("Create").click();
    cy.get(".comments li").should("contain", "Comment 1");
    cy.get(".comments li").should("have.length", 1);
  });

  it("user can comment on other user post", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("tester@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("tester@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // search for and add a user and log out
    cy.get('#username').type("someone")
    cy.get('[action="/users/search"] > [type="submit"]').click();
    cy.wait(1000);
    // cy.reload();
    // cy.wait(1000);

    cy.get('p > a').click();
    cy.get(':nth-child(4) > form > input').click();
    cy.get(':nth-child(5) > form > input').click();
    cy.url().should("contain","/sessions/new")

    // log in as someone (account from before)
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // nav to their user profile
    cy.contains("someone").click();
    cy.url().should("contain","/users");
    cy.contains("Confirm").click();
    cy.get(':nth-child(5) > form > input').click();

    // sign in again as tester
    cy.get("#email").type("tester@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to add a comment
    cy.contains("More details").click();
    cy.get("#message").type("Comment 2");
    cy.contains("Create").click();
    cy.get(".comments li").should("contain", "Comment 2");
    cy.get(".comments li").should("have.length", 2);
  });

  it("user can navigate back to posts after visiting comments page", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("tester@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // go to comments page and add comment
    cy.contains("More details").click();
    cy.get("#message").type("Comment 3");
    cy.contains("Create").click();

    // travel back to posts
    cy.contains("Home").click();
    cy.url().should("include", "/posts");
  });

  it("user comment is added without extra spaces", () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // attempt to add a comment
    cy.contains("More details").click();
    cy.get("#message").type("     Comment 4    ");
    cy.contains("Create").click();
    cy.get(".comments li").eq(3).should("have.text", "Comment 4");
    cy.get(".comments li").should("have.length", 4);
  });
});
