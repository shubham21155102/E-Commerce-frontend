FROM node:21
COPY . .
RUN npm install --production 
RUN npm run build
EXPOSE 3000
CMD ["npm", "run","dev"]