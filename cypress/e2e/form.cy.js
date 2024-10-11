describe('Registro de pasajeros', () => {
  let testData;

  testData= [
  {
    "titulo": "Caso 1",
    "nombre": "Juan",
    "edad": "30",
    "antelacion": "1",
    "mensaje": "Pasajero registrado correctamente.",
    "porcentaje": "50"
  },
  {
    "titulo": "Caso 2",
    "nombre": "Juan45",
    "edad": "25",
    "antelacion": "2",
    "mensaje": "El nombre debe ser un texto válido.",
    "porcentaje": "75"
  }, 
  {
    "titulo": "Caso 3",
    "nombre": " ",
    "edad": "25",
    "antelacion": "2",
    "mensaje": "El nombre debe ser un texto válido.",
    "porcentaje": "75"
  },
  {
    "titulo": "Caso 4",
    "nombre": "Juan45",
    "edad": "-25",
    "antelacion": "2",
    "mensaje": "La edad debe ser un número entero no negativo.",
    "porcentaje": "75"
  },
  {
    "titulo": "Caso 5",
    "nombre": "Juan",
    "edad": "25.5",
    "antelacion": "2",
    "mensaje": "La edad debe ser un número entero no negativo.",
    "porcentaje": "75"
  },
  {
    "titulo": "Caso 6",
    "nombre": "Juan",
    "edad": "25",
    "antelacion": "-20",
    "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
    "porcentaje": "75"
  },
  {
    "titulo": "Caso 7",
    "nombre": "Juan56",
    "edad": "-25",
    "antelacion": "20",
    "mensaje": "El nombre debe ser un texto válido. La edad debe ser un número entero no negativo.",
    "porcentaje": "75"
  },
  {
    "titulo": "Caso 8",
    "nombre": "Juan56",
    "edad": "25",
    "antelacion": "-20",
    "mensaje": "El nombre debe ser un texto válido. La fecha de viaje no puede ser anterior a hoy.",
    "porcentaje": "75"
  },
  {
    "titulo": "Caso 9",
    "nombre": "Juan56",
    "edad": "-25",
    "antelacion": "-20",
    "mensaje": "El nombre debe ser un texto válido. La edad debe ser un número entero no negativo. La fecha de viaje no puede ser anterior a hoy.",
    "porcentaje": "75"
  }]

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
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + parseInt(data.antelacion));
        cy.get('#date').type(futureDate.toISOString().split('T')[0]);

        // Haciendo clic en el botón de enviar
        cy.get('button[type="submit"]').click();

        // Verificando que se muestra la alerta
        cy.get('[class="swal2-html-container"]').contains(data.mensaje);

        if (data.mensaje === "Pasajero registrado correctamente."){
        // Verifica que los campos se limpien después del envío
        cy.get('.swal2-confirm').click();
        cy.get('#task-name').should('have.value', '');
        cy.get('#age').should('have.value', '');
        cy.get('#date').should('have.value', ''); }
      });
    });

  });




