FROM node:21-alpine3.18

LABEL maintainer="manuelvico0102@correo.ugr.es"

LABEL version="5.0.1"

USER node

WORKDIR /home/node

COPY package.json package-lock.json ./

RUN npm ci

WORKDIR /app/test

ENTRYPOINT ["npm", "run", "test"] 