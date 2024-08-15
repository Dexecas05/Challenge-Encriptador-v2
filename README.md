# Encriptador de Texto

![status](https://img.shields.io/badge/Estado-Completo-lightblue)
![version](https://img.shields.io/badge/Version-v2-yellow)

Este proyecto es un **Encriptador de Texto**, desarrollado como parte de un challenge propuesto por **Alura Latam** como parte del programa **Oracle Next Education (ONE)**.

## Versión

Este repositorio -como su nombre lo indica- corresponde a una segunda versión del encriptador solicitado. Se trata de una adaptación libre en cuanto a la estética pero que respeta la estructura, funcionalidades y responsividad requeridas.

## Descripción

El encriptador permite transformar un mensaje de texto plano aplicando un conjunto de reglas específicas para encriptarlo y desencriptarlo. La herramienta es ideal para ocultar mensajes sencillos y luego restaurarlos a su forma original o viceversa, es decir, descubrir mensajes encubiertos y, luego, ocultarlos nuevamente.

## Funcionalidades

- **Encriptado de texto**: Convierte el texto ingresado en una versión encriptada según las reglas establecidas más abajo.
- **Desencriptado de texto**: Restaura el texto encriptado a su forma original (o anterioir).
- **Test de entrada**: El programa solo acepta letras minúsculas y no permite el uso de acentos ni caracteres especiales, lo cual será notificado al usuario en caso de corresponder.
- **Copiar al portapapeles**: Opción para copiar el texto encriptado o desencriptado con un solo clic.
- **Reinicio automático**: Luego de copiar el resultado con el botón correspondiente, los campos se limpian de manera automática, sin necesidad de refrescar la página.

## Reglas para Encriptado/Desencriptado

Las "llaves" de encriptación utilizadas son las siguientes:

- La letra **"e"** se convierte en **"enter"**
- La letra **"i"** se convierte en **"imes"**
- La letra **"a"** se convierte en **"ai"**
- La letra **"o"** se convierte en **"ober"**
- La letra **"u"** se convierte en **"ufat"**

### Ejemplos:

- **Encriptado**:  
  - `"gato"` se convierte en `"gaitober"`
  - `"programa"` se convierte en `"primesgramai"`

- **Desencriptado**:  
  - `"gaitober"` se convierte en `"gato"`
  - `"primesgramai"` se convierte en `"programa"`
 

## Uso

1. Ingrese el texto que desea encriptar o desencriptar en el área de texto proporcionada.
2. Seleccione la opción deseada (Encriptar o Desencriptar).
3. El resultado aparecerá en pantalla, en el espacio contiguo, destinado a la salida de texto.
4. Use el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.
5. Reinicio automático.


## Autor

**Exequiel Castillo** - Desarrollador en formación candidato al programa Oracle Next Education (ONE).
