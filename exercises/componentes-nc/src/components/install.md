
# INSTALACION

## TABLA DE CONTENIDO

### Descargar componentes

    - Descargar los componentes NC de la API y ubicarlos dentro del src de su proyecto

### Instalacion de dependencias

    - npm i styled-components
    - npm i @svgr/webpack

        Crear un archivo webpack.config.js y agregar el siguiente codigo.

            {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
            }
            
    - npm i react-router-dom