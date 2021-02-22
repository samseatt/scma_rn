import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class TextDetail extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>TextDetail Component!</Text>
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
  
export default TextDetail;