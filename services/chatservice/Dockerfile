# Usa una imagen base de Node.js
FROM node:16

# Crear el directorio de la app en el contenedor
WORKDIR /usr/src/app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar los archivos del proyecto
COPY . .

# Exponer el puerto
EXPOSE 8080

# Iniciar la aplicación
CMD ["node", "server.js"]
