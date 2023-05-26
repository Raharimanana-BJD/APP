import { TouchableOpacity, Text } from "react-native";
import { styles } from "./ButtonConvert.style";

export function ButtonConvert({onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
