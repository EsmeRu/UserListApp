import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Avatar, IconButton, ActivityIndicator} from 'react-native-paper';
import {RootStackParamList} from '../../App';
import {useGetUser} from '../Hooks/useGetUser';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route, navigation}: DetailsProps) {
  const {id} = route.params;
  const {width} = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const user = useGetUser(id);

  return (
    <View style={[styles.detailContainer, {paddingTop: insets.top}]}>
      <IconButton
        icon="chevron-left"
        iconColor="#000"
        size={30}
        style={styles.returnIconButon}
        onPress={navigation.goBack}
      />
      {!user ? (
        <ActivityIndicator />
      ) : (
        <View
          style={[
            styles.informationContainer,
            {width: width - 20, height: width / 2},
          ]}>
          <Avatar.Image
            size={150}
            source={{uri: user.avatar}}
            style={styles.avatarImage}
          />
          <Text style={styles.name}>
            {`${user.first_name} ${user.last_name}`}
          </Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    alignItems: 'center',
  },
  returnIconButon: {
    alignSelf: 'flex-start',
    marginBottom: 70,
  },
  avatarImage: {
    elevation: 10,
    marginTop: -150,
    marginBottom: 20,
  },
  informationContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
  name: {
    fontWeight: '700',
    fontSize: 19.5,
    color: '#000',
  },
  email: {
    fontWeight: '300',
    fontSize: 16.5,
    color: '#000',
  },
});
