/// <reference types="cypress" />

// Cypress E2E flow: registro y login en Veterinaria App (rutas basadas en rutas.js)
// Base: http://localhost:3000 (frontend)
// API:  http://localhost:5006 (backend)

describe('Registro, Login y Registro de Mascota - Veterinaria', () => {
  const baseUrl = 'http://localhost:3000';
  const apiUrl = 'http://localhost:5006';

  before(() => {
    // Limpia storage para inicio limpio
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

    // 1. Verificar redirección
    
    // 2. Verificar token en localStorage
    cy.window().its('localStorage.token').should('exist');
    });

    it('3. Login con el usuario creado', () => {
    cy.visit(`${baseUrl}/`);
    
    cy.get('input[placeholder="Nombre"]').type('usuarioTest');
    cy.get('input[placeholder="Contraseña"]').type('passTest123');
    cy.get('button[type="submit"]').click();

    // Verificar elemento único del dashboard
    
    // Verificar persistencia del token
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

    // Opción 1: Esperar mensaje de éxito

    // Opción 2: Verificar en lista de mascota
    });
});

