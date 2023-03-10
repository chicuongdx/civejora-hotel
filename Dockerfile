FROM node:18
WORKDIR /usr/scr/app
COPY package*.json ./
RUN run install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]