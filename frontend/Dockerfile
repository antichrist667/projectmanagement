# Etapa de construcción
FROM node:14 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Elimina la configuración por defecto de Nginx y copia la configuración personalizada
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf.template

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

# CMD para iniciar Nginx en el puerto que Heroku asigna
CMD ["sh", "-c", "envsubst < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
