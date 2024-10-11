describe('Registro de pasajeros', () => {

let testData = [
    {
        "titulo": "Caso 1",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "-1",
        "mensaje": "La edad debe ser un número entero no negativo. La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 2",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "0",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 3",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "6",
        "mensaje": "La edad debe ser un número entero no negativo.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 4",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "7",
        "mensaje": "La edad debe ser un número entero no negativo.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 5",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "29",
        "mensaje": "La edad debe ser un número entero no negativo.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 6",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "30",
        "mensaje": "La edad debe ser un número entero no negativo.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 7",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "a",
        "mensaje": "La edad debe ser un número entero no negativo. La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 8",
        "nombre": "Juan",
        "edad": "-1",
        "antelacion": "1.5",
        "mensaje": "La edad debe ser un número entero no negativo.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 9",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "-1",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 10",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "0",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 11",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "6",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 12",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "7",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 13",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "29",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 14",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "30",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 15",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "a",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 16",
        "nombre": "Juan",
        "edad": "0",
        "antelacion": "1.5",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 17",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "-1",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 18",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "0",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 19",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "6",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 20",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "7",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 21",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "29",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 22",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "30",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "30"
    },
    {
        "titulo": "Caso 23",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "a",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 24",
        "nombre": "Juan",
        "edad": "24",
        "antelacion": "1.5",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 25",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "-1",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 26",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "0",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 27",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "6",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 28",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "7",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 29",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "29",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "15"
    },
    {
        "titulo": "Caso 30",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "30",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "15"
    },
    {
        "titulo": "Caso 31",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "a",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 32",
        "nombre": "Juan",
        "edad": "25",
        "antelacion": "1.5",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 33",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "-1",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 34",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "0",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 35",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "6",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 36",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "7",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 37",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "29",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 38",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "30",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 39",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "a",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 40",
        "nombre": "Juan",
        "edad": "65",
        "antelacion": "1.5",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 41",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "-1",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 42",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "0",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 43",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "6",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 44",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "7",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 45",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "29",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 46",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "30",
        "mensaje": "Pasajero registrado correctamente.",
        "porcentaje": "40"
    },
    {
        "titulo": "Caso 47",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "a",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    },
    {
        "titulo": "Caso 48",
        "nombre": "Juan",
        "edad": "66",
        "antelacion": "1.5",
        "mensaje": "La fecha de viaje no puede ser anterior a hoy.",
        "porcentaje": "0"
    }
]
;


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
        // Suponiendo que data.casos.mensaje y data.casos.antelacion están definidos
        if (!isNaN(data.antelacion)) {
            const antelacionValue = parseFloat(data.antelacion);
            
            if (Number.isInteger(antelacionValue)) {
                futureDate.setDate(futureDate.getDate() + antelacionValue);
            } else {
                // Si no es un entero (es decimal o flotante), restar 3
                futureDate.setDate(futureDate.getDate() - 3);
            }
        } else {
            // Si no es un número, también restar 3
            futureDate.setDate(futureDate.getDate() - 3);
        }

        
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
        cy.get('#date').should('have.value', ''); 
        cy.get('li.todo').last().find('button.btn__edit').click();
        // Verificando que se muestra la alerta del descuento
        cy.get('[class="swal2-html-container"]').contains(`El descuento es de: ${data.porcentaje} %`)
        cy.get('.swal2-confirm').click();}
      });
    });

  });




