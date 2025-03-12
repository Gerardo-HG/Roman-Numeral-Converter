# Roman Numeral Converter

Este proyecto forma parte de la **Certificación de JavaScript** de [freeCodeCamp](https://www.freecodecamp.org/).  
Consiste en una aplicación web sencilla que convierte números decimales en números romanos.

## Descripción

- El usuario ingresa un número en un campo de texto.
- La aplicación valida el número para asegurarse de que sea un entero entre **1 y 3999**.
- Si es válido, se muestra el equivalente en **números romanos**.  
- Si no es válido, se muestra un **mensaje de error**.

## Características

- **Conversión eficiente**: Usa un mapa (arreglo de objetos) para convertir cada parte del número.
- **Validación robusta**: Comprueba que el valor sea un número y que esté dentro del rango permitido.
- **Diseño minimalista**: Interfaz simple con HTML y CSS, inspirada en la maqueta de freeCodeCamp.

## Tecnologías utilizadas

- **HTML5**: Estructura del formulario y layout básico.
- **CSS3**: Estilos para el fondo, botones e input.
- **JavaScript**: Lógica de validación y conversión (en `script.js`).

## Estructura de archivos

```plaintext
.
├── index.html    # Estructura principal
├── styles.css    # Estilos de la página
└── script.js     # Lógica de conversión y validación
