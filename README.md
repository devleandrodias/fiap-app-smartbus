#Aplicativo SmartBus

Link do projeto: https://github.com/devleandrodias/fiap-app-smartbus 

Tecnologias utilizadas: React Native, Visual Studio Code, celular android, live share, git, integração com API do SPTrans

Link da documentação da API:
https://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/documentacao-api 

Telas criadas:

Tela 1 - Tela de linhas de ônibus

Tela 2 - Tela de pontos de paradas

Passo a passo para executar o app no celular:

adb devices

yarn start

yarn android --deviceId=[id_do_celular]

Observações:

Devido a uma limitação do API do SPTrans só é possível realizar requisições http através de um dispositivo físico (Celular), pois ele não reconhece o emulador como dispositivo válido por conta da autenticação
