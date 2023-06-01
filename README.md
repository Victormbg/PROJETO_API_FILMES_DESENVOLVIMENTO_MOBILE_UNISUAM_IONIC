# APS_DESENVOLVIMENTO_MOBILE_UNISUAM_IONIC
Projeto de APS para matéria de Desenvolvimento Mobile da Faculdade UNISUAM feito em Ionic.

## Passos a Passo do Uso do GitPod

1. Acesse pelo botão:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Victormbg/APS_DESENVOLVIMENTO_MOBILE_UNISUAM_IONIC)

2. Ele abrirá a tela do GitPod e pedirá para você se logar usando uma conta do GitHub.

3. Ele abrirá uma espécie de Visual Studio Code no navegador e abaixo um terminal começará a iniciar o processo de instalação do Ionic e, em seguida, ele abrirá um localhost na porta 8100.

4. Em seguida, ele dividirá a tela e abrirá uma tela com o app rodando como se você tivesse o localhost aberto no navegador.

5. Pronto!

# Comandos IONIC:

## Criar novo componente
ionic generate component historico

## Comandos Capacitor

### Rodar o App no Emulador de Android
ionic capacitor run android
- https://ionicframework.com/docs/cli/commands/capacitor-run

### Gerar o APK
ionic capacitor build android
- https://ionicframework.com/docs/cli/commands/capacitor-build

## Possíveis erros na Build

### Erro do JAVA_HOME

Configure o JAVA_HOME nas variáveis de ambiente: 
- https://daisy.github.io/pipeline/Get-Help/Troubleshooting/Common-Errors-Windows/

### Erro do Gradle

É necessário instalar o Gradle. Segue o link abaixo para o site:
- https://gradle.org/install/

### Erro Java 11

O Gradle precisa do Java 11 para funcionar. Segue o link abaixo para o site do JDK 11:
- https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html