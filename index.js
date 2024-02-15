const perguntas = [
    {
      pergunta: "O que significa a sigla IP em uma rede de computadores?",
      respostas: [
        "Internet Protocol",
        "Internal Port",
        "Interface Protocol",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a função do DNS em uma rede?",
      respostas: [
        "Detectar Navegação Segura",
        "Sincronizar Dispositivos",
        "Converter Nomes de Domínio em Endereços IP",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual protocolo é comumente utilizado para transferência de arquivos?",
      respostas: [
        "SMTP",
        "FTP",
        "HTTP",
      ],
      correta: 1,
    },
    {
      pergunta: "O que significa a sigla LAN em redes de computadores?",
      respostas: [
        "Local Area Network",
        "Large Access Node",
        "Long-range Antenna Network",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a principal função de um roteador em uma rede?",
      respostas: [
        "Enviar Emails",
        "Encaminhar Pacotes entre Redes",
        "Filtrar Spam",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a camada responsável por roteamento e endereçamento IP no modelo OSI?",
      respostas: [
        "Camada de Aplicação",
        "Camada de Rede",
        "Camada de Enlace",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um firewall em uma rede de computadores?",
      respostas: [
        "Um Dispositivo de Armazenamento",
        "Um Software de Segurança",
        "Um Protocolo de Comunicação",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a função do protocolo DHCP?",
      respostas: [
        "Atribuir Endereços IP Dinamicamente",
        "Criptografar Comunicações",
        "Gerenciar Acesso à Internet",
      ],
      correta: 0,
    },
    {
      pergunta: "O que significa a sigla VPN em redes de computadores?",
      respostas: [
        "Virtual Private Network",
        "Very Powerful Node",
        "Virus Protection Network",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual é a diferença entre hub e switch em uma rede?",
      respostas: [
        "Nenhuma, são sinônimos",
        "Hub é mais rápido que o switch",
        "Switch filtra o tráfego, enquanto hub não",
      ],
      correta: 2,
    },
  ];  
  
  //Seleciona o elemento HTML com o ID "quiz" e o armazena na constante quiz
  const quiz = document.querySelector('#quiz')
  //Seleciona o elemento HTML template e o armazena na constante template
  const template = document.querySelector('template')
  
  //Cria um conjunto (Set) chamado corretas para armazenar as perguntas que foram respondidas corretamente
  const corretas = new Set()
  //Armazena o total de perguntas na constante totalDePerguntas
  const totalDePerguntas = perguntas.length
  //Seleciona o elemento HTML com o ID "acertos" e a tag "span" dentro dele, e os armazena na constante mostrarTotal
  const mostrarTotal = document.querySelector('#acertos span')
  //Define o conteúdo textual do elemento mostrarTotal como o número de respostas corretas atualmente e o total de perguntas
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    //Clona o conteúdo do template, incluindo todos os seus descendentes, e os armazena em quizItem
    const quizItem = template.content.cloneNode(true)
    //Define o texto do elemento "h3" dentro de quizItem como a pergunta atual
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      //Clona o elemento "dt" dentro de quizItem
      const dt = quizItem.querySelector('dl dt').cloneNode(true)      
      //Define o texto do elemento "span" dentro de dt como a resposta atual
      dt.querySelector('span').textContent = resposta      
      //Define o atributo "name" do input dentro de dt como "pergunta-" seguido pelo índice da pergunta atual na array perguntas
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))      
      //Define o valor do input dentro de dt como o índice da resposta atual na array de respostas
      dt.querySelector('input').value = item.respostas.indexOf(resposta)

      //Adiciona um manipulador de evento para o evento "change" do input
      dt.querySelector('input').onchange = (event) => {
        //Verifica se a resposta selecionada é a resposta correta
        const estaCorreta = event.target.value == item.correta
        //Remove a pergunta atual do conjunto de respostas corretas
        corretas.delete(item)
        //Se a resposta estiver correta adiciona a pergunta ao conjunto de respostas corretas
        if (estaCorreta) {
          corretas.add(item)
        }
  
        //Atualiza o texto do elemento mostrarTotal com o número de respostas corretas
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    //Remove o elemento "dt" dentro de quizItem
    quizItem.querySelector('dl dt').remove()
  
    //Adiciona quizItem a pergunta clonada com respostas ao elemento com o ID "quiz" no documento
    quiz.appendChild(quizItem)
  }