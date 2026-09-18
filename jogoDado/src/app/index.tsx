import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import JogoDados from "../components/JogoDados";
import { styles } from "../components/styles";

export default function Index() {
  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar style="light" />
      <JogoDados />
    </SafeAreaView>
  );
}
