import { View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "./styles";

type DadoProps = {
  valor: number;
};

export default function Dado({ valor }: DadoProps) {
  function dadoImg(valor: number) {
    const dados: Record<number, string> = {
      1: "dice-one",
      2: "dice-two",
      3: "dice-three",
      4: "dice-four",
      5: "dice-five",
      6: "dice-six",
    };

    const icone = dados[valor];

    if (!icone) {
      return <Text style={styles.dado}>🎲</Text>;
    }

    return (
      <FontAwesome6
        name={icone}
        size={70}
        color="white"
      />
    );
  }

  return (
    <View style={styles.dadoContainer}>
      {dadoImg(valor)}
      <Text style={styles.valor}>{valor}</Text>
    </View>
  );
}

