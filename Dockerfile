FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN chown -R app /opt/app
USER app
EXPOSE 3000
CMD [ "npm", "run", "build" ]
