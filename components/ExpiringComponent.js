import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
// import { FlatList } from 'react-native';
// import { ListItem, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { tagRed, tagBlue, tagOrange, highlight } from './Utils';
// import * as Animatable from 'react-native-animatable';
// import Swipeable from 'react-native-gesture-handler/Swipeable';

const mapStateToProps = state => {
    return {
      refs: state.refs,
      notes: state.notes
    }
}

const approveRef = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const approveNote = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const flagRef = (item) => {
    console.log('Flag Acknowledged ' + item.id);
};

const flagNote = (item) => {
    console.log('Flag Acknowledged ' + item.id);
};

const deleteRef = (rowMap, rowKey) => {
    console.log('Delete Acknowledged');
    // closeRow(rowMap, rowKey);
    // const newData = [...listData];
    // const prevIndex = listData.findIndex(item => item.key === rowKey);
    // newData.splice(prevIndex, 1);
    // setListData(newData);
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

// const renderRef = data => (
//     <TouchableHighlight
//         onPress={() => console.log('navigate2', this.props.navigate)}
//         // onPress={() => navigate('RefDetail', { refId: data.item.id })}
//         style={styles.rowFront}
//         underlayColor={'#AAA'}
//     >
//         <View>
//             <Text>{tagBlue(data.item.ref)} {data.item.title}</Text>
//         </View>
//     </TouchableHighlight>
// );

const renderHiddenRef = (data, rowMap) => (
    <View style={styles.rowBack}>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => deleteRef(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnMiddle]}
            onPress={() => flagRef(data.item)}
        >
            <Text style={styles.backTextWhite}>Flag</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => approveRef(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Approve</Text>
        </TouchableOpacity>
    </View>
);

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
            onPress={() => flagNote(data.item)}
        >
            <Text style={styles.backTextWhite}>Flag</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => approveNote(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Approve</Text>
        </TouchableOpacity>
    </View>
);

class Expiring extends Component {

    render() {

        const { navigate } = this.props.navigation;

        const renderRef = data => (
            <TouchableHighlight
                // onPress={() => console.log('navigate2', navigate)}
                onPress={() => navigate('RefDetail', { refId: data.item.id })}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>{tagRed(data.item.ref)} {data.item.title}</Text>
                </View>
            </TouchableHighlight>
        );
        
        const renderNote = data => (
            <TouchableHighlight
                // onPress={() => console.log('You touched me')}
                onPress={() => navigate('NoteDetail', { noteId: data.item.id })}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>{tagRed(data.item.ref)} |{highlight(data.item.author)}| {data.item.text}</Text>
                </View>
            </TouchableHighlight>
        );
        
        // console.log('navigate', navigate);
        // console.log('navigation', this.props.navigation);

        if (this.props.refs.isLoading) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>To Approve</Card.Title>
                        <Loading />
                    </Card>
                </View>
            );
        }
        else if (this.props.refs.errMess) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>To Approve</Card.Title>
                        <Text>{this.props.refs.errMess}</Text>
                    </Card>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchContainer}>Expiring References</Text>
                    </View>
                    <View style={styles.container}>
                        <SwipeListView
                            data={this.props.refs.refs}
                            renderItem={renderRef}
                            renderHiddenItem={renderHiddenRef}
                            rightOpenValue={-225}
                            previewRowKey={'0'}
                            previewOpenValue={-40}
                            previewOpenDelay={3000}
                            onRowDidOpen={onRowDidOpen}
                            />
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchContainer}>Expiring Notes</Text>
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
        backgroundColor: '#ff6600',
        // backgroundColor: '#6633cc',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#339966',
        right: 0,
    },
});

export default connect(mapStateToProps)(Expiring);