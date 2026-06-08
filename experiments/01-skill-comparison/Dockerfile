FROM ghcr.io/anomalyco/opencode:latest AS opencode-base
FROM node:22-alpine

RUN apk add --no-cache git ripgrep

COPY --from=opencode-base /usr/local/bin/opencode /usr/local/bin/opencode

RUN mkdir -p /root/.config/opencode

WORKDIR /project

ENTRYPOINT ["opencode"]
