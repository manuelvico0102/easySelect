FROM node:21-alpine

LABEL maintainer="manuelvico0102@correo.ugr.es" \
      version="5.0.1"

WORKDIR /app/test

RUN chown -R node:node /app

USER node

COPY package.json package-lock.json ./

RUN npm ci

ENTRYPOINT ["npm", "run", "test"]