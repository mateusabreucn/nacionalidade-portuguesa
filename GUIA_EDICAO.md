# ✏️ Guia de Edição de Conteúdo do Site

Este guia explica como alterar os textos do site de forma segura.  
**Só é necessário editar os arquivos listados abaixo.** Nunca edite outros arquivos.

---

## ⚠️ Regras Importantes (Leia Antes de Editar)

1. **Edite apenas o texto entre aspas `""`.**  
   Exemplo: `"Texto antigo"` → `"Texto novo"`

2. **Nunca apague vírgulas `,`, chaves `{}` ou colchetes `[]`.**  
   Se apagar, o site quebra.

3. **Nunca apague ou altere palavras como `tipo`, `texto`, `itens`, `nome`, etc.**  
   Essas palavras dizem ao sistema como o texto deve aparecer.

4. **Para usar aspas dentro do texto, use aspas simples `'` ou escape `\"`.**  
   Exemplo: `"Ele disse 'olá'"` ✅  
   Exemplo: `"Ele disse \"olá\""` ✅  
   Exemplo: `"Ele disse "olá""` ❌ (ISSO QUEBRA)

5. **Após editar, é necessário fazer deploy para as mudanças aparecerem no site.**

---

## 📁 Arquivos Editáveis

Todos os arquivos editáveis possuem o comentário no topo:

```
// ✅ É possível editar esse arquivo
```

### Tabela Resumo

| O que deseja alterar              | Arquivo para editar                                                 |
| --------------------------------- | ------------------------------------------------------------------- |
| Banner de Cookies                 | `app/components/CookieBanner/cookiesData.ts`                        |
| Biografia da perfil               | `app/components/Perfil/Biografia/biosData.ts`                       |
| Feedbacks de clientes             | `app/components/Perfil/Feedback/feedbacksData.ts`                   |
| Página de Política de Privacidade | `app/components/PoliticaPrivacidade/dadosPoliticaPrivacidade.ts`    |
| Página de Nacionalidade           | `app/components/Servicos/Nacionalidade/dadosNacionalidade.ts`       |
| Página de Empresas                | `app/components/Servicos/Empresas/dadosEmpresas.ts`                 |
| Página de Família e Sucessões     | `app/components/Servicos/FamiliaSucessoes/dadosFamiliaSucessoes.ts` |

---

## 📝 Como Editar Cada Arquivo

---

### 1. Banner de Cookies — `CookieBanner/cookiesData.ts`

Este arquivo controla todos os textos do banner de cookies que aparece na parte de baixo do site.

**Exemplo — Alterar o texto principal do banner:**

```
ANTES:
textoPrincipalDoBanner: "O nosso site utiliza cookies para analisar o tráfego...",

DEPOIS:
textoPrincipalDoBanner: "Utilizamos cookies para melhorar a sua experiência...",
```

**Exemplo — Alterar o texto de um botão:**

```
ANTES:
aceitarTodos: "Aceitar Todos",

DEPOIS:
aceitarTodos: "Aceitar Cookies",
```

**O que cada campo significa:**

| Campo                                  | Onde aparece                             |
| -------------------------------------- | ---------------------------------------- |
| `textoPrincipalDoBanner`               | Texto grande ao lado do ícone do cookie  |
| `textoDoLinkDaPolitica`                | Link para a política de privacidade      |
| `textosDosBotoes.gerirCookies`         | Botão "Gerir Cookies"                    |
| `textosDosBotoes.fecharGerenciamento`  | Botão quando o gerenciamento está aberto |
| `textosDosBotoes.aceitarTodos`         | Botão verde "Aceitar Todos"              |
| `textosDosBotoes.salvarPreferencias`   | Botão "Salvar Preferências"              |
| `textosDosBotoes.recusarTodos`         | Botão "Recusar Todos"                    |
| `tituloDoGerenciamento`                | Título da seção de gerenciamento         |
| `opcoesDeCookies[...].tituloDaOpcao`   | Nome de cada opção de cookie             |
| `opcoesDeCookies[...].textoDescritivo` | Descrição de cada opção                  |

---

### 2. Biografia da Perfil — `biosData.ts`

Este arquivo contém os dados da profissional exibidos na seção "Perfil".

**Exemplo — Alterar o nome ou cargo:**

```
ANTES:
name: "Amanda Cecília Dantas",
role: "Solicitadora",

DEPOIS:
name: "Amanda C. Dantas",
role: "Solicitadora e Consultora",
```

**O que cada campo significa:**

