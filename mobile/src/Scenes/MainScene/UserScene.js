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
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    marginRight: 20,
    borderRadius: 40,
    backgroundColor: '#4169E1',
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
  userMail: { fontSize: 14, color: 'white' },
  userName: { fontSize: 24, color: 'white' },
  companyHeader: {color: '#FFDEAD'},
  company: { backgroundColor: '#4169E1' },
  friendsHeader: {color: '#008080', fontWeight: 'bold'},
  friends: { flex: 1, backgroundColor: 'lightgoldenrodyellow' }
});

export default class UserScene extends PureComponent {
  createQuery = id => {
    const query = gql`
      query User {
        user(id: "${id}") {
          id
          friends {
            id
            image
            name
            email
          }
        }
      }
  `;
    console.log('the query is', query);
    return query;
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const user = navigation.getParam('user');
    const firstName = user.name.split(' ').slice(0, -1).join(' ');

    const qryFriends = this.createQuery(id);
    // todo: 2. would be cool if we actually displayed full user data that is contained in the user data object.

    // todo: 3. would be extra cool to include their company info, and if you tap on it you can go that CompanyScene.
    // if this is done correctly, we should be re-using components from the CompaniesScene.

    // todo: 4. would be even cooler to see a list of their friends, so I can tap on them an get more info about that user.
    // todo: 5 would be cool to make the user name and email updateable and saved ot the database, so we can let our users change their info.
    return (
      <View style={styles.wrapper}>
        <View style={[styles.header, {backgroundColor: user.color}]}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: user.image }} />
          </View>
          <View style={styles.userWrapper}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userMail}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.company}>
          <Text style={styles.companyHeader}>My Company </Text>
        </View>
        <View style={styles.friends}>
          <Text style={styles.friendsHeader}>{firstName}`s  friends</Text>
          <Query query={qryFriends}>
            {({ loading, error, data }) => {
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return <ErrorScene message={error.message} />;
              }

              console.log('list of friends', data.user.friends);

              return (
                <FlatList
                  data={data.user.friends}
                  renderItem={({ item }) => <UserList user={item} />}
                />
              );
            }}
          </Query>
        </View>
      </View>
    );
  }
}
