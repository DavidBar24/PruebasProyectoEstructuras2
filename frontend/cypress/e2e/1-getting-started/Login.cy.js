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
    // Navegar a registro
    cy.visit(`${baseUrl}/`);
    cy.get('a.auth-login__link').click();
    cy.intercept('POST', `${apiUrl}/registro`).as('registerRequest');

    // Llenar formulario de registro
    cy.get('input[placeholder="Nombre"]').type('usuarioTest');
    cy.get('input[placeholder="Edad"]').type('30');
    cy.get('input[placeholder="Contraseña"]').type('passTest123');
    cy.get('button[type="submit"]').click();

    // Espera y guarda token en localStorage
    cy.wait('@registerRequest').then(({ response }) => {
      const token = response.body.token;
      expect(token).to.be.a('string');
      cy.window().then(win => {
        win.localStorage.setItem('token', token);
      });
    });
  });

  it('3. Login con el usuario creado', () => {
    // Asumiendo token ya en localStorage, visitar login de todos modos para refrescar UI
    cy.visit(`${baseUrl}/`);
    cy.intercept('POST', `${apiUrl}/login`).as('loginRequest');
    cy.get('input[placeholder="Nombre"]').type('usuarioTest');
    cy.get('input[placeholder="Contraseña"]').type('passTest123');
    cy.get('button[type="submit"]').click();
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    // Verificar token persiste
    cy.window().its('localStorage.token').should('be.a', 'string');
  });

  it('4. Registrar una mascota y verificar guardado', () => {
    // Visitar sección de veterinaria con token en storage
    cy.visit(`${baseUrl}/veterinaria`);

    // Abrir formulario de registrar mascota
    cy.get('a.vet-btn__container[href="/Registrar-Mascota"]').click();
    cy.url().should('include', '/Registrar-Mascota');

    // Interceptar la petición real
    cy.intercept('POST', `${apiUrl}/api/registrar-mascota`).as('petRequest');

    // Llenar datos de la mascota
    cy.get('form.form-mascota').within(() => {
      cy.get('input').eq(0).type('Perro');      // especie
      cy.get('input').eq(1).type('Labrador');   // raza
      cy.get('input').eq(2).type('Firulais');    // nombre
      cy.get('input').eq(3).type('5');           // edad
      cy.get('button.boton-registrar').click();
    });

    // Verificar respuesta y almacenamiento
    cy.wait('@petRequest').then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body).to.have.property('nombre', 'Firulais');
      expect(response.body).to.have.property('especie', 'Perro');
    });

    // Verificar notificación en UI
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Mascota registrada correctamente');
  });
});

