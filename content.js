// Conteúdo inicial do app. Tudo pode ser editado e exportado para JSON.
window.APP_CONTENT = {
  appTitle: "Stub de Microlearning",
  courses: [
    {
      id: "linha-de-comando",
      title: "Linha de Comando",
      description: "Aprenda terminal em lições curtas e práticas.",
      modules: [
        {
          id: "modulo-1",
          title: "Módulo 1: Olá, Terminal!",
          lessons: [
            {
              id: "licao-1-introducao",
              title: "Introdução",
              subtitle: "Comece por aqui",
              steps: [
                {
                  id: "step-boas-vindas",
                  type: "content",
                  title: "Bem-vindo ao curso de Linha de Comando",
                  text: [
                    "Esta lição é um percurso simples, pensado para celular.",
                    "Você vai entender o básico do terminal e executar seu primeiro comando."
                  ],
                  buttonText: "CONTINUAR"
                },
                {
                  id: "step-por-que-cli",
                  type: "content",
                  title: "Por que usar a linha de comando?",
                  text: [
                    "A linha de comando é rápida, direta e funciona em praticamente qualquer sistema.",
                    "Ela ajuda a automatizar tarefas e enxergar exatamente o que está acontecendo."
                  ],
                  buttonText: "CONTINUAR"
                },
                {
                  id: "step-conheca-terminal",
                  type: "content",
                  title: "Conheça a janela do terminal",
                  text: [
                    "Terminal é a janela onde você escreve comandos.",
                    "Shell é o programa que interpreta esses comandos."
                  ],
                  buttonText: "CONTINUAR"
                },
                {
                  id: "step-resumo",
                  type: "content",
                  title: "Shell, command line, terminal e console",
                  text: [
                    "No dia a dia, esses termos aparecem juntos.",
                    "Regra prática: terminal é a interface; shell é quem executa os comandos."
                  ],
                  terminal:
                    "$ whoami\naluno\n$ pwd\n/home/aluno\n$ echo Pronto\nPronto",
                  buttonText: "CONTINUAR"
                },
                {
                  id: "step-popup",
                  type: "content_with_inline_popup",
                  title: "Checagem rápida",
                  text: [
                    "Aqui existe um mini painel explicativo opcional.",
                    "Toque no botão para abrir o painel e avançar por ele."
                  ],
                  popupTriggerLabel: "O que é um terminal?",
                  popupText:
                    "Terminal é a interface onde comandos de texto são digitados e onde o resultado desses comandos é exibido.",
                  popupContinueText: "CONTINUAR"
                },
                {
                  id: "step-preencher-echo",
                  type: "token_fill",
                  title: "PREENCHA AS LACUNAS",
                  prompt: "Monte o comando que imprime o texto Spike them!",
                  slots: 2,
                  options: ["echo", "'Spike them!'", "ls", "pwd", "cat"],
                  answer: ["echo", "'Spike them!'"],
                  correct: {
                    output: "$ echo 'Spike them!'\nSpike them!",
                    explanation:
                      "O comando echo imprime na tela exatamente o texto informado."
                  },
                  incorrect: {
                    message:
                      "Sequência incorreta. Revise as opções e tente novamente."
                  }
                },
                {
                  id: "step-conclusao",
                  type: "lesson_complete",
                  title: "Lição concluída!",
                  subtitle: "Você terminou a introdução.",
                  buttonText: "CONTINUAR"
                }
              ]
            },
            {
              id: "licao-2-navegacao",
              title: "Primeira Navegação",
              subtitle: "Lição extra de exemplo",
              steps: [
                {
                  id: "step-nav-conteudo",
                  type: "content",
                  title: "Navegando entre pastas",
                  text: [
                    "Use cd para entrar em diretórios e ls para listar arquivos.",
                    "Esta lição existe para provar que o menu suporta várias lições."
                  ],
                  terminal: "$ cd projetos\n$ ls\napp  anotações.txt",
                  buttonText: "CONTINUAR"
                },
                {
                  id: "step-nav-conclusao",
                  type: "lesson_complete",
                  title: "Lição concluída!",
                  subtitle: "Base de navegação concluída.",
                  buttonText: "CONTINUAR"
                }
              ]
            }
          ]
        },
        {
          id: "modulo-2",
          title: "Módulo 2: Comandos Básicos",
          lessons: [
            {
              id: "licao-em-breve",
              title: "Em breve",
              subtitle: "Placeholder de estrutura",
              steps: [
                {
                  id: "step-em-breve",
                  type: "content",
                  title: "Próximas lições",
                  text: [
                    "Este módulo é um placeholder para demonstrar a estrutura.",
                    "Depois você pode adicionar lições completas direto na interface."
                  ],
                  buttonText: "CONTINUAR"
                },
                {
                  id: "step-em-breve-final",
                  type: "lesson_complete",
                  title: "Lição concluída!",
                  subtitle: "Placeholder encerrado.",
                  buttonText: "CONTINUAR"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "git",
      title: "Git",
      description: "Aprenda os fundamentos de versionamento em passos curtos.",
      modules: [
        {
          id: "git-modulo-1",
          title: "Módulo 1: Conceitos Iniciais",
          lessons: [
            {
              id: "git-licao-1",
              title: "O que é Git?",
              subtitle: "Stub rápido",
              steps: [
                {
                  id: "git-step-1",
                  type: "content",
                  title: "Controle de versão",
                  text: [
                    "Git registra alterações de arquivos ao longo do tempo.",
                    "Este segundo curso existe para provar suporte a vários cursos."
                  ],
                  buttonText: "CONTINUAR"
                },
                {
                  id: "git-step-2",
                  type: "lesson_complete",
                  title: "Lição concluída!",
                  buttonText: "CONTINUAR"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
