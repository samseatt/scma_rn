import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, ScrollView, Modal, Button } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
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
        contents: state.contents,
        notes: state.notes,
        refs: state.refs
    }
}

const approveTitle = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const approveAbstract = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const approveImage = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const approveText = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const approveNote = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const approveRef = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const flagTitle = (rowMap, rowKey) => {
    console.log('Flag Acknowledged');
};

const flagAbstract = (rowMap, rowKey) => {
    console.log('Flag Acknowledged');
};

const flagImage = (rowMap, rowKey) => {
    console.log('Flag Acknowledged');
};

const flagText = (rowMap, rowKey) => {
    console.log('Flag Acknowledged');
};

const flagNote = (rowMap, rowKey) => {
    console.log('Flag Acknowledged');
};

const flagRef = (rowMap, rowKey) => {
    console.log('Flag Acknowledged');
};

const deleteTitle = (rowMap, rowKey) => {
    console.log('Delete Acknowledged');
};

const deleteAbstract = (rowMap, rowKey) => {
    console.log('Delete Acknowledged');
};

const deleteImage = (rowMap, rowKey) => {
    console.log('Delete Acknowledged');
};

const deleteText = (rowMap, rowKey) => {
    console.log('Delete Acknowledged');
};

const deleteNote = (rowMap, rowKey) => {
    console.log('Delete Acknowledged');
};

