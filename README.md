# Documentação da API

Este documento fornece uma documentação completa para a API fornecida, detalhando rotas, valores de retorno, variáveis e suas regras de uso.

## Introdução

A API serve como um backend para uma organização beneficente, fornecendo endpoints para recuperar informações sobre suas atividades, histórico, metas e formas de apoio.

## URL Base

A URL base para todos os endpoints é `/text`.

## Endpoints

### 1. Início

#### 1.1. Primeiro Quadrado

- **Rota**: `/home/first-square`
- **Método**: GET
- **Descrição**: Recupera informações sobre um evento beneficente.
- **Valor de Retorno**: "No dia 11/03 de 2023 realizamos o dia da mulher distribuindo mais de 120 kit de higiene feminina entre moradoras da comunidade Passo da Pátria e mulheres em situação de rua".

#### 1.2. Segundo Quadrado

- **Rota**: `/home/second-square/:parte`
- **Método**: GET
- **Descrição**: Recupera informações sobre a distribuição de itens essenciais.
- **Parâmetros**:
  - `parte`: Um número indicando a parte da informação a ser recuperada (1 ou 2).
- **Valor de Retorno para a Parte 1**: "Distribuição de 90 cestas básicas por mês, totalizando 5.600 cestas básicas em 5 anos."
- **Valor de Retorno para a Parte 2**: "Distribuição de 170 marmitas toda semana."

#### 1.3. Terceiro Quadrado

- **Rota**: `/home/third-square`
- **Método**: GET
- **Descrição**: Recupera informações sobre outro evento beneficente.
- **Valor de Retorno**: "No dia 22/10 de 2023 realizamos o dia das crianças distribuindo 186 brinquedos e lanches. E em parceria com outras associações sociais (como o grupo Criando Laços) preparamos um dia de atividades recreativas com vários brinquedos."

#### 1.4. Texto Principal

- **Rota**: `/home/main-text/:paragrafo`
- **Método**: GET
- **Descrição**: Recupera parágrafos descrevendo a missão e atividades da organização.
- **Parâmetros**:
  - `paragrafo`: Um número indicando o parágrafo a ser recuperado (1 a 4).
- **Valor de Retorno para o Parágrafo 1**: "Há mais de cinco anos trabalhando em prol dos mais necessitados."
- **Valor de Retorno para o Parágrafo 2**: "Realizamos várias ações com as pessoas menos favorecidas, que por muitas razões se encontram em condições vulneráveis (drogas, alcoolismo, problemas psiquiátricos, violência familiar, entre muitos outros)."
- **Valor de Retorno para o Parágrafo 3**: "Nossa associação se destina a ajudar, orientar e amparar pessoas em situação de rua ou com recursos escassos, fornecendo um lugar para dormir e alimentação (café da manhã, almoço e janta)."
- **Valor de Retorno para o Parágrafo 4**: "Fornecemos marmitas em diversos pontos da Cidade Alta e arredores."

### 2. Nossa História

#### 2.1. Nós Somos

- **Rota**: `/our-history/we-are/:paragrafo`
- **Método**: GET
- **Descrição**: Recupera parágrafos descrevendo a história da organização.
- **Parâmetros**:
  - `paragrafo`: Um número indicando o parágrafo a ser recuperado (1 a 5).
- **Valor de Retorno para o Parágrafo 1**: "Alimentando com amor é uma associação sem fins lucrativos com mais de 5 anos de funcionamento. No começo, usávamos um carrinho de mão para distribuir marmitas à pessoas em situação de rua, sem nenhum tipo de apoio."
- **Valor de Retorno para o Parágrafo 2**: "Conforme o projeto cresceu, passamos a fornecer um lugar para as pessoas tomarem banho e atenderem suas necessidades fisiológicas. Para isto, alugamos uma casa que contasse com banheiro externo, e adequamos os quartos para virarem dormitórios."
- **Valor de Retorno para o Parágrafo 3**: "Hoje, contamos com mais de 25 pessoas atendidas no local, entre mulheres, crianças e homens, que contam com alimentação."
- **Valor de Retorno para o Parágrafo 4**: "Grande parte dessas pessoas são dependentes químicos que por diversas razões se encontram sem apoio familiar ou estão longe de suas famílias. Mas também ajudamos pessoas vulneráveis por problemas conjugais ou separações."
- **Valor de Retorno para o Parágrafo 5**: "Atualmente buscamos uma assessoria de assistência social permanente, bem como profissionais de saúde mental e do setor jurídico, para fornecermos um apoio social, jurídico e psicológico que seja constante e de qualidade."

