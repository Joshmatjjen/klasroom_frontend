FROM node:latest
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY ./ .
USER app
RUN chown -R app /opt/app
EXPOSE 3000
CMD [ "npm", "run", "build" ]
