# 1. Desarrollo

## 1.1 Configuración del entorno de desarrollo
1. **Plataforma de programación**: Flutter, ideal para desarrollo cruzado en Android e iOS.
2. **Entorno de Desarrollo Integrado (IDE)**: VSCode equipado con plugins de Flutter y Dart para optimizar el flujo de trabajo.
3. **Control de versiones y gestión de incidencias**: GitHub, utilizado tanto para el control de versiones como para el seguimiento de incidencias.

4. **Lenguaje de programación**: Dart, usado específicamente para Flutter.
5. **Base de datos**: MySQL, integrada para gestionar los datos de la aplicación.
6. **APIs y servicios externos**: Google Maps para funcionalidades de localización.
7. **Interfaces de usuario y accesibilidad**:
   - **Material Design** para Android, implementado a través de los componentes de Flutter.
   - **Accesibilidad con TalkBack** para asegurar que la aplicación sea accesible para personas con visión reducida.
   - **Google Maps SDK**: Implementado para la geolocalización y visualización de mapas.

## 1.2 Implementación de funcionalidades
1. **Estructura de la aplicación**: Desarrolla una arquitectura básica que incluya navegación, manejo de estados y lógica principal.
2. **Desarrollo de funcionalidades clave**:
   - **Navegación y localización en interiores**: Utiliza Google Maps y tecnologías de localización en interiores disponibles para facilitar la orientación.
   - **Reconocimiento de imágenes para señalización y obstáculos**: Trabaja en implementar un sistema que pueda identificar señales y obstáculos utilizando APIs de reconocimiento de imágenes.
   - **Interfaz de usuario hablada y táctil**: Crea una interfaz operable mediante gestos táctiles y comandos de voz, compatible con TalkBack.

3. **Desarrollo rápido y pruebas constantes**:
   - Realiza iteraciones cortas de desarrollo y prueba durante la hackathon, asegurándote de que cada funcionalidad se pruebe inmediatamente después de su implementación.

## 1.3 Pruebas unitarias y de integración
1. **Herramientas de pruebas en Flutter y Dart**:
   - Configura pruebas automáticas utilizando los frameworks proporcionados por Flutter, como parte de un proceso de desarrollo continuo.
   - Realiza pruebas de accesibilidad usando las herramientas de Flutter para comprobar la compatibilidad con TalkBack.

2. **Integración continua**:
   - Aunque se trata de una hackathon, es útil configurar un sistema básico de CI/CD con GitHub Actions para ejecutar pruebas automáticamente después de cada commit.
