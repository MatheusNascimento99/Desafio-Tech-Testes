# Testes de Integração Rota GET
### Detalhes dos Testes Arquivo aluno.get.int.spec.ts
<br>

![image](https://github.com/MatheusNascimento99/Desafio-tech-testes/assets/139829100/792f201e-0c99-4c64-a35b-f6da6a29823b)

1-Detalhes do Teste: ##GET /aluno:<br>
Intenção: Testar a rota de obtenção de alunos (GET /aluno).<br>
Expectativas:
Espera-se que o status da resposta seja 200 (OK), indicando uma solicitação bem-sucedida.
Espera-se que o cabeçalho 'content-type' da resposta corresponda a um tipo JSON.
Espera-se que o campo 'data' do corpo da resposta tenha um comprimento de 20.
Espera-se que o campo 'length' do corpo da resposta seja maior que 0 (verificando se pelo menos um aluno está presente na resposta).
Espera-se que o campo 'length' do corpo da resposta seja 0 (verificando se a lista está vazia).
<br>

## Uso de Supertest: <br>

O teste utiliza a biblioteca Supertest para realizar solicitações HTTP à aplicação, permitindo a simulação de chamadas à API.
Interpretação do Código de Resposta (Status Code):
<br>
O teste verifica se a rota retorna corretamente um código de status 200, indicando uma solicitação bem-sucedida.
Validação do Conteúdo da Resposta:
<br>
O teste verifica o tipo de conteúdo da resposta, o comprimento do campo 'data' e a presença de pelo menos um aluno na resposta.

# Testes de Integração Rota POST
### Detalhes dos Testes Arquivo aluno.pos.int.spec.ts
<br>

![image](https://github.com/MatheusNascimento99/Desafio-tech-testes/assets/139829100/d51f1e5d-5a74-49d3-8a23-22f23661387b)

<br>
1-Detalhes do Teste: ##POST /aluno:<br>
Intenção: Testar a rota de criação de aluno (POST /aluno) quando não são fornecidos todos os campos necessários (nome e cpf).
Expectativas:Espera-se que o status da resposta seja 400 (Bad Request), indicando que a solicitação foi mal formada.
Espera-se que o cabeçalho 'content-type' da resposta corresponda a um tipo JSON.
Espera-se que o corpo da resposta contenha uma mensagem específica indicando que é necessário informar nome e CPF.
<br>

## Uso de Supertest:<br>
O teste utiliza a biblioteca Supertest para realizar solicitações HTTP à aplicação, permitindo a simulação de chamadas à API.
Interpretação do Código de Resposta (Status Code):
<br>
O teste verifica se a rota retorna corretamente um código de status 400, que é comumente usado para indicar uma solicitação inválida ou mal formada.
Validação do Conteúdo da Resposta:
<br>
Além do código de status, o teste valida o tipo de conteúdo da resposta e o corpo da resposta para garantir que a aplicação esteja retornando as mensagens esperadas.
Este teste específico está focado em garantir que a rota de criação de aluno (POST /aluno) lida corretamente com solicitações inválidas e fornece respostas adequadas ao cliente.
 Certifique-se de que os resultados esperados estejam alinhados com a lógica de validação e tratamento de erros da sua aplicação.
<br>

# Testes unitátios
### Detalhes dos Testes Arquivo aluno.model.test.ts:
![image](https://github.com/MatheusNascimento99/Desafio-tech-testes/assets/139829100/79f0a6ed-e1c5-47f0-a23f-bc951b9dbf0b)

1-Teste: Deverá ser verdadeiro:
Intenção: Testar se a afirmação true é verdadeira.
Expectativa: O resultado esperado é que true seja igual a true. Este teste geralmente é usado para verificar o ambiente de teste e garantir que os 
testes estejam sendo executados corretamente.
<br>
<br>

2-Teste: Deverá retornar valores do modelo:
Intenção: Testar se a função getAll do modelo Aluno retorna um valor verdadeiro.
Expectativa: Espera-se que a função getAll exista e seja verdadeira.
<br>
<br>

3-Teste: Deverá salvar um aluno no modelo:
Intenção: Testar se a função store do modelo Aluno salva um aluno com sucesso.
Expectativa: Espera-se que o resultado da função store seja verdadeiro, indicando que o aluno foi salvo com sucesso.
Observações:
Uso de toBeTruthy:
## OBS:
Os testes fazem uso de toBeTruthy, o que verifica se a expressão fornecida é verdadeira.<br>
Interação com o Banco de Dados:
O teste "Deverá salvar um aluno no modelo" envolve uma interação com o banco de dados ao chamar a função store do modelo Aluno.<br>
Certifique-se de que o ambiente de teste tenha uma configuração adequada para manipulação do banco de dados, ou considere o uso de mocks/fakes para isolar os testes.


## IMPORTANTE ! O banco de dados NÃO foi mocado, pois queria realizar os testes na integra junto ao banco da dados para ver a total conexão, por isso não simulei o mock.

# Instruções Configuração de Ambiente


## 1. Instale o Node.js e o npm:
Certifique-se de ter o Node.js e o npm instalados em seu computador. Você pode baixá-los em [Node](https://nodejs.org/en/download).
<br>
## 2. Clone o Repositório:
Abra o terminal e execute os seguintes comandos:

| Comando     | Info |
| ---      | ---       |
| git clone | https://github.com/seu-usuario/desafio-tech-testes.git         |
| cd     | desafio-tech-testes       |

<br>

## 3. Instale as Dependências:
Dentro do diretório do projeto, execute o seguinte comando para instalar as dependências:

| Comando     | Info |
| ---      | ---       |
| npm |   install   |


<br>

## 4. Configuração do Banco de Dados (Opcional):
Se estiver usando o MySQL, crie um banco de dados e ajuste as configurações no arquivo knexfile.js para combinar com o seu ambiente.
<br>

## 5. Inicie o Servidor:
Para iniciar o servidor, execute:

| Comando     | Info |
| ---      | ---       |
| npm |   start   |

O seu servidor estará acessível em http://localhost:8080.
<br>

## 6. Execute os Testes:
### Para rodar os testes de unidade:

| Comando     | Info |
| ---      | ---       |
| npm |   test:unit   |

### Para rodar os testes de integração:

| Comando     | Info |
| ---      | ---       |
| npm |   test:int   |

<br>

## 7. Desenvolvimento:
O código-fonte do projeto está na pasta src.
Coloque seus testes de unidade em src/__tests__.
Coloque os testes de integração em src/libs/__integracao__.
<br>

## 8. Observações:
Ajuste as configurações do banco de dados no arquivo knexfile.js conforme necessário.
Personalize as configurações do servidor, como a porta, se necessário, no arquivo src/server.ts.
Ajuste as configurações do Jest no arquivo jest.config.js de acordo com o seu projeto.
<br>

## 9. Comandos Úteis:
npm run test: Executa todos os testes.
npm run test:unit: Executa os testes de unidade.
npm run test:int: Executa os testes de integração.
npm run start: Inicia o servidor.
npm run dev: Inicia o servidor em modo de desenvolvimento.
<br>
