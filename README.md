# Pizzería Mamma Mía

## Descripción

Sitio de Pizzería Mamma Mía el cual cuenta con un catalogo de sus productos donde se puede ver el detalle de sus preparaciones y se pueden agregar al carro. Tambien existe un apartado de promociones donde a futuro se podrán colocar las promociones vigentes.

## Estado del Proyecto

:white_check_mark:Finalizado:white_check_mark:

:eight_spoked_asterisk:A futuro se implementará versión Mobile:eight_spoked_asterisk:

## Funcionalidades

 - Agregar a Carrito: Presionando el botón se puede agregar la pizza al carrito, esta funcionalidad también esta presente en la vista del carrito en el símbolo "+".
 - Descripción: Presionando el botón se abre modal con la descripción de la pizza y la posibilidad de agregarla al carrito desde un botón. Este modal también tiene un botón de cerrar y se puede cerrar haciendo click fuera del modal.
 - Carrousel: Tiene un carrousel en el home donde se pueden agregar las imágenes que desee el cliente.
 - Carrito: El carrito en sí tiene varias funcionalidades
		 - Se muestra el detalle de las pizzas agregadas al carrito con la fotografía, cantidad, valor unitario y subtotal.
		 - Al presionar el botón "+" al costado de la cantidad agrega automáticamente una pizza de esa variedad al carrito.
		 - Al presionar el botón "-" al costado de la cantidad elimina automáticamente una pizza de esa variedad al carrito.
		 - El subtotal por cada variedad de pizza es calculado automáticamente.
		 - El botón vaciar carrito vacía todo lo que el carrito tenga.
		 - La cantidad total y el Total de la compra se actualiza automáticamente
 - En caso de no existir pizzas en el carrito muestra un mensaje invitando a agregar pizzas y con un botón que redirígeme al usuario al home.

## Tecnologías utilizadas

 -  React
-  Material UI
- Material Icons
-   React - router - dom
-   Hooks useState, useNavigate, useContext
-   CSS3
-   Consumo de API con Fetch y Async - Await

