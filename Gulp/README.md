# Proyecto con Gulp

Este proyecto utiliza [Gulp](https://gulpjs.com/), un toolkit de JavaScript para automatizar tareas repetitivas en el desarrollo web. Gulp permite mejorar la productividad al encargarse de tareas como la compilación de estilos, optimización de imágenes, recarga del navegador, minificación de archivos, entre otras gracias a sus múltiples plugins.

## ¿Qué es Gulp?

[Gulp](https://gulpjs.com/) es un administrador de tareas basado en JavaScript que utiliza flujos (streams) para procesar archivos y realizar transformaciones. Utiliza un archivo de configuración (`gulpfile.js`) para definir las tareas a ejecutar.

## Estructura del Proyecto

```plaintext
├── src/                # Código fuente
│   ├── css/            # Archivos CSS 
│   ├── js/             # Archivos JavaScript
│   ├── images/         # Imágenes del proyecto
│   ├── sass/           # Archivos SCSS 
│   ├── index.html      # Archivo HTML              
├── dist/               # Archivos optimizados por Gulp
├── gulpfile.js         # Configuración de tareas Gulp
└── package.json        # Dependencias del proyecto
```

## Requisitos Previos

Para usar este proyecto necesitas:

1. **Node.js y npm**: Instala Node.js desde su [página oficial](https://nodejs.org/).
> [!NOTE]  
> Cuando se generó este proyecto se utilizó la versión v18.17.0 de Node
2. **Gulp CLI**: Instala Gulp globalmente con:
    ```bash
    npm install -g gulp-cli
    ```
3. **Dependencias del proyecto**: Instala las dependencias con:
    ```bash
    npm install
    ```

4. **Ejecutar gulp**:
    ```bash
    gulp
    ```

## Tareas Definidas en el Gulpfile

El archivo `gulpfile.js` incluye varias tareas para facilitar el flujo de trabajo. A continuación, se explica cada una:

### 1. `html`
Se encarga de copiar el archivo HTML a la ruta `./dist` y actualizar las rutas de las hojas de estilo y los scripts, ya que estarán fusionados.

- **htmlReplace**: Reemplaza los elementos que se hayan especificado en el html por una ruta diferente.

### 2. `css`
Compila archivos Sass (`.scss`) a CSS, concatena todos los ficheros css y los minifica. Después, genera un sourcemap en el mismo directorio.

- **sass**: Compila el archivo sass en css.
- **concat**: Concatena archivos.
- **minifyCss**: Minifica el CSS.
- **sourcemaps**: Genera el sourcemap.

### 3. `js`
Procesa los archivos JavaScript, concatenándolos en un único archivo (`scripts.js`), y luego lo minifica para reducir su tamaño.

- **concat**: Junta varios archivos JavaScript en un único archivo.
- **uglify**: Minifica el archivo resultante, eliminando espacios, comentarios y reduciendo el tamaño.


### 4. `images`
Optimiza las imágenes del proyecto reduciendo su tamaño sin perder calidad. Las imágenes optimizadas se guardan en `./dist/images`.

- **imagemin**: Comprime las imágenes para reducir su tamaño sin pérdida significativa de calidad.

### 5. `serve` 
Inicia un servidor de desarrollo local con sincronización automática, recargando el navegador al detectar cambios en los archivos fuente.

- **browserSync**: Sincroniza los cambios realizados en los archivos con el navegador en tiempo real.
- **gulp.watch**: Observa los cambios en HTML, CSS, JS e imágenes, ejecutando las tareas correspondientes de manera automática.


