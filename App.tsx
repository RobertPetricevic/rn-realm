import './global.css';

import 'react-native-gesture-handler';

import RootStack from './navigation';
import { RealmProvider } from '@realm/react';
import { BookSchema } from 'schemas/BookSchema';

export default function App() {
  return (
    <RealmProvider schema={[BookSchema]}>
      <RootStack />
    </RealmProvider>
  );
}
