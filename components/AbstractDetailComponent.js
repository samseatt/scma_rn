import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Abstract extends Component {

    static navigationOptions = {
        title: 'Approval Tasks'
    };

    render() {
        return(
            <View style={styles.container}>
                <Text>Abstract Component!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Abstract;