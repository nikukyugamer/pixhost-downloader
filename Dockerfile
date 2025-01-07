FROM alpine:3.21.1 as cli

WORKDIR /tmp

RUN NODE_VERSION=16.13.1 \
    && GOSU_VERSION=1.14 \
    && apk --no-cache add curl \
    && ARCHITECTURE=$(arch | sed s/aarch64/arm64/ | sed s/x86_64/x64/) \
    && curl -LO https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCHITECTURE.tar.xz \
    && tar xvf node-v$NODE_VERSION-linux-$ARCHITECTURE.tar.xz \
    && mv node-v$NODE_VERSION-linux-$ARCHITECTURE node \
    && ARCHITECTURE=$(arch | sed s/aarch64/arm64/ | sed s/x86_64/amd64/) \
    && curl -LO https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$ARCHITECTURE \
    && chmod +x gosu-$ARCHITECTURE \
    && mv gosu-$ARCHITECTURE gosu

FROM ubuntu:24.04

COPY --from=cli /tmp/node /opt/node
COPY --from=cli /tmp/gosu /opt/cli/gosu
ENV PATH /opt/node/bin:/opt/cli:$PATH

WORKDIR /app
COPY . /app
RUN npm install -g yarn \
    && yarn remove cypress \
    && yarn install \
    && yarn cache clean

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["--help"]