| Campo       | Onde aparece                                      |
| ----------- | ------------------------------------------------- |
| `name`      | Nome exibido no card                              |
| `role`      | Cargo exibido abaixo do nome                      |
| `areas`     | Lista de áreas de atuação                         |
| `text`      | Texto da biografia (use `\n` para quebrar linhas) |
| `avatarSrc` | Caminho da foto (não alterar sem necessidade)     |

---

### 3. Feedbacks de Clientes — `feedbacksData.ts`

Este arquivo contém os depoimentos dos clientes. É uma **lista** (array), ou seja, pode adicionar, remover ou editar depoimentos.

**Exemplo — Editar o texto de um depoimento:**

```
ANTES:
text: "Quando procurei a doutora Amanda, eu estava..."

DEPOIS:
text: "A doutora Amanda me ajudou muito com..."
```

**Exemplo — Adicionar um novo depoimento (copie o bloco e cole no final da lista):**

```
{
  name: "Nome do Cliente",
  city: "Cidade",
  text: "Texto do depoimento aqui...",
  avatarSrc: "/Icons/Feedback/ProfileMan.png",
},
```

> 💡 **Dica:** Use `ProfileMan.png` para homem e `ProfileWoman.png` para mulher.

> ⚠️ **Atenção:** Não esqueça a vírgula `,` no final do bloco `}` ao adicionar mais um item.

**O que cada campo significa:**

| Campo       | Onde aparece                                |
| ----------- | ------------------------------------------- |
| `name`      | Nome do cliente                             |
| `city`      | Cidade do cliente                           |
| `text`      | Depoimento (use `\n\n` para parágrafo novo) |
| `avatarSrc` | Foto do perfil                              |

---

### 4. Páginas de Conteúdo — Política, Nacionalidade, Empresas, Família

Estas páginas usam um sistema de **blocos**. Cada bloco tem um `tipo` que determina como ele aparece no site. Abaixo está o que cada tipo faz:

| Tipo              | O que faz                        | Exemplo                                                              |
| ----------------- | -------------------------------- | -------------------------------------------------------------------- |
| `"titulo"`        | Cria um título grande            | `{ tipo: "titulo", texto: "Meu Título" }`                            |
| `"subtitulo"`     | Cria um subtítulo menor          | `{ tipo: "subtitulo", texto: "Subtítulo" }`                          |
| `"paragrafo"`     | Cria um parágrafo de texto       | `{ tipo: "paragrafo", texto: "Texto aqui..." }`                      |
| `"lista"`         | Cria lista de itens com bolinhas | `{ tipo: "lista", itens: ["Item 1", "Item 2"] }`                     |
| `"listaComIntro"` | Parágrafo seguido de lista       | `{ tipo: "listaComIntro", intro: "Introdução:", itens: ["A", "B"] }` |
| `"separador"`     | Cria uma linha divisória         | `{ tipo: "separador" }`                                              |

**Exemplo — Alterar o texto de um parágrafo:**

```
ANTES:
{ tipo: "paragrafo", texto: "Texto antigo aqui..." },

DEPOIS:
{ tipo: "paragrafo", texto: "Texto novo aqui..." },
```

**Exemplo — Adicionar um item a uma lista:**

```
ANTES:
itens: [
  "Item 1",
  "Item 2",
],

DEPOIS:
itens: [
  "Item 1",
  "Item 2",
  "Item 3 (novo)",
],
```

**Exemplo — Adicionar uma nova seção inteira:**

```
{ tipo: "separador" },
{ tipo: "titulo", texto: "Nova Seção" },
{ tipo: "paragrafo", texto: "Texto da nova seção..." },
```

> ⚠️ **Atenção:** Cada bloco `{ ... }` deve terminar com vírgula `,`.

---

## ❌ O Que NÃO Fazer

- ❌ Não editar arquivos `.tsx` (são os componentes visuais)
- ❌ Não apagar `import` (as linhas no topo com "import")
- ❌ Não apagar `export` (as linhas com "export")
- ❌ Não renomear os arquivos
- ❌ Não alterar campos como `tipo`, `id`, ou `avatarSrc` sem orientação

---

## ✅ O Que PODE Fazer

- ✅ Alterar qualquer texto entre aspas `""`
- ✅ Adicionar novos itens a listas (seguindo o padrão)
- ✅ Adicionar novos blocos de conteúdo nas páginas
- ✅ Adicionar novos feedbacks de clientes
- ✅ Remover feedbacks antigos (apagar o bloco inteiro `{ ... },`)

---

## 🆘 Em Caso de Dúvida

Se algo der errado após uma edição:

1. **Desfaça a alteração** (Ctrl+Z)
2. **Verifique se falta vírgula, aspas ou chave**
3. Se o site apresentar erro, consulte o desenvolvedor
