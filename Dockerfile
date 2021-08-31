FROM launcher.gcr.io/google/nodejs

WORKDIR /app
COPY package.json .
RUN npm --unsafe-perm install
COPY . .

CMD ["npm", "start"]