#### 2.2. Nossos Objetivos

##### 2.2.1. Parágrafo de Objetivos

- **Rota**: `/our-history/our-objectivies/paragraph`
- **Método**: GET
- **Descrição**: Recupera o objetivo principal da organização.
- **Valor de Retorno**: "Alimentando Com Amor tem como principal objetivo ajudar, apoiar e orientar as pessoas em situação de rua e da comunidade Passos da Pátria em questões sociais, jurídicas, psicológicas e alimentícias."

##### 2.2.2. O Que Queremos Fazer

- **Rota**: `/our-history/our-objectivies/what-we-want-make/:parte`
- **Método**: GET
- **Descrição**: Recupera os objetivos que a organização pretende alcançar.
- **Parâmetros**:
  - `parte`: Um número indicando o objetivo a ser recuperado (1 a 4).
- **Valor de Retorno para o Objetivo 1**: "Café da manhã, almoço e janta para os moradores de rua em nossa casa de apoio;"
- **Valor de Retorno para o Objetivo 2**: "100 marmitas de forma regular aos moradores de rua em diferentes setores da cidade alta;"
- **Valor de Retorno para o Objetivo 3**: "100 cestas básicas mensalmente para os moradores cadastrados na comunidade Passo da Pátria;"
- **Valor de Retorno para o Objetivo 4**: "Kit de higiene e limpeza para os moradores e a comunidade;"

##### 2.2.3. O Que Precisamos

- **Rota**: `/our-history/our-objectivies/what-we-need/:parte`
- **Método**: GET
- **Descrição**: Recupera os recursos que a organização precisa.
- **Parâmetros**:
  - `parte`: Um número indicando o recurso necessário (1 a 3).
- **Valor de Retorno para o Recurso 1**: "Profissionais para atendimento psicológico para os moradores da casa de apoio e outras pessoas em situação de rua;"
- **Valor de Retorno para o Recurso 2**: "Atendimento social e jurídico para todas pessoas cadastradas;"
- **Valor de Retorno para o Recurso 3**: "Aumentar a capacidade da casa de apoio para beneficiar mais pessoas."

#### 2.3. Metas

##### 2.3.1. Parágrafo de Metas

- **Rota**: `/our-history/goals/paragraph`
- **Método**: GET
- **Descrição**: Recupera um parágrafo descrevendo as metas da organização.
- **Valor de Retorno**: "Enquanto nossos objetivos são mais urgentes, nossas metas são orientações para o longo prazo."

##### 2.3.2. Detalhes das Metas

- **Rota**: `/our-history/goals/:parte`
- **Método**: GET
- **Descrição**: Recupera metas específicas que a organização pretende alcançar.
- **Parâmetros**:
  - `parte`: Um número indicando a meta a ser recuperada (1 a 6).
- **Valor de Retorno para a Meta 1**: "Fornecer mensalmente 800 marmitas à pessoas em situação de rua."
- **Valor de Retorno para a Meta 2**: "Fornecer 250 cestas básicas aos moradores da comunidade Passo da Pátria;"
- **Valor de Retorno para a Meta 3**: "Ter um espaço para albergar 70 pessoas vulneráveis, onde também possam ter suas necessidades básicas atendidas;"
- **Valor de Retorno para a Meta 4**: "Fornecer serviço de assistência social, jurídico, psicológico e psiquiátrico;"
- **Valor de Retorno para a Meta 5**: "Ter apoio médico;"
- **Valor de Retorno para a Meta 6**: "Desenvolver cursos profissionalizantes."

