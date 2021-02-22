import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ImageDetail extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text>ImageDetail Component!</Text>
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
  
export default ImageDetail;