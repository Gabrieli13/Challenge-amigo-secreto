# Sorteio de amigo secreto  
Descrição: Este é um programa de sorteio de amigo secreto  
Linguagens: Html, Css e JavaScript  
Como executar: O usuário pode digitar os nomes dos participantes em um campo na tela e realizar o sorteio aleatório de um nome.  

  ## Estrutura do Projeto  
  index.html # Página principal  
  style.css # Estilos da aplicação  
  app.js # Código JavaScript  
  assets/ # Imagens usadas no projeto  
  
## Como executar    
1. Faça download ou clone este repositório:
```bash
git clone https://github.com/Gabrieli13/Challenge-amigo-secreto.git
```
2. Abra o arquivo index.html em qualquer navegador.
3. Digite os nomes na caixa de texto e clique em **Adicionar**.
4. Clique em **Sortear amigo** para escolher aleatoriamente um participante.

## Como alterar o projeto  
* Alterar estilos -> Edite o arquivo style.css.
* Alterar lógica de sorteio ou adicionar novas funções -> Faça modificações no arquivo app.js.
* Alterar a interface Html -> Edite o arquivo index.html.
## Exemplo de alterações:  
Se você quiser garantir que cada pessoa seja sorteada apenas uma vez, altere a função sortearAmigo no app.js para remover o sorteado da lista após o sorteio.  

# Desafios do desenvolvimento:    

## Problema em limpar campo para digitar próximo nome  

<img width="1280" height="720" alt="Erro -1 " src="https://github.com/user-attachments/assets/63f77521-8f41-4781-a86e-257ea1ffdae9" />   

## Resolução:  

Para resolver esse problema de uma forma simples, foi necessário adicionar a linha: document.getElementById("amigo").value = "";  

<img width="1280" height="720" alt="Resultado Final" src="https://github.com/user-attachments/assets/5e8473a2-4947-47bf-991a-e33f0f83cb4f" />  

Campo limpo, já com nome sorteado.  

# Mudanças visuais:  

## Você pode alterar as cores da página no arquivo style.css  

<img width="1280" height="720" alt="Mudança no arquivo" src="https://github.com/user-attachments/assets/ba289a31-aec4-4b19-b4b0-58603b801eeb" />  

## Resultado final:  

<img width="1280" height="720" alt="Mudando cores" src="https://github.com/user-attachments/assets/784d12f3-6295-497c-adfa-fafc384a29f8" />