const deleteRef = (rowMap, rowKey) => {
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

class PageDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: null,
            showTitleModal: false,
            author: '',
            authority: '',
            text: ''
        }
    }

    toggleTitleModal() {
        this.setState({showTitleModal: !this.state.showTitleModal});
    }

    inputTitle() {
        this.toggleTitleModal();
    }

    handleEdit(contentId) {
        // this.props.postComment(contentId, this.state.title, this.state.path);
        console.log('handleEdit called with contentId: ' + contentId);
        this.resetForm();
    }

    resetForm() {
        this.setState({
            showTitleModal: false,
            title: '',
            path: ''
       });
    }

    render() {

        const contentId = this.props.route.params.contentId;
        if (contentId) {
            console.log('contentId: ', contentId)
            this.state.content = this.props.contents.contents.find(el => el.id === contentId);
        }
        else {
            const contentName = this.props.route.params.contentName;
            if (contentName) {
                console.log('contentName: ', contentName)
                this.state.content = this.props.contents.contents.find(el => el.name === contentName);
            }
        }
        // let noteText = this.state.note.text;
        var content=this.state.content;

        const { navigate } = this.props.navigation;

        const renderRef = data => (
            <TouchableHighlight
                // onPress={() => console.log('navigate2', navigate)}
                onPress={() => navigate('RefDetail', { contentId: data.item.id })}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>{tagBlue(data.item.ref)} {data.item.title}</Text>
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
                    <Text>{tagBlue(data.item.ref)} |{highlight(data.item.author)}| {data.item.text}</Text>
                </View>
            </TouchableHighlight>
        );
        
        // console.log('navigate', navigate);
        // console.log('navigation', this.props.navigation);

        if (this.props.contents.isLoading) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>Page Details</Card.Title>
                        <Loading />
                    </Card>
                </View>
            );
        }
        else if (this.props.contents.errMess) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>Page Details</Card.Title>
                        <Text>{this.props.contents.errMess}</Text>
                    </Card>
                </View>
            );
        }
        else {
            return (
                <ScrollView style={styles.container}>
                    <Card>
                        <Card.Title>Title</Card.Title>
                        <Card.Divider />
                        <Text style={{margin: 10}}>
                            {this.state.content.title}
                        </Text>
                        <Card.Divider />
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon
                                raised
                                reverse
                                name={'trash'}
                                type='font-awesome'
                                color='#d14020'
                                onPress={() => console.log('delete pressed')}
                                />
                            <Icon
                                raised
                                reverse
                                name={'flag'}
                                type='font-awesome'
                                color='#ff6600'
                                onPress={() => console.log('flag pressed')}
                                />
                            <Icon
                                raised
                                reverse
                                name={'pencil'}
                                type='font-awesome'
                                color='#336699'
                                // onPress={() => console.log('edit pressed')}
                                onPress={() => this.inputTitle(contentId)}
                                />
                            <Icon
                                raised
                                reverse
                                name='check'
                                type='font-awesome'
                                color='#339966'
                                style={styles.cardItem}
                                onPress={() => console.log('share pressed')}
                                />
                        </View>
                    </Card>
                    <Modal
                        animationType = {"slide"}
                        transparent = {false}
                        visible = {this.state.showTitleModal}
                        onDismiss = {() => this.toggleTitleModal() }
                        onRequestClose = {() => this.toggleTitleModal() }>
                        <View style = {styles.modal}>
                            <Text style={styles.modalTitle}>Edit Title</Text>
                            <Input
                                label='Title:'
                                value={content.title}
                                style={styles.editTitle}
                                multiline={true}
                                onChangeText={(ref) => this.setState({title: ref})}
                            />
                            <Button 
                                onPress = {() =>{this.handleEdit(contentId);}}
                                color="#512DA8"
                                title="Submit Changes" 
                                />
                            <Button 
                                onPress = {() =>{this.toggleTitleModal(); this.resetForm();}}
                                color="#444"
                                title="Cancel" 
                                />
                        </View>
                    </Modal>
                    <Card>
                        <Card.Title>Abstract</Card.Title>
                        <Card.Divider />
                        <Text style={{margin: 10}}>
                            {this.state.content.abstract[0].text}
                        </Text>
                        <Text style={{margin: 10}}>
                            {tagBlue('Author')} {this.state.content.abstract[0].author}
                        </Text>
                        <Text style={{margin: 10}}>
                            {tagBlue('Source')} {this.state.content.abstract[0].source}
                        </Text>
                        <Card.Divider />
                        <Text style={{margin: 10}}>
                            {this.state.content.abstract[0].text}
                        </Text>
                        <Text style={{margin: 10}}>
                            {tagBlue('Author')} {this.state.content.abstract[0].author}
                        </Text>
                        <Text style={{margin: 10}}>
                            {tagBlue('Source')} {this.state.content.abstract[0].source}
                        </Text>
                        <Card.Divider />
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon
                                raised
                                reverse
                                name={'trash'}
                                type='font-awesome'
                                color='#d14020'
                                onPress={() => console.log('delete pressed')}
                                />
                            <Icon
                                raised
                                reverse
                                name={'flag'}
                                type='font-awesome'
                                color='#ff6600'
                                onPress={() => console.log('flag pressed')}
                                />
                            <Icon
                                raised
                                reverse
                                name={'pencil'}
                                type='font-awesome'
                                color='#336699'
                                // onPress={() => console.log('edit pressed')}
                                // onPress={() => props.onPressEdit()}
                                />
                            <Icon
                                raised
                                reverse
                                name='check'
                                type='font-awesome'
                                color='#339966'
                                style={styles.cardItem}
                                onPress={() => console.log('share pressed')}
                                />
                        </View>
                    </Card>
                    <Card>
                        <Card.Title>Text</Card.Title>
                        <Card.Divider />
                        <Text style={{margin: 10}}>
                            {this.state.content.text[0]}
                        </Text>
                        <Text style={{margin: 10}}>
                            {this.state.content.text[1]}
                        </Text>
                        <Text style={{margin: 10}}>
                            {this.state.content.text[2]}
                        </Text>
                        <Text style={{margin: 10}}>
                            {this.state.content.text[3]}
                        </Text>
                        <Text style={{margin: 10}}>
                            {this.state.content.text[4]}
                        </Text>
                        <Card.Divider />
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon
                                raised
                                reverse
                                name={'trash'}
                                type='font-awesome'
                                color='#d14020'
                                onPress={() => console.log('delete pressed')}
                                />
                            <Icon
                                raised
                                reverse
                                name={'flag'}
                                type='font-awesome'
                                color='#ff6600'
                                onPress={() => console.log('flag pressed')}
                                />
                            <Icon
                                raised
                                reverse
                                name={'pencil'}
                                type='font-awesome'
                                color='#336699'
                                // onPress={() => console.log('edit pressed')}
                                // onPress={() => props.onPressEdit()}
                                />
                            <Icon
                                raised
                                reverse
                                name='check'
                                type='font-awesome'
                                color='#339966'
                                style={styles.cardItem}
                                onPress={() => console.log('approve pressed')}
                                />
                        </View>
                    </Card>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchContainer}>References on this Page</Text>
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
                        <Text style={styles.switchContainer}>Notes on this Page</Text>
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
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666',
        flex: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        flexWrap: 'wrap',
        backgroundColor: '#666',
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
    editTitle: {
        height: 200,
        flexWrap: 'wrap',
        overflow: "scroll",
    },
    editUrl: {
        height: 200,
        flexWrap: 'wrap',
        overflow: "scroll",
    },
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#336699',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
});

export default connect(mapStateToProps)(PageDetail);