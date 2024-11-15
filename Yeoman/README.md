# Proyecto Web Generado con Yeoman

Este proyecto ha sido generado utilizando [Yeoman](http://yeoman.io/), un generador de proyectos que configura un entorno de desarrollo con herramientas modernas como Gulp, Sass, Babel y más. El generador utilizado es `generator-webapp`, que proporciona una estructura básica para aplicaciones web.

## Introducción a Yeoman

[Yeoman](http://yeoman.io/) es una herramienta para automatizar la creación de proyectos de software. Facilita la configuración de un entorno de desarrollo completo, creando la estructura del proyecto y configurando herramientas como Gulp, Webpack, Sass, y Babel para que los desarrolladores puedan centrarse en escribir código sin preocuparse por la configuración.

### Comandos Iniciales para Crear el Proyecto

Para generar un nuevo proyecto con Yeoman, debes seguir estos pasos:

1. Instalar Yeoman y el generador de webapp:
    ```bash
    npm install -g yo generator-webapp
    ```

2. Crear una nueva carpeta para el proyecto:
    ```bash
    mkdir nuevoProyecto
    cd nuevoProyecto
    ```

3. Generar el proyecto:
    ```bash
    yo webapp
    ```
Si el paso 3 da error, encontré esta solución:

```bash
npm install -g yo@4.3.1 generator-generator
```

Esto creará un nuevo proyecto con una estructura de carpetas básica y un conjunto de herramientas configuradas, incluyendo un archivo `gulpfile.js` con tareas definidas para gestionar el flujo de trabajo.

## Tareas Definidas en el `gulpfile.js`

El archivo `gulpfile.js` generado por Yeoman tiene varias tareas definidas para gestionar el flujo de trabajo de una aplicación web. A continuación, te explico las tareas que realiza:

### 1. `styles`
Compila los archivos Sass (.scss) a CSS y genera los archivos de salida en una carpeta temporal (`.tmp/styles`).

- **Sass**: Convierte los archivos `.scss` a CSS.
- **Autoprefixer**: Añade los prefijos necesarios a las propiedades CSS para asegurar la compatibilidad con los navegadores.
- **Sourcemaps**: Genera los archivos `.map`, solo en el entorno de desarrollo.

### 2. `scripts`
Transpila el código JavaScript usando Babel. El código procesado se guarda en una carpeta temporal (`.tmp/scripts`).

- **Babel**: Transpila el código JavaScript ES6 (y superior) para hacerlo compatible con versiones más antiguas de los navegadores.

### 3. `modernizr`
Genera un archivo `modernizr.js` basado en la configuración del archivo `modernizr.json`. 

- **Modernizr**: Detecta las características soportadas por el navegador y genera un script que las incluye.

### 4. `lintBase` , `lint` y `lintTest`
Ejecutan ESLint para verificar la calidad del código JavaScript en busca de errores o malas prácticas. La tarea `lintBase` sirve como base para las otras 2 y `lintTest` e ejecta sobre los archivos de test.

- **ESLint**: Linter para JavaScript para encontrar y solucionar problemas en el código, como errores de sintaxis.

### 5. `html`
Minifica los archivos HTML. Se utiliza `Useref` para identificar los archivos CSS y JS y optimizarlos. Los archivos resultantes se colocan en la carpeta `dist`.

- **Useref**: Agrupa y minifica los archivos CSS y JS.
- **Minificación de HTML/CSS/JS**: Elimina los espacios en blanco, los comentarios y realiza otras optimizaciones para reducir el tamaño de los archivos.

### 6. `images`
Minimiza las imágenes en el proyecto usando `Imagemin`, reduce su tamaño sin perder calidad. Se copian a la carpeta `dist/images`.

- **Imagemin**: Plugin que sirve para comprimir imágenes y reducir su tamaño sin perder la calidad.

### 7. `fonts`
Copia los archivos de fuentes a la carpeta `dist/fonts` (en desarrollo a `.tmp/fonts` ). 

### 8. `extras`
Copia otros archivos del proyecto que no sean HTML a la carpeta `dist`.

### 9. `clean`
Elimina las carpetas temporales (`.tmp`) y las generadas por gulp (`dist`) para que la siguiente compilación sea limpia.

### 10. `measureSize`
Calcula el tamaño de los archivos generados en la carpeta `dist`, mostrando también el tamaño comprimido con gzip.

### 11. `build`
Ejecuta todas las tareas necesarias para la construcción del proyecto en un solo comando.

### 12. `startAppServer`, `startTestServer`, `startDistServer`
Estas tareas inician servidores de desarrollo según el entorno:

- **startAppServer**: Inicia un servidor en el entorno de desarrollo (`.tmp` y `app`).
- **startTestServer**: Inicia un servidor para pruebas.
- **startDistServer**: Inicia un servidor del contenido optimizado (`dist`).


---

## Resumen

El archivo `gulpfile.js` está configurado para realizar tareas de:

- Compilación y procesamiento de estilos (Sass a CSS).
- Transpilación y optimización de scripts.
- Generación de características del navegador con Modernizr.
- Calidad de código con ESLint.
- Minificación de HTML, CSS y JS.
- Optimización de imágenes.
- Inicia servidores de desarrollo, pruebas o producción.
- Medición del tamaño de los archivos.
