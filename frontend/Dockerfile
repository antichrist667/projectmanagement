# Usa una imagen base de Node.js oficial
FROM node:14-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --production

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para correr la aplicación
CMD ["node", "server.js"]
