FROM node:20

RUN useradd --create-home swarmer

COPY package-lock.json /home/swarmer/package-lock.json
COPY node_modules /home/swarmer/node_modules
COPY index.mjs /home/swarmer/index.mjs
COPY package.json /home/rehoster/package.json

USER swarmer

ENTRYPOINT ["node", "/home/swarmer/index.mjs"]
