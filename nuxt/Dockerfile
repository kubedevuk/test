ARG NODE_VERSION=node:22.7-bullseye-slim

FROM $NODE_VERSION AS dependency-base

RUN useradd -ms /bin/bash appuser

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY package.json .
COPY package-lock.json .

RUN chown -R appuser:appuser package.json
RUN chown -R appuser:appuser package-lock.json

RUN npm ci

FROM dependency-base AS production-base

# Run in production mode
ENV NODE_ENV=production
ENV NUXT_IS_DOCKER=true

# Service hostname
ENV NUXT_HOST=0.0.0.0

# Service version
ARG APP_URL
ARG APP_PORT
ARG NUXT_APP_VERSION

# // todo doesnt seem to update from env unless static
ENV APP_URL=${APP_URL}
ENV APP_PORT=${APP_PORT}
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}


# build will also take care of building
# if necessary
COPY . .
RUN npm run generate

USER appuser

FROM $NODE_VERSION AS production

COPY --from=production-base /app/.output /app/.output
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# start the app
ENTRYPOINT ["/app/entrypoint.sh"]