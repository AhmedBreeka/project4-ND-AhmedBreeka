describe("Forms Functionality Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
        cy.get("#cardSetPage").click();
    });

    it("Show the Add Card Form and Creates a new card set successfully", () => {
        cy.get("[data-cy='toggle_form']").click();
        cy.get("[data-cy='set_form']").should("be.visible");

        cy.get("[data-cy='set_form']").within(() => {
            cy.get("#titleInput").type("JavaScript Basics");
            cy.get('input[type="submit"]').click();
        });

        cy.get(".setContainer")
            .find("ul.cardSets")
            .should("contain", "JavaScript Basics");
    });

    it("Shows error messages for invalid input", () => {
        cy.get("[data-cy='toggle_form']").click();
        cy.get("[data-cy='set_form']").should("be.visible");

        cy.get("[data-cy='set_form']").within(() => {
            cy.get("#titleInput").clear();
            cy.get('input[type="submit"]').click();
        });

        cy.get("p.error").should("be.visible");
    });

    it("Show the Card Form and Creates a new card successfully", () => {
        cy.get("[data-cy='1']").click();
        cy.get("[data-cy='toggle_form']").click(); // data-cy="toggle_form"
        cy.get("[data-cy='card_form']").should("be.visible"); // show form "card_form"

        cy.get("[data-cy='card_form']").within(() => {
            cy.get("#termInput").clear().type("test term");
            cy.get("#descriptionInput").clear().type("test description");
            cy.get('input[type="submit"]').click();
        });

        cy.get(".cardContainer")
            .should("exist")
            .and("be.visible")
            .within(() => {
                cy.get(".innerCard").should("exist");

                cy.get(".term p").should("contain", "test term");

                cy.get(".description p").should("contain", "test description");
            });
    });

    it("show error messages for invalid input in the Card Form", () => {
        cy.get("[data-cy='1']").click();
        cy.get("[data-cy='toggle_form']").click(); // data-cy="toggle_form"
        cy.get("[data-cy='card_form']").should("be.visible"); // show form "card_form"

        // all input are empty
        cy.get("[data-cy='card_form']").within(() => {
            cy.get("#termInput").clear();
            cy.get("#descriptionInput").clear();
            cy.get('input[type="submit"]').click();
        });

        cy.get("p.error")
            .should("be.visible")
            .and("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");

        // only term input is empty
        cy.get("[data-cy='card_form']").within(() => {
            cy.get("#termInput").clear();
            cy.get("#descriptionInput").clear().type("test description");
            cy.get('input[type="submit"]').click();
        });

        cy.get("p.error").should("be.visible")
            .and("contain", "TERM CANNOT BE EMPTY");


        // only description input is empty
        cy.get("[data-cy='card_form']").within(() => {
            cy.get("#termInput").clear().type("test term");
            cy.get("#descriptionInput").clear();
            cy.get('input[type="submit"]').click();
        });

        cy.get("p.error").should("be.visible")
            .and("contain", "DESCRIPTION CANNOT BE EMPTY");
    });
});