#### 2.4. Quadrado Lateral

- **Rota**: `/our-history/side-square`
- **Método**: GET
- **Descrição**: Recupera informações adicionais sobre a inclusividade da organização.
- **Valor de Retorno**: "APOIAMOS PESSOAS EM SITUAÇÃO DE RUA, MORADORES DA COMUNIDADE PASSOS DA PATRIA SEM DISCRIMIDAR IDADE, SEXO, RAÇA, COR, CRÊDO, OU ORIENTAÇÃO SEXUAL."

### 3. Ajude-nos

#### 3.1. Seja um Voluntário

- **Rota**: `/help-us/be-a-voluntary/:paragrafo`
- **Método**: GET
- **Descrição**: Fornece informações sobre como ser voluntário.
- **Parâmetros**:
  - `paragrafo`: Um número indicando o parágrafo a ser recuperado (1 ou 2).
- **Valor de Retorno para o Parágrafo 1**: "Estamos sempre precisando de mais pessoas dispostas a ajudar com esse inestimável trabalho de base, sem a qual muitos cidadãos estariam completamente desamparados."
- **Valor de Retorno para o Parágrafo 2**: "Clicando no botão abaixo você acessará o formulário de cadastro de voluntário. Ficaremos muito felizes de ter seu apoio!"

#### 3.2. Faça uma Doação

- **Rota**: `/help-us/make-a-donation`
- **Método**: GET
- **Descrição**: Fornece instruções sobre como fazer uma doação.
- **Valor de Retorno**: "Para fazer uma doação, você pode entrar em contato diretamente conosco pelo telefone (XX) XXXX-XXXX ou enviar um e-mail para [contato@alimentandocomamor.org](mailto:contato@alimentandocomamor.org). Ficaremos muito gratos pela sua colaboração!"

### 4. Grupo Simios

#### 4.1. Parágrafo

- **Rota**: `/simios-group/:paragrafo`
- **Método**: GET
- **Descrição**: Recupera parágrafos descrevendo a missão do Grupo Simios.
- **Parâmetros**:
  - `paragrafo`: Um número indicando o parágrafo a ser recuperado (1 ou 2).
- **Valor de Retorno para o Parágrafo 1**: "O Grupo Simios é uma iniciativa independente que visa proteger e conservar os habitats dos primatas na região amazônica."
- **Valor de Retorno para o Parágrafo 2**: "Nossa missão é educar as comunidades locais sobre a importância da preservação dos primatas e promover práticas sustentáveis de uso da terra."

## Documentação do Serviço

A API é alimentada por um backend NestJS, utilizando os seguintes métodos de serviço:

- `homeFirstSquare()`: Recupera informações sobre um evento beneficente.
- `homeSecondSquare(part: number)`: Recupera informações sobre a distribuição de itens essenciais.
- `homeThirdSquare()`: Recupera informações sobre outro evento beneficente.
- `homeMainText(paragrafo: number)`: Recupera parágrafos descrevendo a missão e atividades da organização.
- `ourHistoryWeAre(paragrafo: number)`: Recupera parágrafos descrevendo a história da organização.
- `ourHistoryOurObjectiviesParagraph()`: Recupera o objetivo principal da organização.
- `ourHistoryOurObjectiviesWhatWeWantMake(part: number)`: Recupera os objetivos que a organização pretende alcançar.
- `ourHistoryOurObjectiviesWhatWeNeed(part: number)`: Recupera os recursos que a organização precisa.
- `ourHistoryGoalsParagraph()`: Recupera um parágrafo descrevendo as metas da organização.
- `ourHistoryGoals(part: number)`: Recupera metas específicas que a organização pretende alcançar.
- `ourHistorySideSquare()`: Recupera informações adicionais sobre a inclusividade da organização.
- `helpUsBeAVoluntary(paragrafo: number)`: Fornece informações sobre como ser voluntário.
- `helpUsMakeADonation()`: Fornece instruções sobre como fazer uma doação.
- `simiosGroup(paragrafo: number)`: Recupera parágrafos descrevendo a missão do Grupo Simios.
