FROM gitpod/workspace-full

# Se você precisar de versões específicas do Node.js e NPM, adicione as instruções aqui

# Instalar o Chrome para testes end-to-end (opcional)
USER root
RUN apt-get update && apt-get install -y wget gnupg ca-certificates && \
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
    apt-get update && apt-get install -y google-chrome-stable && \
    rm -rf /var/lib/apt/lists/* && \
    sed -i 's/"$@"/"$@" --disable-setuid-sandbox --no-sandbox/' /opt/google/chrome/google-chrome
