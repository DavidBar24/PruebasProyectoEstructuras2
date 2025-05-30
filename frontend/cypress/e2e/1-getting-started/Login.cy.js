/// <reference types="cypress" />

// Cypress E2E flow: registro y login en Veterinaria App (rutas basadas en rutas.js)
// Base: http://localhost:3000 (frontend)
// API:  http://localhost:5006 (backend)

describe('Registro, Login y Registro de Mascota - Veterinaria', () => {
  const baseUrl = 'http://localhost:3000';
  const apiUrl = 'http://localhost:5006';

  before(() => {
    cy.clearLocalStorage();
  });

    it('1. Verificar pantalla de inicio de sesión', () => {
        cy.visit(`${baseUrl}/`);
        cy.get('h2.auth-login__title')
        .should('be.visible')
        .and('contain', 'Iniciar Sesión');
    });

        it('2. Registro de usuario y conservación de token', () => {
        cy.visit(`${baseUrl}/`);
        cy.get('a.auth-login__link').click();

        cy.get('input[placeholder="Nombre"]').type('usuarioTest');
        cy.get('input[placeholder="Edad"]').type('30');
        cy.get('input[placeholder="Contraseña"]').type('passTest123');
        cy.get('button[type="submit"]').click();
        cy.window().its('localStorage.token').should('exist');
        });

        it('3. Login con el usuario creado', () => {
        cy.visit(`${baseUrl}/`);
        
        cy.get('input[placeholder="Nombre"]').type('usuarioTest');
        cy.get('input[placeholder="Contraseña"]').type('passTest123');
        cy.get('button[type="submit"]').click();
        cy.window().its('localStorage.token').should('be.a', 'string');
        });

        it('4. Registrar una mascota y verificar guardado', () => {
        cy.visit(`${baseUrl}/veterinaria`);
        cy.get('a.vet-btn__container[href="/Registrar-Mascota"]').click();

        cy.get('form.form-mascota').within(() => {
            cy.get('input').eq(0).type('Perro');
            cy.get('input').eq(1).type('Labrador');
            cy.get('input').eq(2).type('Firulais');
            cy.get('input').eq(3).type('5');
            cy.get('button.boton-registrar').click();
        });
    });
        it('5. Interactuar con el Creador de Perfiles Veterinarios', () => {
        // 1. Navegar al creador de perfiles desde la página principal
        cy.visit(`${baseUrl}/veterinaria`);
        cy.get('a[href="/crear-perfil"]').click();
        cy.url().should('include', '/crear-perfil');

        // 2. Ingresar y guardar nombre de perfil
        cy.get('input[type="text"]').first().type('Perfil Premium Completo');
        cy.contains('button', 'Guardar Nombre').click();

        // 3. Seleccionar todos los servicios disponibles
        cy.contains('.servicios-list button', 'Chequeo Anual').click();
        cy.contains('.servicios-list button', 'Plan Integral').click();
        cy.contains('.servicios-list button', 'Emergencia 24/7').click();

        // 4. Seleccionar todos los beneficios
        cy.contains('.beneficios-list button', 'Descuento en Farmacia').click();
        cy.contains('.beneficios-list button', 'Guardería Gratis').click();
        cy.contains('.beneficios-list button', 'Asistencia Telefónica').click();

        // 5. Verificar resumen
        cy.get('.resumen-perfil').within(() => {
        cy.contains('Servicios:').should('be.visible');
        cy.contains('Beneficios:').should('be.visible');
        cy.contains('Costo Total:').should('be.visible');
        });

        // 6. Reiniciar perfil
        cy.contains('button', 'Reiniciar Perfil').click();

        // 7. Verificar que se reinició
        cy.contains('Resumen de tu Perfil:').should('be.visible');
        cy.contains('Costo Total: $0/mes').should('be.visible');

        // 8. Volver a la página principal
        cy.visit(`${baseUrl}/veterinaria`);
        cy.url().should('eq', `${baseUrl}/veterinaria`);
  });
});
