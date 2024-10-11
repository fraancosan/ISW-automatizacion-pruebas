describe('Descuentos', () => {
let testData; 
testData= [
  {
    "titulo": "0 %",
    "nombre": "Juan",
    "edad": "30",
    "antelacion": "1",
    "mensaje": "Pasajero registrado correctamente.",
    "porcentaje": "0"
  },
  {
    "titulo": "15 %",
    "nombre": "Juan",
    "edad": "35",
    "antelacion": "15",
    "mensaje": "Pasajero registrado correctamente.",
    "porcentaje": "15"
  }, 
  {
    "titulo": "25 %",
    "nombre": "Juan",
    "edad": "55",
    "antelacion": "40",
    "mensaje": "Pasajero registrado correctamente.",
    "porcentaje": "25"
  },
  {
    "titulo": "30 %",
    "nombre": "Juan",
    "edad": "15",
    "antelacion": "2",
    "mensaje": "Pasajero registrado correctamente.",
    "porcentaje": "30"
  },
  {
    "titulo": "40 %",
    "nombre": "Juan",
    "edad": "75",
    "antelacion": "2",
    "mensaje": "Pasajero registrado correctamente.",
    "porcentaje": "40"
  }];
  
  
  beforeEach(() => {
    cy.visit('localhost:3000'); 
  });

  testData.forEach((data)=>{
    it(`Descuento - ${data.titulo}`, () => {
    cy.get('#task-name').type(data.nombre);
    cy.get('#age').type(data.edad);
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + parseInt(data.antelacion)); 
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);
    cy.get('button[type="submit"]').click();
    
    cy.get('[class="swal2-html-container"]').contains('Pasajero registrado correctamente.')
    cy.get('.swal2-confirm').click();
    
    cy.get('#task-name').should('have.value', '');
    cy.get('#age').should('have.value', '');
    cy.get('#date').should('have.value', '');

    cy.get('li.todo').last().find('button.btn__edit').click();
    // Verificando que se muestra la alerta del descuento
    cy.get('[class="swal2-html-container"]').contains(`El descuento es de: ${data.porcentaje} %`)
    
    cy.get('.swal2-confirm').click();
  });
  })

})

