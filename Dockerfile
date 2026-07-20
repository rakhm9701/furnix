FROM node:20.17.0-alpine AS build

WORKDIR /usr/src/furnix

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build
RUN npm prune --omit=dev

FROM node:20.17.0-alpine AS production

WORKDIR /usr/src/furnix
ENV NODE_ENV=production
ENV PORT_API=3007

COPY --from=build /usr/src/furnix/node_modules ./node_modules
COPY --from=build /usr/src/furnix/package*.json ./
COPY --from=build /usr/src/furnix/dist ./dist

RUN mkdir -p uploads/member uploads/product uploads/article && chown -R node:node /usr/src/furnix

USER node
EXPOSE 3007

CMD ["npm", "run", "start:prod"]
