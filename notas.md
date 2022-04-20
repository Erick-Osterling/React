# react
curso de react

Clase 1: 


segunda clase: 

SPA => single page application. Una sola página y todo va a adentro.

propio: Se podría decir que el SPA va con React y su virtual DOM.

-Virtual DOM


-React Fiber: Lo que actualiza el virtual DOM es el Fiber Tree. Es la arquitectura del DOM. Es la tecnología detras del funcionamiento del virtual DOM
Es la arquitectura del DOM o virtual DOM.

-Reconciliación:


para instalar el react, en la carpeta poner:
npx create-react-app@latest nombre-app

luego, para correr react hay que hacer: 
npm start 
eso abritá un navegador con un host 3000.

para cortar la ejecución: ctrl + c

clase 2: 

jsx es la sintaxis que maneja react
en js hay una funcion que retorna un html
las imagenes se tienen que importar primero (a una variable) y luego hacer referencia a esa variable en el HTML dentro del return
los tags no pueden no cerrarse. 

dentro del return, si ponemos doble llave, podemos escribir js. por ejemplo condiciones. 

las imagenes, no se pueden linkear. se deben importar primer y luego usar la variable
la palabra class no se puede usar ya que en js es palabra revervada. Hay que usar className
las tag siempre deben de cerrar. Tener cuidado con tags de img. 

cuando se crea un nuevo componente (con extencion jsx) hay que escribir rfc o rafce (extension de react es necesaria)

clase 4:
dos tipos de componentes: componentes en si, y patrones
de los componentes en si, hay basado en clases y en funciones. Los de clase ya no se usan
los que se usan son los componentes basados en funciones. 
ambos pueden recibir propuedas (propiedades a una funcion)
los componentes siempre tienen que empezar con mayuscula

truquito. Cuando usas un componente que no esta definido, apretas ctrl + space al final del tag y te dará la opción de hacer el import

a los componentes se les hace diferentes a partir de sus propiedades en la funcion en que son definidos. 

los componentes pueden recibir como propiedad "children", pero solo los que tienen apertura y cierre. 