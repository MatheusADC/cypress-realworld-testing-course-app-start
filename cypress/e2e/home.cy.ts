describe("home page", () => {
  // hook
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  // context: wrap all of the tests related to specific page. For instance, hero section. It's necessary in the context - no pun intended - to test multiple pages 'n' organize it.
  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      // cy.visit("http://localhost:3000")
      // npm install cypress --save-dev
      // npm run dev
      // npx cypress open 
      // Don't use ids or classes, because they change.
      // cy.get("h1")
      cy.get("[data-test='hero-heading']")
        // If the data-test exist on the DOM
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    // only: make just those tests run and ignore the others
    it.only("the features on the homepage are correct", () => {
      // cy.visit("http://localhost:3000")
      //return only de element with zero index
      // contains is case sensitive
      // cy.get("dt").eq(0).contains("4 courses")
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it.only("Course: Testing Your First Next.js Application", () => {
      // find: seek all the elements with tag <a></a> inside the element with data-test "course-0"
      cy.getByData("course-0").find("a").contains("Get started").click()
      // location + should(equal): verify if the URL's pathname is equal testing-your-first-application
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})