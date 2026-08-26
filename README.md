# Restful-Booker API Testing Suite 🔌

Este repositorio contiene una suite completa de pruebas funcionales, de integración y reglas de negocio para la API REST **Restful-Booker**, diseñada para validar flujos de autenticación, gestión del ciclo de vida de reservas (CRUD) y manejo de errores mediante scripts de automatización en **JavaScript**.


## Tecnologías y Herramientas 🛠️

- **API Tester:** Postman (Desktop Native Client)
- **Lenguaje de Scripting:** JavaScript (Postman Test Scripts & PM API)
- **Entorno de Datos:** Postman Environment Variables (Dynamic Request Chaining)
- **Formato de datos:** JSON


## Cobertura de Pruebas y Escenarios 🧪

Se diseñaron e implementaron escenarios de prueba automatizados secuenciales para verificar el correcto funcionamiento de los endpoints principales y sus reglas de negocio:

| # | Método | Endpoint | Escenario / Prueba | Validaciones Aplicadas (Test Scripts) |
| :---: | :---: | :--- | :--- | :--- |
| **01** | `POST` | `/auth` | Generación de token de autenticación | • Status Code `200 OK`<br>• Almacenamiento dinámico de `token` en variable de entorno. |
| **02** | `POST` | `/booking` | Creación de nueva reserva | • Status Code `200 OK`<br>• Captura dinámica de `booking_id`<br>• Validación de coincidencia en el nombre del cliente. |
| **03** | `GET` | `/booking/:id` | Consultar detalle de la reserva creada | • Status Code `200 OK`<br>• Verificación de persistencia de datos (`lastname`, `totalprice`). |
| **04** | `PUT` | `/booking/:id` | Actualización total de la reserva | • Status Code `200 OK`<br>• Autenticación vía Cookie Header (`token`)<br>• Verificación de actualización en base de datos. |
| **05** | `DELETE`| `/booking/:id` | Eliminación de la reserva | • Status Code `201 Created`<br>• Autenticación vía Cookie Header (`token`). |
| **06** | `GET` | `/booking/:id` | Negativo: Consultar reserva eliminada | • Status Code `404 Not Found`<br>• Validación de manejo de errores (Edge Case). |


## Ejecutar localmente 🚀

**1. Clonar el repositorio:**

```bash
   git clone https://github.com/Danywebx/RestfulBookerAPI.git
```
<br>

**2. Importar archivos en Postman:**
- Abre Postman Desktop.
- Haz clic en el botón **Import** (esquina superior izquierda).
- Selecciona el archivo `Restful_Booker_API_Suite|.postman_collection.json` de la carpeta `collections/`.
- Selecciona el archivo `Restful_Booker_QA.postman_environment.json` de la carpeta `environments/`.

**3. Activar el Entorno:**
- En la esquina superior derecha de Postman, abre el menú desplegable de entornos y selecciona **Restful Booker QA**.

**4. Ejecutar la Suite (Runner):**
- Selecciona la colección **Restful Booker API Suite**.
- Haz clic en **Run** para ejecutar las 6 peticiones en secuencia automática y verificar los resultados en verde.


## ✒️ Autores

Proyecto desarrollado por como parte de mi portafolio técnico de **Quality Assurance (API Testing)**.

- Daniel/[@danywebx](https://www.github.com/danywebx)


## 📄 Licencia

Este proyecto tiene fines estrictamente académicos, de práctica técnica y demostración de habilidades QA.
