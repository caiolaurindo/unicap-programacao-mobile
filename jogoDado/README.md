# Jogo de dados

Jogo local para dois jogadores, desenvolvido com React Native e Expo SDK 57.

## Como rodar

Use Node.js 22.13 ou superior, conforme a [documentação do SDK 57](https://docs.expo.dev/versions/v57.0.0/).
Na raiz deste repositório:

```bash
cd jogoDado
npm install
npx expo start --go
```

Abra o Expo Go compatível com o SDK 57 no celular e leia o QR code exibido no terminal. O computador e o celular devem estar na mesma rede Wi-Fi. No iPhone, use a câmera para ler o QR code.

Outras opções, dentro da pasta `jogoDado`:

```bash
npm run web       # Abrir no navegador
npm run android   # Abrir no emulador Android configurado
npm run ios       # Abrir no simulador iOS (exige macOS e Xcode)
npx expo start --clear  # Reiniciar limpando o cache do Metro
npx expo start --go --tunnel  # Alternativa se a conexão pela rede local falhar
```

O modo tunnel requer internet e pode solicitar a instalação de `@expo/ngrok`.
Referência: [iniciar o desenvolvimento com Expo](https://docs.expo.dev/get-started/start-developing/).

## Regras

- O Jogador 1 começa cada rodada; depois joga o Jogador 2.
- Cada jogada sorteia dois dados, com valores de 1 a 6.
- A maior soma ganha um ponto. Empates não dão pontos.
- A partida termina após cinco rodadas, inclusive as empatadas.
- O maior placar vence; placares iguais resultam em empate geral.
- Ao terminar, os botões de jogar ficam desabilitados. Jogar Novamente restaura a primeira rodada, os dados e o placar.

## Organização e alterações

- `src/app/index.tsx`: abre o jogo e respeita a área segura da tela.
- `src/app/_layout.tsx`: oculta o cabeçalho padrão do Expo Router.
- `src/components/JogoDados.tsx`: controla turnos, dados, rodadas e placar. As funções também verificam se é a vez do jogador e se a partida terminou. A mensagem identifica a rodada concluída e é limpa na próxima jogada.
- `src/components/Dado.tsx`: mostra os ícones e seus valores em branco, para contraste com o fundo escuro.
- `src/components/styles.ts`: reúne os estilos enviados, incluindo sombras, cartões e botões verdes. O layout permite quebra de linha nos cartões e no placar para caber no celular. Usa `flexGrow` no conteúdo do ScrollView para permitir rolagem.
- `@expo/vector-icons`: dependência necessária para os ícones dos dados.

## Validação local

```bash
npx tsc --noEmit
npx expo install --check
npx expo export --platform web
```

Para conferir no aparelho, jogue cinco rodadas, verifique a alternância dos botões e o resultado final, toque em Jogar Novamente e confira se o placar voltou a zero. Confira também a rolagem em uma tela pequena.
