import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet, Animated, TouchableOpacity, Alert } from 'react-native';
import { ListItem, Avatar, Card } from 'react-native-elements';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

class Posts extends Component {

    static navigationOptions = {
        title: 'External Posts'
    };

    render() {

        const rightButton = (progress, dragX) => {
            const scale = dragX.interpolate({
                inputRange: [-100, 0],
                outputRange: [0.7, 0]
            })
            return(
                <TouchableOpacity onPress={() => {
                    Alert.alert(
                        'Delete Favorite?',
                        'Are you sure you wish to delete the favorite dish ?',
                        [
                            { 
                                text: 'Cancel', 
                                onPress: () => console.log(' Not Deleted'),
                                style: ' cancel'
                            },
                            {
                                text: 'OK',
                                onPress: () => console.log(' Deleted')
                            }
                        ],
                        { cancelable: false }
                    );                        
                }}>
                    <View style={{flex:1, backgroundColor: 'red', justifyContent: 'center'}}>
                        <Animated.Text style={{color: 'white', paddingHorizontal: 10,
                                fontWeight:'600', transform: [{scale}]}}>
                                    Delete
                        </Animated.Text>
                    </View>
                </TouchableOpacity>
            );
        }


        return(
            <ScrollView >
            <Swipeable renderRightActions={rightButton}>
                <ListItem
                    key="0"
                    >
                   <ListItem.Content>
                        <ListItem.Title>First Post</ListItem.Title>
                        <ListItem.Subtitle>First Sub</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                </Swipeable>
                <Swipeable renderRightActions={rightButton}>
                <ListItem
                    key="1"
                    >
                   <ListItem.Content>
                        <ListItem.Title>First Item</ListItem.Title>
                        <ListItem.Subtitle>First Sub</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                </Swipeable>
                <Swipeable renderRightActions={rightButton}>
                <ListItem
                    key="2"
                    >
                   <ListItem.Content>
                        <ListItem.Title>First Item</ListItem.Title>
                        <ListItem.Subtitle>First Sub</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
             </Swipeable>
             </ScrollView>
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
  
export default Posts;