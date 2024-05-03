## Regras de desenvolvimento

### Diretórios em "src":
- **assets:** Imagens ou arquivos a serem utlizados.

- **components:** Componentes padrões, compartilhavéis.

- **models:** Caso seja um objeto/entidade.

- **services:** Se faz parte da integração da UI com a API.

- **views:** A implementação de uma página.

Organização:
```
⤷components/
  LoginForm.js
⤷models/
  User.js
⤷services/
  userProfile.js
⤷views/
  UserProfile.jsx
```
### Identificadores:
- **id:** eu_sou_id

- **class:** euSouClasse

### Versionamento git
Cada **membro** terá uma **branch** para desenvolver sua task/funcionalidade
#### Teremos duas branch's principais:
- **"branch dev":**  Para teste, pode ser usada para realizar a mesclagem com as **branch's individuais de cada membro.**

- **"branch producão(main)":** Mesclagem permitida com outra branch **apenas** quando o membro tiver a **certeza** de que a task/funcionalidade trabalhada esta **funcionando corretamente**.
#### Padronização de commits | Flags para commit

- _**feat**_: uma nova feature (recurso) que você está adicionando a uma aplicação específica.
- _**fix**_: a resolução de um bug
- _**style**_: recurso e atualizações relacionadas à estilização.
- _**refactor**_: refatoração de uma seção específica da base de código.
- _**test**_: tudo o que for relacionado a testes.
- _**docs**_: tudo o que for relacionado à documentação.
- _**chore**_: manutenção regular do código.


_git commit -m "feat: iniciando a pag home"_
