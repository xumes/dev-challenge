import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ErrorScene, UserList } from '../../components';

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  header: {
    flex: 1,
    backgroundColor: 'blue',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    marginRight: 20,
    borderRadius: 40,
    backgroundColor: 'blue',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 100,
    height: 100,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  userWrapper: { alignItems: 'center' },
  userId: { fontSize: 14, color: 'white' },
  userName: { fontSize: 24, color: 'white' },
  company: { backgroundColor: 'white' },
  friends: { flex: 1, backgroundColor: 'green' }
});

export default class UserScene extends PureComponent {
  // createQuery = id => {
  //   const query = gql`
  //     query User {
  //       user(id: "${id}") {
  //         id
  //         name
  //         color
  //         image
  //         friends {
  //           id
  //           name
  //         }
  //       }
  //     }
  // `;
  //     console.log("the query is", query)
  //   return query;
  // };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const user = navigation.getParam('user');

    // todo: 2. would be cool if we actually displayed full user data that is contained in the user data object.

    // todo: 3. would be extra cool to include their company info, and if you tap on it you can go that CompanyScene.
    // if this is done correctly, we should be re-using components from the CompaniesScene.

    // todo: 4. would be even cooler to see a list of their friends, so I can tap on them an get more info about that user.
    // todo: 5 would be cool to make the user name and email updateable and saved ot the database, so we can let our users change their info.
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: user.image }} />
          </View>
          <View style={styles.userWrapper}>
            <Text style={styles.userId}>{user.id}</Text>
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        </View>
        <View style={styles.company}>
          <Text>My Company </Text>
        </View>
        <View style={styles.friends}>
          <Text>Amigo</Text>
        </View>
      </View>
    );
  }
}
