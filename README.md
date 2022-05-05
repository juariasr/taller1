# Express JS API : Taller 1

## Objetivos

Crear un API utilizando Node JS y Express JS

## Descripción

Crear un API pública que permita a
los usuarios administrar las Tareas (tasks) personales, este debe permitir las
siguientes operaciones:

- Agregar
- Listar
- Editar
- Eliminar

Con los siguientes campos:

- Descripción de la tarea (description) (Texto)

- Autor de la tarea (author) (Texto, por ahora)

- Fecha de creación (createdAt) (Fecha y hora, calculada a la hora de crear el
  contenido)

- Fecha de edición (updatedAt) (Fecha y hora, actualizada a la hora de editar el
  contenido)

Nota: La información por el momento se guardará en memoria para propósitos de
demostración del proyecto.

## Install

`npm install`

Copy `.env.example` to `.env` and set your environment variables

## Initialization

`npm start`

## Endpoints

### Get Tasks

- Method: Get
- Route: http://localhost:3000/api/tasks
- Request: Empty
- Response
  ```json
  {
    "data": [
      {
        "id": 1,
        "description": "Otra description",
        "author": "Ulises Perez",
        "createdAt": "2022-04-27T22:32:40.580Z",
        "updatedAt": "2022-04-27T22:32:40.580Z"
      }
    ]
  }
  ```

### Post Tasks

- Method: Post
- Route: http://localhost:3000/api/tasks
- Request

  ```json
  {
    "description": "Test Description",
    "author": "Test Author"
  }
  ```

- Response
  ```json
  {
    "data": {
      "id": 1,
      "description": "Test Description",
      "author": "Test Author",
      "createdAt": "2022-04-27T22:55:51.320Z",
      "updatedAt": "2022-04-27T22:55:51.320Z"
    }
  }
  ```

### Update Task by Id

- Method: PUT
- Route: http://localhost:3000/api/tasks/{id}
- Request

```json
  {    
    "description": "Test Description",
    "author": "Test Author"
  }
```

- Response task updated

 ```json
  {
    "data": [
      {
        "id": 1,
        "description": "Otra description",
        "author": "Ulises Perez",
        "createdAt": "2022-04-27T22:32:40.580Z",
        "updatedAt": "2022-04-27T22:32:40.580Z"
      }
    ]
  }
  ```

### Get ID Tasks

- Method: Get
- Route: http://localhost:3000/api/tasks/{id}
- Request: Empty
- Response

  ```json
  {
    "data": [
      {
        "id": 1,
        "description": "Otra description",
        "author": "Ulises Perez",
        "createdAt": "2022-04-27T22:32:40.580Z",
        "updatedAt": "2022-04-27T22:32:40.580Z"
      }
    ]
  }
  ```

### Delete Tasks

- Method: Delete
- Route: http://localhost:3000/api/tasks/{id}
- Request: Empty
- Response Task Deleted
  ```json
  {
    "data": [
      {
        "id": 1,
        "description": "Otra description",
        "author": "Ulises Perez",
        "createdAt": "2022-04-27T22:32:40.580Z",
        "updatedAt": "2022-04-27T22:32:40.580Z"
      }
    ]
  }
  ```
