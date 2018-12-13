# Test 1

## Introduccion

Por cuestiones contables el cliente nos pide hacer un mini sistema donde pueda meter sus gastos diarios.

El cliente requiere ver sus historiales diarios, semanales y mensuales de los resultados.


## Instrucciones

Crear un proyecto pequeño que incluya un poco de todas las areas de desarrollo web.

### Backend

Crear una API rest full con los siguientes endpoints,

1. agregar gasto: 
    Endpoint POST /conta/gasto 
    data:  {  name: string, date: date(), monto: int }
    return OK/error 
    
2. editar gasto: 
    Endpoint PUT /conta/gasto/:id
    data:  { name: string, date: date(), monto: int }
    return OK/error 
    
3. delete gasto:
    Endpoint DELETE /conta/gasto/:id
    return OK/error 

4. Leer gastos
    Endpoint GET /conta/gastos/
    return [{ id, name, date, monto} ... {...} ]
    

## Front

Crear una vista usando BOOSTRAP y JS puro, AJAX o Angular 
*usar solo uno

1. agregar gasto: 
    Formulario con los datos a llenar
    data:  {  name: string, date: date(), monto: int }
    Alertas de OK or Error
    
2. editar gasto: 
    Formulario con los datos a llenar, mostrando los datos de base
    data:  { name: string, date: date(), monto: int }
    Alertas de OK or Error
    
3. Listar gastos
    Listar en una table todos los gastos en la ultima columna poner los botones de accion de EDITAR y BORRAR 
    
4. delete gasto:
    Al precionar borrar ese gasto de la vista SIN REFRESCAR (por eso el uso de JS)


## Edicion 2018
    Tener en cuenta que el proyecto se compilará y se adaptara para *ionic*


## Subir a este repositorio
    * IMPORTANTE Crear una nueva RAMA *
    ****** NO SUBIR EN MASTER **********

