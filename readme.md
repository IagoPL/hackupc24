# Documentación de Proyecto: Guía Asistida para Viajeros Ciegos

## 1. Introducción

### 1.1 Propósito
El objetivo de esta aplicación es ofrecer una herramienta de asistencia integral para personas ciegas, facilitando su navegación por aeropuertos y estaciones de transporte público como AVE, metro y rodalies. La aplicación se propone utilizar tecnologías avanzadas de localización, reconocimiento de imágenes y feedback auditivo para mejorar la autonomía y seguridad de los usuarios durante sus viajes.

### 1.2 Alcance
La aplicación proporcionará acceso en tiempo real a información de vuelos y transporte, navegación asistida en interiores mediante un modelo 3D, y reconocimiento de objetos a través de la cámara del dispositivo móvil. Además, la interfaz será completamente accesible, usando comandos de voz y respuestas táctiles para facilitar su uso sin necesidad de interacción visual.

### 1.3 Definiciones, Acrónimos y Abreviaturas
- **GPS**: Sistema de Posicionamiento Global, tecnología que permite determinar la ubicación geográfica de un objeto.
- **API**: Interfaz de Programación de Aplicaciones, conjunto de rutinas que provee acceso a funciones de un determinado software.
- **AVE**: Alta Velocidad Española, servicio de trenes de alta velocidad en España.
- **Rodalies**: Red de trenes de cercanías en Cataluña, España.

## 2. Descripción General

### 2.1 Perspectiva del Producto
Este producto no solo es una herramienta de asistencia para la navegación en aeropuertos, sino que también es adaptable a diferentes sistemas de transporte público, proporcionando una experiencia de viaje cohesiva y accesible para personas con discapacidad visual.

### 2.2 Funciones del Producto
- **Notificaciones Auditivas**: Información sobre horarios de vuelo, cambios en la puerta de embarque, y alertas de última hora, entregadas a través de audio.
- **Navegación Asistida por Voz y Táctil**: Utilización de un modelo 3D para guiar a los usuarios por el aeropuerto o estación de tren, utilizando señales auditivas y vibraciones.
- **Reconocimiento de Imágenes**: Capacidades de la cámara para detectar y notificar sobre señaléticas y obstáculos en el camino.
- **Comandos de Voz**: Interacción completa a través de comandos de voz, permitiendo a los usuarios operar la aplicación sin necesidad de visualizar la interfaz.

### 2.3 Usuarios y Características del Usuario
Los usuarios principales son personas ciegas o con visibilidad reducida. La aplicación está diseñada para satisfacer sus necesidades específicas de movilidad y orientación en espacios grandes y complejos, proporcionando información y guía continua.

### 2.4 Restricciones
Dependencia de la conectividad a internet para actualizar información de vuelos y transporte, requerimientos de hardware como GPS y cámara para el funcionamiento pleno de las funcionalidades de navegación y reconocimiento de objetos, y la necesidad de integración con diferentes APIs y sistemas de datos en tiempo real.

## 3. Requisitos Específicos

### 3.1 Interfaces Externas
- **APIs de Aerolíneas y Transporte**: Para recibir datos actualizados de vuelos y horarios de trenes, puertas de embarque, y otros cambios relevantes.
- **Sensores y Hardware del Dispositivo**: Utilización del GPS y cámara para localización y análisis visual, respectivamente.

### 3.2 Funciones
- **Obtener y Vocalizar Información de Vuelo**: Acceso a datos en tiempo real y su presentación en forma audible.
- **Guía de Navegación**: Algoritmos de localización que trabajan con el modelo 3D para guiar a los usuarios de forma efectiva y segura.
- **Detección y Notificación de Obstáculos**: Uso de la cámara para identificar obstáculos físicos y alertar al usuario a través de audio y vibración.

### 3.3 Rendimiento
- **Respuesta en Tiempo Real**: Capacidad para procesar datos y responder a consultas en menos de 2 segundos.
-

 **Alta Precisión en Localización y Reconocimiento de Imágenes**: Garantizar la fiabilidad en la navegación y en la identificación de elementos relevantes del entorno.

### 3.4 Atributos del Sistema
- **Accesibilidad**: Prioridad en la creación de una interfaz y experiencias de usuario accesibles mediante sonido y tacto.
- **Portabilidad**: Funcionalidad en dispositivos iOS y Android.
- **Seguridad**: Implementación de medidas de seguridad para proteger la información personal de los usuarios conforme a la legislación vigente.




# Project Documentation: Assisted Guide for Blind Travelers

## 1. Introduction

### 1.1 Purpose
The aim of this application is to provide a comprehensive assistance tool for blind individuals, facilitating their navigation through airports and public transportation stations such as AVE, metro, and rodalies. The application intends to use advanced localization technologies, image recognition, and auditory feedback to enhance the autonomy and safety of users during their travels.

### 1.2 Scope
The application will provide real-time access to flight and transportation information, assisted navigation using a 3D model, and object recognition through the mobile device's camera. Additionally, the interface will be fully accessible, utilizing voice commands and tactile responses to facilitate its use without visual interaction.

### 1.3 Definitions, Acronyms, and Abbreviations
- **GPS**: Global Positioning System, a technology that enables the geographical location of an object to be determined.
- **API**: Application Programming Interface, a set of routines providing access to the features of a software.
- **AVE**: Alta Velocidad Española, high-speed train services in Spain.
- **Rodalies**: Network of commuter and regional trains in Catalonia, Spain.

## 2. General Description

### 2.1 Product Perspective
This product is not only an assistance tool for navigating airports but is also adaptable to different public transportation systems, providing a cohesive and accessible travel experience for visually impaired persons.

### 2.2 Product Features
- **Auditory Notifications**: Information about flight schedules, gate changes, and last-minute alerts delivered through audio.
- **Voice and Tactile Assisted Navigation**: Use of a 3D model to guide users through the airport or train station, using auditory signals and vibrations.
- **Image Recognition**: Camera capabilities to detect and notify about signage and obstacles in the path.
- **Voice Commands**: Full interaction through voice commands, allowing users to operate the application without needing to view the interface.

### 2.3 Users and User Characteristics
The primary users are blind or visually impaired individuals. The application is designed to meet their specific mobility and orientation needs in large and complex spaces, providing continuous information and guidance.

### 2.4 Constraints
Dependence on internet connectivity to update flight and transportation information, hardware requirements such as GPS and camera for full functionality of navigation and object recognition features, and the need to integrate with different APIs and real-time data systems.

## 3. Specific Requirements

### 3.1 External Interfaces
- **Airlines and Transportation APIs**: To receive updated data on flights and train schedules, boarding gates, and other relevant changes.
- **Device Sensors and Hardware**: Use of GPS and camera for location and visual analysis, respectively.

### 3.2 Functions
- **Retrieve and Vocalize Flight Information**: Access to real-time data and its presentation in an audible form.
- **Navigation Guidance**: Localization algorithms that work with the 3D model to guide users effectively and safely.
- **Obstacle Detection and Notification**: Use of the camera to identify physical obstacles and alert the user through audio and vibration.

### 3.3 Performance
- **Real-Time Response**: Ability to process data and respond to queries in less than 2 seconds.
- **High Accuracy in Location and Image Recognition**: Ensuring reliability in navigation and in identifying relevant environmental elements.

### 3.4 System Attributes
- **Accessibility**: Priority in creating an interface and user experiences accessible through sound and touch.
- **Portability**: Functionality on iOS and Android devices.
- **Security**: Implementation of security measures to protect users' personal information in accordance with current legislation.
