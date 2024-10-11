describe('Descuentos', () => {
  beforeEach(() => {
    cy.visit('localhost:3000'); 
  });

  it('Descuento 0%', () => {
    cy.get('#task-name').type('Juan');
    cy.get('#age').type('30');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); 
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);
    cy.get('button[type="submit"]').click();
    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Pasajero registrado correctamente.');
      return true; 
    });
    cy.get('.swal2-confirm').click();
    
    cy.get('#task-name').should('have.value', '');
    cy.get('#age').should('have.value', '');
    cy.get('#date').should('have.value', '');

    cy.get('li.todo').last().find('button.btn__edit').click();
    // Verificando que se muestra la alerta del descuento
    cy.on('window:alert', (text) => {
      expect(text).to.contains('El descuento es de: 0 %');
    });
    cy.get('.swal2-confirm').click();
  });

  it('Descuento 15%', () => {
    cy.get('#task-name').type('Juan');
    cy.get('#age').type('30');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 15); 
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);
    cy.get('button[type="submit"]').click();
    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Pasajero registrado correctamente.');
      return true; 
    });
    cy.get('.swal2-confirm').click();
    
    cy.get('#task-name').should('have.value', '');
    cy.get('#age').should('have.value', '');
    cy.get('#date').should('have.value', '');

    cy.get('li.todo').last().find('button.btn__edit').click();
    // Verificando que se muestra la alerta del descuento
    cy.on('window:alert', (text) => {
      expect(text).to.contains('El descuento es de: 15 %');
    });
    cy.get('.swal2-confirm').click();
  });  

  it('Descuento 25%', () => {
    cy.get('#task-name').type('Juan');
    cy.get('#age').type('30');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30); 
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);
    cy.get('button[type="submit"]').click();
    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Pasajero registrado correctamente.');
      return true; 
    });
    cy.get('.swal2-confirm').click();
    
    cy.get('#task-name').should('have.value', '');
    cy.get('#age').should('have.value', '');
    cy.get('#date').should('have.value', '');

    cy.get('li.todo').last().find('button.btn__edit').click();
    // Verificando que se muestra la alerta del descuento
    cy.on('window:alert', (text) => {
      expect(text).to.contains('El descuento es de: 25 %');
    });
    cy.get('.swal2-confirm').click();
  });  

  it('Descuento 30% ', () => {
    cy.get('#task-name').type('Juan');
    cy.get('#age').type('15');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 3); 
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);
    cy.get('button[type="submit"]').click();
    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Pasajero registrado correctamente.');
      return true; 
    });
    cy.get('.swal2-confirm').click();
    
    cy.get('#task-name').should('have.value', '');
    cy.get('#age').should('have.value', '');
    cy.get('#date').should('have.value', '');

    cy.get('li.todo').last().find('button.btn__edit').click();
    // Verificando que se muestra la alerta del descuento
    cy.on('window:alert', (text) => {
      expect(text).to.contains('El descuento es de: 25 %');
    });
    cy.get('.swal2-confirm').click();
  });  

it('Descuento 40% ', () => {
    cy.get('#task-name').type('Juan');
    cy.get('#age').type('80');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 3); 
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);
    cy.get('button[type="submit"]').click();
    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Pasajero registrado correctamente.');
      return true; 
    });
    cy.get('.swal2-confirm').click();
    
    cy.get('#task-name').should('have.value', '');
    cy.get('#age').should('have.value', '');
    cy.get('#date').should('have.value', '');

    cy.get('li.todo').last().find('button.btn__edit').click();
    // Verificando que se muestra la alerta del descuento
    cy.on('window:alert', (text) => {
      expect(text).to.contains('El descuento es de: 40 %');
    });
    cy.get('.swal2-confirm').click();
  });   
})

