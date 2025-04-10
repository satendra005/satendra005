describe('Hoch Technology', () => {
  it('hoch technology', () => {
    cy.visit('https://www.hochtechnology.com/'); 

    cy.contains('IT Solution Comapny').should('be.visible');
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(1) > .navbar-active').click()
    cy.get(':nth-child(1) > .feature-item > h5 > a').click() // click on Business Development
    // cy.scrollTo(0, 5000);
    cy.get('.widget > .theme-btn > .fas').click()
    cy.get('.breadcrumb > :nth-child(1) > a').click() // Back to home 
    cy.get(':nth-child(2) > .feature-item > h5 > a').click() // click on Website Development
    cy.get('.widget > .theme-btn > .fas').click()
    cy.get('.breadcrumb > :nth-child(1) > a').click() // Back to home 
    cy.get(':nth-child(3) > .feature-item > h5 > a').click() // Click on Mobile App Development
    cy.get('.widget > .theme-btn > .fas').click() 
    cy.get('.breadcrumb > :nth-child(1) > a').click() // Back to home 
    cy.get(':nth-child(4) > .feature-item > h5 > a').click()   // Click on Quality Assurance
    cy.get('.breadcrumb > :nth-child(1) > a').click() // Back to home 
    cy.get(':nth-child(5) > .feature-item > h5 > a').click() // Click on Project Management
    cy.get('.widget > .theme-btn > .fas').click()
    cy.get('.breadcrumb > :nth-child(1) > a').click() // Back to home 
    cy.get(':nth-child(6) > .feature-item > h5 > a').click()    // Click on IT Consulting
    cy.get('.widget > .theme-btn > .fas').click()
    cy.get('.breadcrumb > :nth-child(1) > a').click() // Back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(2) > a').click() // Click on About Us 
    cy.get('.breadcrumb > :nth-child(1) > a').click() // Back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(3) > a').click() // Click on  Services 
    cy.get('.breadcrumb > :nth-child(1) > a').click() // back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(4) > a').click() // Click on Project 
    cy.get('.breadcrumb > :nth-child(1) > a').click() // back to home  
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(5) > a').click() // Click on Blog
    cy.get('.breadcrumb > :nth-child(1) > a').click() // back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(6) > a').click() // Click on Team
    cy.get('.breadcrumb > :nth-child(1) > a').click() // back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(7) > a').click() // Click on FAQ
    cy.get('.breadcrumb > :nth-child(1) > a').click() // back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(8) > a').click() // Click on Contact Us
    cy.get('.breadcrumb > :nth-child(1) > a').click() // back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(9) > a').click() // Career
    cy.get('#search').type('QA'); // Career Search
    cy.get('#location').type('Rajkot');
    cy.get('#type').select('Part-Time') 
    cy.get('input#fromDeadlineDate').type('2025-04-15').should('have.value', '2025-04-15');
    cy.get('input#toDeadlineDate').type('2025-04-25').should('have.value', '2025-04-25');
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(8) > a').click() // Contact Us
    cy.get('#fullName').type('Satendra');
    cy.get('#phone_number').type('8200411405');
    cy.get('.form-group > #email').type('satendrarajbhar@gmail.com');
    cy.get('#subject').type('inqury');
    cy.get('#message').type('Message type for testing');
    cy.get('.theme-btn > .far').click() // Send message Button
    cy.wait(5000);
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(1) > a').click() // Back to home 
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(7) > a').click() // Click on FAQ
    cy.wait(5000);
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get(':nth-child(6) > .nav-link').click()
    cy.get(':nth-child(7) > .nav-link').click()
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(1) > a').click() // Back to home 
    cy.wait(500);
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(6) > a').click() // TEAM
    cy.get(':nth-child(1) > .accordion-header > .accordion-button').click()
    cy.wait(500);
    cy.get(':nth-child(2) > .accordion-header > .accordion-button').click()
    cy.wait(500);
    cy.get(':nth-child(3) > .accordion-header > .accordion-button').click()
    cy.wait(500);
    cy.get(':nth-child(4) > .accordion-header > .accordion-button').click()
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(5) > a').click()
    cy.get('.default-search-form > input').type('WordPress'); // Blog Search
    cy.wait(5000);
    cy.get('.default-search-form > input').clear('WordPress'); // Clear Blog Search
    cy.get('.widget-category > ul > :nth-child(1) > a').click()
    cy.get('.widget-category > ul > :nth-child(2) > a').click()
    cy.get('.widget-category > ul > :nth-child(3) > a').click()
    cy.get('.widget-category > ul > :nth-child(4) > a').click()
    cy.get('.widget-category > ul > :nth-child(5) > a').click()
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(4) > a').click() // Click on Project 
    cy.get(':nth-child(1) > .project-grid-item > .image').click()
    cy.wait(5000);
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(4) > a').click() // Click on Project 
    cy.get(':nth-child(2) > .project-grid-item > .content > .detail-btn').click()
    cy.wait(500);
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(4) > a').click() // Click on Project 
    cy.get(':nth-child(3) > .project-grid-item > .image').click()
    cy.wait(5000);
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(4) > a').click() // Click on Project 
    cy.get(':nth-child(4) > .project-grid-item > .content > .detail-btn').click()
    cy.wait(5000);
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(4) > a').click() // Click on Project 
    cy.get(':nth-child(5) > .project-grid-item > .content > .detail-btn').click()
    cy.wait(5000);
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(4) > a').click() // Click on Project 
    cy.get(':nth-child(6) > .project-grid-item > .content > .detail-btn').click()
    cy.get('.accordion > .navbar-collapse > .navigation > :nth-child(3) > a').click() // Click on  Services 
    cy.wait(500);
    cy.get(':nth-child(3) > .work-process-item').trigger('mouseover');
    cy.get('.mfp-iframe > .fas').click()
    cy.wait(20000);
    cy.get('.mfp-close').click()



    

   
    });
});