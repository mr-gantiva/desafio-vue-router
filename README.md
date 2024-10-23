# Desafio Vue Router

Este proyecto es una aplicación web desarrollada con Vue.js que implementa enrutamiento utilizando Vue Router. El objetivo principal es mostrar una lista de productos y una página de contacto, con la capacidad de navegar entre las vistas de manera eficiente.

# Demo
Puedes ver una prueba de la aplcación [aquí](https://desafio-vue-router.netlify.app/)

## Características

- **Navegación**: Uso de Vue Router para navegar entre la página de inicio, la lista de productos y la página de contacto.
- **Componentización**: Componentes reutilizables como `Navbar`, `Footer`, `BotonVolver` y `ProductCard`.
- **Enrutamiento dinámico**: La página de productos recibe un array de objetos con la información de los productos y los renderiza dinámicamente.
- **Estilización**: Se utiliza Bootstrap para la creación de la interfaz y estilos personalizados en cada componente.
- **Lazy Loading**: El archivo `ContactView.vue` se carga de manera perezosa para optimizar el rendimiento.

## Estructura del Proyecto

El proyecto sigue una estructura típica de Vue, con los archivos organizados de la siguiente manera:
## Componentes

### 1. `App.vue`
Componente principal que incluye la barra de navegación, el footer y las vistas del router.

### 2. `ProductosView.vue`
Muestra una lista de productos renderizados a partir de un array de objetos.

### 3. `ContactView.vue`
Página de contacto simple con un botón para volver al inicio.

### 4. `BotonVolver.vue`
Botón personalizado que redirige al usuario a la página de inicio.

### 5. `ProductCard.vue`
Tarjeta de producto que muestra detalles como el título, descripción, precio y cantidad.

## Instalación y Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/desafio-vue-router.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta la aplicación en modo de desarrollo:
   ```bash
   npm run serve
   ```
4. Abre el navegador en http://localhost:8080 para ver la aplicación en acción.

## Dependencias
- Vue.js
- Vue Router
- Bootstrap
- Créditos
  
Proyecto desarrollado como parte de un desafío de aprendizaje en Vue.js.

## Licencia
Este proyecto está bajo la licencia MIT.
   

