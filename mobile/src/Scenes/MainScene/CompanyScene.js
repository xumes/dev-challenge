import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
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
  companyWrapper: { alignItems: 'center' },
  companyId: { fontSize: 14, color: 'white' },
  companyName: { fontSize: 24, color: 'white' },
  companyHeader: { color: '#FFDEAD' },
  company: { backgroundColor: '#4169E1' },
  employeesHeader: { color: '#008080', fontWeight: 'bold' },
  employees: {
    flex: 1,
    backgroundColor: 'lightgoldenrodyellow',
    paddingLeft: 20,
    fontWeight: 'bold'
  }
});

export default class CompanyScene extends PureComponent {
  createQuery = id => {
    const query = gql`
      query Company {
        company(id: "${id}") {
          id
          employees {
            id
            image
            name
            email
            color
          }
        }
      }
  `;
    return query;
  };
  render() {
    // todo: 2. would be really cool to show the company info here.
    // todo: 3. would be extra cool to show the employee list and make it navigate to that user on tap.
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const company = navigation.getParam('company');

    const qryEmployees = this.createQuery(id);
    return (
      <View style={styles.wrapper}>
        <View style={[styles.header, { backgroundColor: company.color }]}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: company.image }} />
          </View>
          <View style={styles.companyWrapper}>
            <Text style={styles.companyId}>{company.id}</Text>
            <Text style={styles.companyName}>{company.name}</Text>
          </View>
        </View>
        <View style={styles.employees}>
          <Text style={styles.employeesHeader}>List of employees</Text>
          <Query query={qryEmployees}>
            {({ loading, error, data }) => {
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return <ErrorScene message={error.message} />;
              }

              return (
                <FlatList
                  data={data.company.employees}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('UserScene', {
                          id: item.id,
                          user: item
                        })
                      }
                    >
                      <UserList user={item} />
                    </TouchableOpacity>
                  )}
                />
              );
            }}
          </Query>
        </View>
      </View>
    );
  }
}
