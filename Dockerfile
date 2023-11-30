FROM node:21-alpine

LABEL maintainer="manuelvico0102@correo.ugr.es" \
      version="5.0.1"

RUN mkdir /.npm && chmod 777 /.npm

RUN mkdir -p /app/test && chown -R node:node /app

USER node

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

WORKDIR /app/test

ENTRYPOINT ["npm", "run", "test"]