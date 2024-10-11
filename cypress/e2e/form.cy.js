describe('Registro de pasajeros', () => {
  let testData = [{
  "edad": "-1",
  "casos": [
    {
      "titulo": "Caso 1",
      "nombre": "Juan",
      "antelacion": "-1",
      "mensaje": "La edad debe ser un número entero no negativo. La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 2",
      "nombre": "Juan",
      "antelacion": "0",
      "mensaje": "La edad debe ser un número entero no negativo.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 3",
      "nombre": "Juan",
      "antelacion": "6",
      "mensaje": "La edad debe ser un número entero no negativo.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 4",
      "nombre": "Juan",
      "antelacion": "7",
      "mensaje": "La edad debe ser un número entero no negativo.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 5",
      "nombre": "Juan",
      "antelacion": "29",
      "mensaje": "La edad debe ser un número entero no negativo.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 6",
      "nombre": "Juan",
      "antelacion": "30",
      "mensaje": "La edad debe ser un número entero no negativo.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 7",
      "nombre": "Juan",
      "antelacion": "a",
      "mensaje": "La edad debe ser un número entero no negativo. La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 8",
      "nombre": "Juan",
      "antelacion": "1.5",
      "mensaje": "La edad debe ser un número entero no negativo. La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    }
  ]
},
{
  "edad": "0",
  "casos": [
    {
      "titulo": "Caso 1",
      "nombre": "Juan",
      "antelacion": "-1",
      "mensaje": "La edad debe ser un número entero no negativo. La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 2",
      "nombre": "Juan",
      "antelacion": "0",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 3",
      "nombre": "Juan",
      "antelacion": "6",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 4",
      "nombre": "Juan",
      "antelacion": "7",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 5",
      "nombre": "Juan",
      "antelacion": "29",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 6",
      "nombre": "Juan",
      "antelacion": "30",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 7",
      "nombre": "Juan",
      "antelacion": "a",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 8",
      "nombre": "Juan",
      "antelacion": "1.5",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    }
  ]
},
{
  "edad": "24",
  "casos": [
    {
      "titulo": "Caso 1",
      "nombre": "Juan",
      "antelacion": "-1",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 2",
      "nombre": "Juan",
      "antelacion": "0",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 3",
      "nombre": "Juan",
      "antelacion": "6",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 4",
      "nombre": "Juan",
      "antelacion": "7",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 5",
      "nombre": "Juan",
      "antelacion": "29",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 6",
      "nombre": "Juan",
      "antelacion": "30",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "30"
    },
    {
      "titulo": "Caso 7",
      "nombre": "Juan",
      "antelacion": "a",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 8",
      "nombre": "Juan",
      "antelacion": "1.5",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    }
  ]
},
{
  "edad": "25",
  "casos": [
    {
      "titulo": "Caso 1",
      "nombre": "Juan",
      "antelacion": "-1",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 2",
      "nombre": "Juan",
      "antelacion": "0",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 3",
      "nombre": "Juan",
      "antelacion": "6",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 4",
      "nombre": "Juan",
      "antelacion": "7",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "15"
    },
    {
      "titulo": "Caso 5",
      "nombre": "Juan",
      "antelacion": "29",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "15"
    },
    {
      "titulo": "Caso 6",
      "nombre": "Juan",
      "antelacion": "30",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "25"
    },
    {
      "titulo": "Caso 7",
      "nombre": "Juan",
      "antelacion": "a",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 8",
      "nombre": "Juan",
      "antelacion": "1.5",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    }
  ]
},
{
  "edad": "65",
  "casos": [
    {
      "titulo": "Caso 1",
      "nombre": "Juan",
      "antelacion": "-1",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 2",
      "nombre": "Juan",
      "antelacion": "0",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 3",
      "nombre": "Juan",
      "antelacion": "6",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 4",
      "nombre": "Juan",
      "antelacion": "7",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 5",
      "nombre": "Juan",
      "antelacion": "29",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 6",
      "nombre": "Juan",
      "antelacion": "30",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 7",
      "nombre": "Juan",
      "antelacion": "a",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 8",
      "nombre": "Juan",
      "antelacion": "1.5",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    }
  ]
},
{
  "edad": "66",
  "casos": [
    {
      "titulo": "Caso 1",
      "nombre": "Juan",
      "antelacion": "-1",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 2",
      "nombre": "Juan",
      "antelacion": "0",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 3",
      "nombre": "Juan",
      "antelacion": "6",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 4",
      "nombre": "Juan",
      "antelacion": "7",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 5",
      "nombre": "Juan",
      "antelacion": "29",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 6",
      "nombre": "Juan",
      "antelacion": "30",
      "mensaje": "Pasajero registrado correctamente.",
      "porcentaje": "40"
    },
    {
      "titulo": "Caso 7",
      "nombre": "Juan",
      "antelacion": "a",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    },
    {
      "titulo": "Caso 8",
      "nombre": "Juan",
      "antelacion": "1.5",
      "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
      "porcentaje": "0"
    }
  ]
}];


  beforeEach(() => {
    cy.visit('localhost:3000'); 
  });

  testData.forEach((data) => {
      it(`Registrar un pasajero - ${data.casos.titulo}`, () => {
        // Simulando la entrada del nombre
        cy.get('#task-name').type(data.casos.nombre);
        // Simulando la entrada de la edad
        cy.get('#age').type(data.edad);
        // Simulando la entrada de la fecha (hoy o una futura)
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + parseInt(data.casos.antelacion));
        cy.get('#date').type(futureDate.toISOString().split('T')[0]);

        // Haciendo clic en el botón de enviar
        cy.get('button[type="submit"]').click();

        // Verificando que se muestra la alerta
        cy.get('[class="swal2-html-container"]').contains(data.casos.mensaje);

        if (data.casos.mensaje === "Pasajero registrado correctamente."){
        // Verifica que los campos se limpien después del envío
        cy.get('.swal2-confirm').click();
        cy.get('#task-name').should('have.value', '');
        cy.get('#age').should('have.value', '');
        cy.get('#date').should('have.value', ''); 
        cy.get('li.todo').last().find('button.btn__edit').click();
        // Verificando que se muestra la alerta del descuento
        cy.get('[class="swal2-html-container"]').contains(`El descuento es de: ${data.casos.porcentaje} %`)
        cy.get('.swal2-confirm').click();}
      });
    });

  });




