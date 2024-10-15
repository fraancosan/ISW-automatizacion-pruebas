describe('Registro de pasajeros', () => {
  let testData = [
    {
      titulo: 'Caso 1',
      nombre: 'Juan',
      edad: '-1',
      antelacion: '-1',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 2',
      nombre: 'Juan',
      edad: '-1',
      antelacion: '0',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 3',
      nombre: 'Juan',
      edad: '-1',
      antelacion: '6',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 4',
      nombre: 'Juan',
      edad: '-1',
      antelacion: '7',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 5',
      nombre: 'Juan',
      edad: '-1',
      antelacion: '29',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 6',
      nombre: 'Juan',
      edad: '-1',
      antelacion: '30',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 7',
      nombre: 'Juan',
      edad: '-1',
      antelacion: 'a',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 8',
      nombre: 'Juan',
      edad: '-1',
      antelacion: '1.5',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 9',
      nombre: 'Juan',
      edad: '0',
      antelacion: '-1',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 10',
      nombre: 'Juan',
      edad: '0',
      antelacion: '0',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 11',
      nombre: 'Juan',
      edad: '0',
      antelacion: '6',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 12',
      nombre: 'Juan',
      edad: '0',
      antelacion: '7',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 13',
      nombre: 'Juan',
      edad: '0',
      antelacion: '29',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 14',
      nombre: 'Juan',
      edad: '0',
      antelacion: '30',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 15',
      nombre: 'Juan',
      edad: '0',
      antelacion: 'a',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 16',
      nombre: 'Juan',
      edad: '0',
      antelacion: '1.5',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 17',
      nombre: 'Juan',
      edad: '25',
      antelacion: '-1',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 18',
      nombre: 'Juan',
      edad: '25',
      antelacion: '0',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 19',
      nombre: 'Juan',
      edad: '25',
      antelacion: '6',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 20',
      nombre: 'Juan',
      edad: '25',
      antelacion: '7',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 21',
      nombre: 'Juan',
      edad: '25',
      antelacion: '29',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 22',
      nombre: 'Juan',
      edad: '25',
      antelacion: '30',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '30',
    },
    {
      titulo: 'Caso 23',
      nombre: 'Juan',
      edad: '25',
      antelacion: 'a',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 24',
      nombre: 'Juan',
      edad: '25',
      antelacion: '1.5',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 25',
      nombre: 'Juan',
      edad: '26',
      antelacion: '-1',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 26',
      nombre: 'Juan',
      edad: '26',
      antelacion: '0',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 27',
      nombre: 'Juan',
      edad: '26',
      antelacion: '6',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 28',
      nombre: 'Juan',
      edad: '26',
      antelacion: '7',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '15',
    },
    {
      titulo: 'Caso 29',
      nombre: 'Juan',
      edad: '26',
      antelacion: '29',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '15',
    },
    {
      titulo: 'Caso 30',
      nombre: 'Juan',
      edad: '26',
      antelacion: '30',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '25',
    },
    {
      titulo: 'Caso 31',
      nombre: 'Juan',
      edad: '26',
      antelacion: 'a',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 32',
      nombre: 'Juan',
      edad: '26',
      antelacion: '1.5',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 33',
      nombre: 'Juan',
      edad: '64',
      antelacion: '-1',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 34',
      nombre: 'Juan',
      edad: '64',
      antelacion: '0',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 35',
      nombre: 'Juan',
      edad: '64',
      antelacion: '6',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 36',
      nombre: 'Juan',
      edad: '64',
      antelacion: '7',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '15',
    },
    {
      titulo: 'Caso 37',
      nombre: 'Juan',
      edad: '64',
      antelacion: '29',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '15',
    },
    {
      titulo: 'Caso 38',
      nombre: 'Juan',
      edad: '64',
      antelacion: '30',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '25',
    },
    {
      titulo: 'Caso 39',
      nombre: 'Juan',
      edad: '64',
      antelacion: 'a',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 40',
      nombre: 'Juan',
      edad: '64',
      antelacion: '1.5',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 41',
      nombre: 'Juan',
      edad: '65',
      antelacion: '-1',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 42',
      nombre: 'Juan',
      edad: '65',
      antelacion: '0',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 43',
      nombre: 'Juan',
      edad: '65',
      antelacion: '6',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 44',
      nombre: 'Juan',
      edad: '65',
      antelacion: '7',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 45',
      nombre: 'Juan',
      edad: '65',
      antelacion: '29',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 46',
      nombre: 'Juan',
      edad: '65',
      antelacion: '30',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 47',
      nombre: 'Juan',
      edad: '65',
      antelacion: 'a',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 48',
      nombre: 'Juan',
      edad: '65',
      antelacion: '1.5',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 49',
      nombre: 'Juan',
      edad: '999',
      antelacion: '-1',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 50',
      nombre: 'Juan',
      edad: '999',
      antelacion: '0',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 51',
      nombre: 'Juan',
      edad: '999',
      antelacion: '6',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 52',
      nombre: 'Juan',
      edad: '999',
      antelacion: '7',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 53',
      nombre: 'Juan',
      edad: '999',
      antelacion: '29',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 54',
      nombre: 'Juan',
      edad: '999',
      antelacion: '30',
      mensaje: 'Pasajero registrado correctamente.',
      porcentaje: '40',
    },
    {
      titulo: 'Caso 55',
      nombre: 'Juan',
      edad: '999',
      antelacion: 'a',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 56',
      nombre: 'Juan',
      edad: '999',
      antelacion: '1.5',
      mensaje: 'La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 57',
      nombre: 'Juan',
      edad: '1000',
      antelacion: '-1',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 58',
      nombre: 'Juan',
      edad: '1000',
      antelacion: '0',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 59',
      nombre: 'Juan',
      edad: '1000',
      antelacion: '6',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 60',
      nombre: 'Juan',
      edad: '1000',
      antelacion: '7',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 61',
      nombre: 'Juan',
      edad: '1000',
      antelacion: '29',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },

    {
      titulo: 'Caso 62',
      nombre: 'Juan',
      edad: '1000',
      antelacion: '30',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 63',
      nombre: 'Juan',
      edad: '1000',
      antelacion: 'a',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 64',
      nombre: 'Juan',
      edad: '1000',
      antelacion: '1.5',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 65',
      nombre: 'Juan',
      edad: 'a',
      antelacion: '-1',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 66',
      nombre: 'Juan',
      edad: 'a',
      antelacion: '0',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 67',
      nombre: 'Juan',
      edad: 'a',
      antelacion: '6',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 68',
      nombre: 'Juan',
      edad: 'a',
      antelacion: '7',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 69',
      nombre: 'Juan',
      edad: 'a',
      antelacion: '29',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 70',
      nombre: 'Juan',
      edad: 'a',
      antelacion: '30',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 71',
      nombre: 'Juan',
      edad: 'a',
      antelacion: 'a',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 72',
      nombre: 'Juan',
      edad: 'a',
      antelacion: '1.5',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 73',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: '-1',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 74',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: '0',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 75',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: '6',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 76',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: '7',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 77',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: '29',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },

    {
      titulo: 'Caso 78',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: '30',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 79',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: 'a',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
    {
      titulo: 'Caso 80',
      nombre: 'Juan',
      edad: '2.6',
      antelacion: '1.5',
      mensaje:
        'La edad debe ser un número entero no negativo de maximo tres cifras. La antelación debe ser un número entero positivo.',
      porcentaje: '0',
    },
  ];
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  testData.forEach((data) => {
    it(`Registrar un pasajero - ${data.titulo}`, () => {
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
