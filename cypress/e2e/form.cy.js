describe('Formulario de registro de pasajeros', () => {
  beforeEach(() => {
    cy.visit('localhost:3000'); // Asegúrate de que esta ruta cargue el componente que contiene el formulario.
  });

  it('Registrar un pasajero exitosamente', () => {
    // Simulando la entrada del nombre
    cy.get('#task-name').type('Juan');
    // Simulando la entrada de la edad
    cy.get('#age').type('30');
    // Simulando la entrada de la fecha (hoy o una futura)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Para seleccionar una fecha futura
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);

    // Haciendo clic en el botón de enviar
    cy.get('button[type="submit"]').click();

    // Verificando que se muestra la alerta de éxito
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Pasajero registrado correctamente.');
    });
    
    // Verifica que los campos se limpien después del envío
    cy.get('#task-name').should('have.value', '');
    cy.get('#age').should('have.value', '');
    cy.get('#date').should('have.value', '');
  });

  it('Registro de un pasajero: ERROR DE NOMBRE, NUMEROS', () => {
    // Simulando la entrada del nombre
    cy.get('#task-name').type('Juan45');
    // Simulando la entrada de la edad
    cy.get('#age').type('30');
    // Simulando la entrada de la fecha (hoy o una futura)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Para seleccionar una fecha futura
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);

    // Haciendo clic en el botón de enviar
    cy.get('button[type="submit"]').click();

    // Verificando que se muestra la alerta de éxito
    cy.on('window:alert', (text) => {
      expect(text).to.contains('El nombre debe ser un texto válido.');
    });
    
  }); 

  it('Registro de un pasajero: ERROR DE NOMBRE, BLANCO', () => {
    // Simulando la entrada del nombre
    cy.get('#task-name').type(' ');
    // Simulando la entrada de la edad
    cy.get('#age').type('30');
    // Simulando la entrada de la fecha (hoy o una futura)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Para seleccionar una fecha futura
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);

    // Haciendo clic en el botón de enviar
    cy.get('button[type="submit"]').click();

    // Verificando que se muestra la alerta de éxito
    cy.on('window:alert', (text) => {
      expect(text).to.contains('El nombre debe ser un texto válido.');
    });
  }); 

  it('Registro de un pasajero: ERROR DE EDAD, NEGATIVA', () => {
    // Simulando la entrada del nombre
    cy.get('#task-name').type('JUAN');
    // Simulando la entrada de la edad
    cy.get('#age').type('-30');
    // Simulando la entrada de la fecha (hoy o una futura)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Para seleccionar una fecha futura
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);

    // Haciendo clic en el botón de enviar
    cy.get('button[type="submit"]').click();

    // Verificando que se muestra la alerta de éxito
    cy.on('window:alert', (text) => {
      expect(text).to.contains('La edad debe ser un número entero no negativo.');
    });
  }); 

  it('Registro de un pasajero: ERROR DE EDAD, DECIMAL', () => {
    // Simulando la entrada del nombre
    cy.get('#task-name').type('JUAN');
    // Simulando la entrada de la edad
    cy.get('#age').type('-3.0');
    // Simulando la entrada de la fecha (hoy o una futura)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Para seleccionar una fecha futura
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);

    // Haciendo clic en el botón de enviar
    cy.get('button[type="submit"]').click();

    // Verificando que se muestra la alerta de éxito
    cy.on('window:alert', (text) => {
      expect(text).to.contains('La edad debe ser un número entero no negativo.');
    });
  }); 

  it('Registro de un pasajero: ERROR DE FECHA ANTIGUA', () => {
    // Simulando la entrada del nombre
    cy.get('#task-name').type('JUAN');
    // Simulando la entrada de la edad
    cy.get('#age').type('30');
    // Simulando la entrada de la fecha (hoy o una futura)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() - 10); // Para seleccionar una fecha vieja
    cy.get('#date').type(futureDate.toISOString().split('T')[0]);

    // Haciendo clic en el botón de enviar
    cy.get('button[type="submit"]').click();

    // Verificando que se muestra la alerta de éxito
    cy.on('window:alert', (text) => {
      expect(text).to.contains('La fecha de viaje no puede ser anterior a hoy.');
    });
  }); 
});


