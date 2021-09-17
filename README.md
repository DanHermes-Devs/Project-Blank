# Project-Blank by Dan Hermes Reyes Osnaya

Este proyecto es un template base para empezar a diseñar de manera fácil, ya que cuenta con un archivo Gulp.js que nos permitirá compilar SASS, Comprimir Imágenes, Generar Avif y Webp de imágenes y tenemos un watch que todo el tiempo realiza cambios

Solamente hacemos npm install  y listo...

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
