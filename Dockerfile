FROM node:13-alpine
ENV TZ=Israel
RUN apk add --no-cache tzdata && cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ >  /etc/timezone
WORKDIR /app
COPY ./dist ./dist
COPY ./node_modules ./node_modules

CMD [ "node", "./dist/index" ]