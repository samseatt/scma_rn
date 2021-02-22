import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal, Button, TextInput } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { tagBlue} from './Utils';

const mapStateToProps = state => {
    return {
      notes: state.notes
    }
}

function RenderNote(props) {

    return (
            <Card>
                <Card.Title>Note</Card.Title>
                <Card.Divider />
                <Text style={{margin: 10}}>
                    {tagBlue(props.note.ref)}
                </Text>
                <Text style={{margin: 10}}>
                    {props.note.author}
                </Text>
                <Text style={{margin: 10}}>
                    {props.note.authority}
                </Text>
                <Text style={{margin: 10}}>
                    {props.note.text}
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
                            onPress={() => props.onPressEdit()}
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
    );
}

class NoteDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            note: null,
            showModal: false,
            author: '',
            authority: '',
            text: ''
        }
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    inputNote() {
        this.toggleModal();
    }

    handleEdit(noteId) {
        // this.props.postComment(refId, this.state.title, this.state.path);
        console.log('handleEdit called with refId: ' + noteId);
        this.resetForm();
    }

    resetForm() {
        this.setState({
            showModal: false,
            author: '',
            authority: '',
            text: ''
       });
    }

    render() {

        const noteId = this.props.route.params.noteId;
        console.log('noteid: ', noteId)
        this.state.note = this.props.notes.notes.find(el => el.id === noteId);
        let noteText = this.state.note.text;

        // const note = props.note;

        return(
            <View>
                <RenderNote
                    // note2={this.props.notes.notes[+noteId]}
                    note={this.state.note}
                    // note2={this.props.notes.notes[0]}
                    // favorite={this.props.favorites.some(el => el === dishId)}
                    // onPressFavorite={() => this.markFavorite(dishId)}
                    // onPressComment={() => this.inputComment(dishId)}
                    onPressEdit={() => this.inputNote(noteId)}
                />
                <Modal
                    animationType = {"slide"}
                    transparent = {false}
                    visible = {this.state.showModal}
                    onDismiss = {() => this.toggleModal() }
                    onRequestClose = {() => this.toggleModal() }>
                    <View style = {styles.modal}>
                        <Text style={styles.modalTitle}>Edit Note</Text>
                        <Input
                            label='Author:'
                            value={this.state.note.author}
                            onChangeText={(ref) => this.setState({author: ref})}
                        />
                        <Input
                            label='Authority:'
                            value={this.state.note.authority}
                            onChangeText={(ref) => this.setState({authority: ref})}
                        />
                        <Input
                            label='Note Text'
                            value={noteText}
                            style={styles.editNotesText}
                            multiline={true}
                            onChangeText={(ref) => this.setState({text: ref})}
                        />
                        <Button 
                            onPress = {() =>{this.handleEdit(noteId);}}
                            color="#512DA8"
                            title="Submit Changes" 
                            />
                        <Button 
                            onPress = {() =>{this.toggleModal(); this.resetForm();}}
                            color="#444"
                            title="Cancel" 
                            />
                    </View>
                </Modal>
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
    editNotesText: {
        height: 300,
        flexWrap: 'wrap',
        overflow: "scroll",
    },
    // modalTitle: {
    //     fontSize: 18,
    //     color: '#512DA8'
    // },
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
    }
});
  
export default connect(mapStateToProps)(NoteDetail);