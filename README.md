# Project-Blank by Dan Hermes Reyes Osnaya

Este proyecto es un template base para empezar a diseñar de manera fácil, ya que cuenta con un archivo Gulp.js que nos permitirá compilar SASS, Comprimir Imágenes, Generar Avif y Webp de imágenes y tenemos un watch que todo el tiempo realiza cambios.

This project is a base template to start designing in an easy way, since it has a Gulp.js file that will allow us to compile SASS, Compress Images, Generate Avif and Webp images and we have a watch that makes changes all the time.

Solamente hacemos npm install  y listo.

We just do npm install and that's it.

```sh
npm install
```

## Comandos Gulp

Estos comandos nos van a permitir generar varias acciones.


| COMANDO          | ACCIÓN                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------- |
| gulp css         | Nos compila nuestros archivos SASS                                                            |
| gulp dev         | Se genera un watch que estara escuchando cambios en el SASS y en la carga de imagenes         |
| gulp minifyCSS   | Nos compila y minifica nuestros archivos SASS                                                 |
| gulp imagenes    | Nos comprime las imagenes                                                                     |
| gulp versionWebp | Nos genera imagenes WEBP en base a imagenes .png, .jpg, .jpeg y comprime aun mas las imagenes |
| gulp versionAvif | Nos genera imagenes Avif en base a imagenes .png, .jpg, .jpeg y comprime aun mas las imagenes |
| gulp             | Nos ejecuta todos los comandos anteriores, excepto minifyCSS                                  |

## Gulp commands

These commands will allow us to generate several actions.

| COMMAND          | ACTION                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------- |
| gulp css         | Compiles our SASS files.                                                                      |
| gulp dev         | A watch is generated that will be listening for changes in SASS and image loading.            |
| gulp minifyCSS   | It compiles and minifies our SASS files.                                                      |
| gulp imagenes    | Compress the images.                                                                          |
| gulp versionWebp | It generates WEBP images based on .png, .jpg, .jpeg images and further compresses the images. |
| gulp versionAvif | It generates Avif images based on .png, .jpg, .jpeg images and further compresses the images. |
| gulp             | We execute all the above commands, except minifyCSS                                           |
