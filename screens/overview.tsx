import { ScreenContent } from 'components/ScreenContent';
import { reloadAppAsync } from 'expo';
import { StyleSheet, View } from 'react-native';

import { Button } from '../components/Button';

export default function Overview() {
  return (
    <View style={styles.container}>
      <ScreenContent path="screens/overview.tsx" title="Overview" />
      <Button onPress={() => reloadAppAsync()} title="Reload app" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
