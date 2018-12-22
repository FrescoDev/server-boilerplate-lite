FROM mhart/alpine-node:10

ENV NODE_ENV=production
ENV PORT=80

RUN mkdir -p /usr/src/host
WORKDIR /usr/src/host

COPY package.json package.json
COPY package-lock.json package-lock.json 
RUN npm i

# Add your source files
COPY . /usr/src/host

CMD ["npm","start"]