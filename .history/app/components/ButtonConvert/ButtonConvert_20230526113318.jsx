import { TouchableOpacity, Text } from "react-native";
import { styles } from "./ButtonConvert.style";

export function ButtonConvert({onPress, unit }) {
  return (
    <TouchableOpacit onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Convertir en {unit}</Text>
    </TouchableOpacit/>
  );
}
