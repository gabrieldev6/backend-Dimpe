# Use uma imagem base do Node.js
FROM node:lts as development

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos de configuração e dependências do projeto para o contêiner
COPY src src
COPY package*.json .
COPY .env .
COPY tsconfig.json .

# RUN npm cache clear --force
# Instale as dependências

RUN npm install
RUN npm run build
RUN npm run migration:run
# Exponha a porta em que o servidor estará escutando
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]