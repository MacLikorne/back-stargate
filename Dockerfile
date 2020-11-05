FROM node as build 
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build

FROM node
WORKDIR /app
COPY --from=build /app/build ./build
EXPOSE 3002
CMD ["node", "build/main.js"]