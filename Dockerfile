FROM node:21-alpine

LABEL maintainer="manuelvico0102@correo.ugr.es" \
      version="5.0.1"

USER node

WORKDIR /home/node

COPY package.json package-lock.json ./

RUN npm ci

WORKDIR /app/test

ENTRYPOINT ["npm", "run", "test"] 