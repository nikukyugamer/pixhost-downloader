FROM alpine:3.15.0 as cli

WORKDIR /tmp

RUN apk --no-cache add curl \
    && curl -LO https://nodejs.org/dist/v16.13.1/node-v16.13.1-linux-x64.tar.xz \
    && tar xvf node-v16.13.1-linux-x64.tar.xz \
    && mv node-v16.13.1-linux-x64 node \
    && curl -LO https://github.com/tianon/gosu/releases/download/1.14/gosu-amd64 \
    && chmod +x gosu-amd64 \
    && mv gosu-amd64 gosu

FROM ubuntu:20.04

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
