describe('Descuentos', () => {
  let testData;
  testData = [
    {
      titulo: '0 %',
      nombre: 'Juan',
      edad: '30',
      antelacion: '1',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '0',
    },
    {
      titulo: '15 %',
      nombre: 'Juan',
      edad: '35',
      antelacion: '15',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '15',
    },
    {
      titulo: '25 %',
      nombre: 'Juan',
      edad: '55',
      antelacion: '40',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '25',
    },
    {
      titulo: '30 %',
      nombre: 'Juan',
      edad: '15',
      antelacion: '2',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: '40 %',
      nombre: 'Juan',
      edad: '75',
      antelacion: '2',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
  ];

  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  testData.forEach((data) => {
    it(`Descuento - ${data.titulo}`, () => {
      // Simulando la entrada del nombre
      cy.get('#task-name').type(data.nombre);
      // Simulando la entrada de la edad
      cy.get('#age').type(data.edad);
      // Simulando la entrada de la fecha (hoy o una futura)
      cy.get('#antelacion').type(data.antelacion);

      // Haciendo clic en el botón de enviar
      cy.get('button[type="submit"]').click();

      // Verificando que se muestra la alerta
      cy.get('[class="swal2-html-container"]').contains(data.mensaje);

      if (data.mensaje === 'Pasajero registrado correctamente.') {
        // Verifica que los campos se limpien después del envío
        cy.get('.swal2-confirm').click();
        cy.get('#task-name').should('have.value', '');
        cy.get('#age').should('have.value', '');
        cy.get('#antelacion').should('have.value', '');
        cy.get('li.todo')
          .last()
          .find('button.btn__edit')
          .should('be.visible')
          .click();
        // Verificando que se muestra la alerta del descuento
        cy.get('[class="swal2-html-container"]')
          .should('be.visible')
          .contains(`El descuento es de: ${data.porcentaje} %`);
        cy.get('.swal2-confirm').click();
      }
    });
  });
});
