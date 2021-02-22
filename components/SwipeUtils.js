import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

        export const renderHiddenCat = (data, rowMap) => (
            <View style={swipeStyles.rowBack}>
                <TouchableOpacity
                    style={[swipeStyles.backRightBtn, swipeStyles.backRightBtnLeft]}
                    onPress={() => deletePage(rowMap, data.item.key)}
                >
                    <Text style={swipeStyles.backTextWhite}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[swipeStyles.backRightBtn, swipeStyles.backRightBtnMiddle]}
                    onPress={() => flagPage(data.item)}
                >
                    <Text style={swipeStyles.backTextWhite}>Flag</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[swipeStyles.backRightBtn, swipeStyles.backRightBtnRight]}
                    onPress={() => approvePage(rowMap, data.item.key)}
                >
                    <Text style={swipeStyles.backTextWhite}>Approve</Text>
                </TouchableOpacity>
            </View>
        );
        

const swipeStyles = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        flex: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        flexWrap: 'wrap',
        backgroundColor: '#444',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'flex-start',
        backgroundColor: '#ffffcc',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
        paddingLeft: 4,
        paddingRight: 4
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#99bbcc',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: '#d14020',
        right: 150,
    },
    backRightBtnMiddle: {
        backgroundColor: '#336699',
        // backgroundColor: '#6633cc',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#339966',
        right: 0,
    },
});