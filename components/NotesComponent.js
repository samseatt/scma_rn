import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
// import { FlatList } from 'react-native';
// import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { tagBlue, highlight } from './Utils';
// import * as Animatable from 'react-native-animatable';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

const mapStateToProps = state => {
    return {
      notes: state.notes
    }
}

const approveNote = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const editNote = (item) => {
    console.log('Edit Acknowledged ' + item.id);
};

const deleteNote = (rowMap, rowKey) => {
    console.log('Delete Acknowledged');
    // closeRow(rowMap, rowKey);
    // const newData = [...listData];
    // const prevIndex = listData.findIndex(item => item.key === rowKey);
    // newData.splice(prevIndex, 1);
    // setListData(newData);
};

const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
};

const renderHiddenNote = (data, rowMap) => (
    <View style={styles.rowBack}>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => deleteNote(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnMiddle]}
            onPress={() => editNote(data.item)}
        >
            <Text style={styles.backTextWhite}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => approveNote(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Approve</Text>
        </TouchableOpacity>
    </View>
);

class Notes extends Component {

    render() {

        const { navigate } = this.props.navigation;

        const renderNote = data => (
            <TouchableHighlight
                // onPress={() => console.log('You touched me')}
                onPress={() => navigate('NoteDetail', { noteId: data.item.id })}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>{tagBlue(data.item.ref)} |{highlight(data.item.author)}| {data.item.text}</Text>
                </View>
            </TouchableHighlight>
        );
        
        // console.log('navigate', navigate);
        // console.log('navigation', this.props.navigation);

        if (this.props.notes.isLoading) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>Notes</Card.Title>
                        <Loading />
                    </Card>
                </View>
            );
        }
        else if (this.props.notes.errMess) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>Notes</Card.Title>
                        <Text>{this.props.notes.errMess}</Text>
                    </Card>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchContainer}>All Notes</Text>
                    </View>
                    <View style={styles.container}>
                        <SwipeListView
                            data={this.props.notes.notes}
                            renderItem={renderNote}
                            renderHiddenItem={renderHiddenNote}
                            rightOpenValue={-225}
                            previewRowKey={'0'}
                            previewOpenValue={-40}
                            previewOpenDelay={3000}
                            onRowDidOpen={onRowDidOpen}
                            />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
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
    
export default connect(mapStateToProps)(Notes);