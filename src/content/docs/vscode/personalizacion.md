---
title: Personalización de VSCode
description: Esta es una página en mi sitio impulsado por Starlight
---
# Personalización de VSCode
## Fuentes
[Cascadia Code](https://pages.github.com/)
### 1. Añadir fuente al SO
   - En Linux KDE: 
     - Descarga la fuente y descomprime.
     - Abre **KDE Font Management**
       - **Settings > Font Management**
     - En la ventana de **Font Management** clica en **Install from file...** y selecciona las fuentes `ttf variable` (dentro de la carpeta **ttf** seleccionar todas las fuentes menos la carpeta **static**).
   - En linea de comandos:
     - Descarga la fuente y descomprime.
     - Crea un nuevo directorio en el **system fonts directory** (`/usr/local/share/fonts/`) para la nueva familia de fuentes y copia la fuente descargada.
     ```bash
      […]$ sudo mkdir -p /usr/local/share/fonts/cascadia
      […]$ sudo cp ~/Downloads/cascadia.ttf /usr/local/share/fonts/cascadia/
     ``` 

     - Actualiza el "font cache"
     ```bash
      […]$ sudo fc-cache -v
     ```


     :::note
     En fedora es necesario actualizar permisos y SELinux
     ```bash
      […]$ sudo chown -R root: /usr/local/share/fonts/cascadia
      […]$ sudo chmod 644 /usr/local/share/fonts/cascadia/*
      […]$ sudo restorecon -vFr /usr/local/share/fonts/cascadia

     ```

     :::
     :::note
     Diferencias entre directorios de fuentes en Ubuntu:
     
     ```sh
      /usr/share/fonts
     ```
      Este directorio es parte del sistema de archivos principal, gestionado por el administrador de paquetes del sistema (como apt). Las fuentes instaladas aquí generalmente provienen de paquetes oficiales de Ubuntu o software que instala fuentes como parte de su instalación. Cualquier actualización del sistema o de los paquetes puede modificar, añadir o eliminar fuentes en este directorio. Es el directorio estándar para fuentes que están disponibles para todos los usuarios del sistema.

      ```sh
       /usr/local/share/fonts
      ```
      Este directorio es parte de la jerarquía de /usr/local, que tradicionalmente se utiliza para software y archivos que no forman parte de la distribución estándar del sistema.Las fuentes instaladas aquí suelen ser añadidas manualmente por el administrador del sistema o a través de scripts de instalación que no utilizan el gestor de paquetes. Las fuentes en este directorio también están disponibles para todos los usuarios del sistema. Este directorio no suele ser afectado por actualizaciones del sistema, por lo que es un lugar seguro para instalar fuentes personalizadas o que no deseas que sean modificadas por las actualizaciones del sistema.

     :::
### 2. Añadir fuente a VSCode     
### 3. Cambiar parpadeo del cursor
-  Ir a **Settings** (```Ctrl + ,```).
- En la barra de búsqueda escribir **Cursor Blinking**.
- Seleccionar la animación deseada (a mi me gusta **expand**)

