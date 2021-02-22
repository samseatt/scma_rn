import React, { Component } from 'react';
import { Text, View, StyleSheet, Modal, Button } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { tagBlue } from './Utils';

const mapStateToProps = state => {
    return {
      refs: state.refs
    }
}

// const mapDispatchToProps = dispatch => ({
//     // postRef: (refId, title, path) => dispatch(postRef(refId, title, path))
// })

function RenderRef(props) {

    // const ref = props.ref;
            
    // const renderCommentItem = ({item, index}) => {
        
    //     return (
    //         <View key={index} style={{margin: 10}}>
    //             <Text style={{fontSize: 14}}>{item.comment}</Text>
    //             <Rating imageSize={12} readonly startingValue={item.rating} style={styles.rating} />
    //             <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
    //         </View>
    //     );
    // };
    
    // console.log('ref2 = ', refr.refr.id);

    return (
            <Card>
                <Card.Title>Reference</Card.Title>
                <Card.Divider />
                <Text style={{margin: 10}}>
                    {tagBlue(props.refr.ref)}
                </Text>
                <Text style={{margin: 10}}>
                    {props.refr.title}
                </Text>
                <Text style={{margin: 10}}>
                    {props.refr.path}
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

class RefDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            refr: null,
            showModal: false,
            title: '',
            path: ''
        }
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    inputRef() {
        this.toggleModal();
    }

    handleEdit(refId) {
        // this.props.postComment(refId, this.state.title, this.state.path);
        console.log('handleEdit called with refId: ' + refId);
        this.resetForm();
    }

    resetForm() {
        this.setState({
            showModal: false,
            title: '',
            path: ''
       });
    }


    render() {

        const refId = this.props.route.params.refId;
        console.log('refid: ', refId);

        var refr=this.props.refs.refs.find(el => el.id === refId);

        // const ref = props.ref;

        return(
            <View>
                <RenderRef
                    // ref2={this.props.refs.refs[+refId]}
                    refr={refr}
                    // ref2={this.props.refs.refs[0]}
                    // favorite={this.props.favorites.some(el => el === dishId)}
                    // onPressFavorite={() => this.markFavorite(dishId)}
                    // onPressComment={() => this.inputComment(dishId)}
                    onPressEdit={() => this.inputRef(refId)}
                 />
                <Modal
                    animationType = {"slide"}
                    transparent = {false}
                    visible = {this.state.showModal}
                    onDismiss = {() => this.toggleModal() }
                    onRequestClose = {() => this.toggleModal() }>
                    <View style = {styles.modal}>
                        <Text style={styles.modalTitle}>Edit Reference</Text>
                        <Input
                            label='Title:'
                            value={refr.title}
                            style={styles.editTitle}
                            multiline={true}
                            onChangeText={(ref) => this.setState({title: ref})}
                        />
                        <Input
                            label='Url:'
                            value={refr.path}
                            style={styles.editUrl}
                            multiline={true}
                            onChangeText={(ref) => this.setState({path: ref})}
                        />
                        <Button 
                            onPress = {() =>{this.handleEdit(refId);}}
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
    }
  });
  
export default connect(mapStateToProps)(RefDetail);