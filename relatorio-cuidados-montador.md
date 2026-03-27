# Relatório de cuidados para o montador de cursos

Este relatório resume os cuidados que passaram a ser obrigatórios no catálogo embarcado do AraLearn após a revisão dos três cursos atuais.

## 1. Texto visível ao estudante

- Nunca escrever cards em voz de bastidor, como `o curso quer`, `a lição quer`, `blueprint`, `nível introdutório`, `formato mobile`, `caber bem no app` ou comentários sobre adaptação ao celular.
- Evitar subtítulos em infinitivo com cara de plano docente, como `Apresentar...`, `Mapear...`, `Fazer o estudante...`.
- Preferir linguagem direta, concreta e orientada ao conteúdo: o card deve ensinar algo, não explicar a intenção editorial por trás dele.

## 2. Autossuficiência de card

- Todo card de prática precisa conter contexto suficiente para ser resolvido sem voltar ao card anterior.
- Evitar expressões como `Ainda com...`, `o laço acima`, `for acima`, `agora compare`, `o mesmo grafo-base`.
- Se a resposta depende da ordem das linhas de uma tabela-verdade, essa ordem precisa estar escrita no próprio card.
- Se a resposta depende de um grafo, matriz, vetor, rotina ou convenção, o próprio card precisa restabelecer esse dado.

## 3. Contêineres e UX

- `lesson_complete` deve vir com `heading` e `paragraph` centralizados já no JSON.
- Cards finais não devem confiar em alinhamento herdado ou acidental.
- Em `simulator`, não presumir que a primeira opção será escolhida; ainda assim, evitar colocar a resposta correta na primeira posição.
- Em `flowchart`, não cobrar símbolo, convenção ou leitura antes de a teoria correspondente ter sido apresentada.
- Em exercícios com múltiplas soluções equivalentes, o montador deve aceitar todas as respostas compatíveis ou explicitar a convenção que está sendo usada.

## 4. Lógica proposicional e demonstração

- Ensinar leitura natural em português junto com a fórmula, não só leitura simbólica mecânica.
- Explicitar condições de verdade: compreender uma fórmula inclui saber em que situações ela é verdadeira ou falsa.
- Cobrir pelo menos: negação, conjunção, disjunção inclusiva, implicação, bicondicional, tabelas-verdade, equivalência, tautologia, contradição e contingência.
- Incluir prática operacional com leis de equivalência, especialmente dupla negação, leis de De Morgan, implicação como disjunção e decomposição do bicondicional.
- Incluir pelo menos uma introdução clara a contraposição, contradição/absurdo e indução matemática.
- Evitar tratar tabela-verdade como única técnica disponível; ela deve conviver com leitura natural e manipulação por equivalências.

## 5. Perguntas a evitar

- Não testar o estudante sobre a própria didática da aula.
- Não usar cards do tipo `quais riscos da lição`, `qual afirmação o curso quer preservar`, `qual cuidado a lição quer manter`.
- Se a intenção é consolidar um conceito, a pergunta precisa ser matemática, lógica, computacional ou operacional, nunca meta-pedagógica.

## 6. Revisão automática mínima

Antes de considerar um curso pronto, o montador deve verificar:

- ausência de linguagem de bastidor;
- ausência de dependência explícita do card anterior;
- `lesson_complete` centralizado;
- cards de prática com contexto suficiente;
- simuladores sem resposta correta na primeira posição;
- coerência entre teoria apresentada e prática cobrada;
- acentuação e português natural nas saídas mostradas ao estudante;
- fechamento de curso consistente com o conteúdo realmente coberto.

## 7. Fontes que orientaram esta revisão

- Material escaneado fornecido pelo usuário: `C:\\Users\\008031\\Downloads\\Semântica formal.pdf`, com OCR local focado em condições de verdade, acarretamento, equivalência e contradição.
- MIT OpenCourseWare, *Mathematics for Computer Science*:
  - https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2005/resources/slides3w/
  - https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/
- Open Logic Project, *forall x: Calgary*:
  - https://forallx.openlogicproject.org/
