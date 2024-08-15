# Usa una imagen base de Node.js oficial
FROM node:14-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "server.js"]
