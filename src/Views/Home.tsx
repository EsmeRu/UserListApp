import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useGetAllUsers} from '../Hooks/useGetAllUsers';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const users = useGetAllUsers();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        padding: 15,
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom,
      }}>
      <FlatList
        data={users}
        ListHeaderComponent={() => (
          <Text style={styles.headerUsers}>Users</Text>
        )}
        contentContainerStyle={[styles.cardContainer]}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('Details', {id: item.id.toString()})
            }>
            <List.Item
              style={styles.listItem}
              title={`${item.first_name} ${item.last_name}`}
              left={() => <List.Icon color="#00000080" icon="account-circle" />}
              right={() => <List.Icon color="#00000080" icon="chevron-right" />}
            />
          </Pressable>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  headerUsers: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    margin: 10,
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#00000033',
    borderBottomWidth: 0.5,
  },
});
