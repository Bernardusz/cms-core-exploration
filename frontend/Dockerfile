# frontend/Dockerfile (development)
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps
EXPOSE 5173

# Mount your source code via docker-compose for live reload
CMD ["npm", "run" ,"dev", "--", "--host"]
