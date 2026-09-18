import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";

import Dado from "./Dado";
import { styles } from "./styles";

export default function JogoDados() {
  const [p1d1, setP1d1] = useState(1);
  const [p1d2, setP1d2] = useState(1);
  const [p2d1, setP2d1] = useState(1);
  const [p2d2, setP2d2] = useState(1);

  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState(1);
  const [resultado, setResultado] = useState("");

  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);

  const jogoFinalizado = rodada > 5;

  const soma1 = p1d1 + p1d2;
  const soma2 = p2d1 + p2d2;

  const jogarP1 = () => {
    if (turno !== 1 || jogoFinalizado) return;
    setResultado("");
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    setP1d1(d1);
    setP1d2(d2);

    setTurno(2);
  };

  const jogarP2 = () => {
    if (turno !== 2 || jogoFinalizado) return;
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    setP2d1(d1);
    setP2d2(d2);

    const somaP1 = p1d1 + p1d2;
    const somaP2 = d1 + d2;

    if (somaP1 > somaP2) {
      setResultado(`Jogador 1 venceu a rodada ${rodada}!`);
      setPontos1((prev) => prev + 1);
    } else if (somaP2 > somaP1) {
      setResultado(`Jogador 2 venceu a rodada ${rodada}!`);
      setPontos2((prev) => prev + 1);
    } else {
      setResultado(`Empate na rodada ${rodada}!`);
    }

    setTurno(1);
    setRodada((prev) => prev + 1);
  };

  const resetar = () => {
    setRodada(1);
    setPontos1(0);
    setPontos2(0);
    setResultado("");
    setTurno(1);

    setP1d1(1);
    setP1d2(1);
    setP2d1(1);
    setP2d2(1);
  };

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.mainGame}>
      <Text style={styles.titulo}>
        Rodada: {rodada <= 5 ? rodada : 5}
      </Text>

      {!jogoFinalizado && (
        <Text style={styles.resultadoTexto}>Vez do Jogador {turno}</Text>
      )}

      <View style={styles.playerContainer}>
        {/* PLAYER 1 */}
        <View style={styles.player}>
          <Text style={styles.playerTitulo}>Jogador 1</Text>

          <Text style={styles.soma}>
            Soma: {soma1}
          </Text>

          <View style={styles.dados}>
            <Dado valor={p1d1} />
            <Dado valor={p1d2} />
          </View>

          <Pressable
            style={[
              styles.botao,
              (turno !== 1 || jogoFinalizado) &&
                styles.botaoDesabilitado,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Jogar dados do Jogador 1"
            onPress={jogarP1}
            disabled={turno !== 1 || jogoFinalizado}
          >
            <Text style={styles.botaoTexto}>
              Jogar
            </Text>
          </Pressable>
        </View>

        {/* PLAYER 2 */}
        <View style={styles.player}>
          <Text style={styles.playerTitulo}>Jogador 2</Text>

          <Text style={styles.soma}>
            Soma: {soma2}
          </Text>

          <View style={styles.dados}>
            <Dado valor={p2d1} />
            <Dado valor={p2d2} />
          </View>

          <Pressable
            style={[
              styles.botao,
              (turno !== 2 || jogoFinalizado) &&
                styles.botaoDesabilitado,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Jogar dados do Jogador 2"
            onPress={jogarP2}
            disabled={turno !== 2 || jogoFinalizado}
          >
            <Text style={styles.botaoTexto}>
              Jogar
            </Text>
          </Pressable>
        </View>
      </View>

      {/* RESULTADO */}
      <View style={styles.resultado}>
        <Text style={styles.resultadoTexto}>
          {resultado}
        </Text>

        <View style={styles.placar}>
          <Text style={styles.placarTexto}>
            Jogador 1: {pontos1} pontos
          </Text>

          <Text style={styles.placarTexto}>
            Jogador 2: {pontos2} pontos
          </Text>
        </View>

        {/* FINAL DO JOGO */}
        {jogoFinalizado && (
          <View style={styles.final}>
            <Text style={styles.finalTexto}>
              {pontos1 > pontos2
                ? "Jogador 1 venceu o jogo!"
                : pontos2 > pontos1
                  ? "Jogador 2 venceu o jogo!"
                  : "Empate geral!"}
            </Text>

            <Pressable
              style={styles.botao}
              accessibilityRole="button"
              onPress={resetar}
            >
              <Text style={styles.botaoTexto}>
                Jogar Novamente
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

