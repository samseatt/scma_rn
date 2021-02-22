import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { tagBlue, highlight} from './Utils';

const mapStateToProps = state => {
    return {
      categories: state.categories
    }
}

function RenderCategory(props) {

    return (
        <Card>
            <Card.Title>Category</Card.Title>
            <Card.Divider />
            <Text style={{margin: 10}}>
                {tagBlue(props.category.name)} {props.category.title}
            </Text>
        </Card>
    );
}

const approvePage = (rowMap, rowKey) => {
    console.log('Approval Acknowledged');
};

const flagPage = (item) => {
    console.log('Flag Acknowledged ' + item.id);
};
const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
};

const renderHiddenCategory = (data, rowMap) => (
    <View style={styles.rowBack}>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={() => deletePage(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnMiddle]}
            onPress={() => flagPage(data.item)}
        >
            <Text style={styles.backTextWhite}>Flag</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => approvePage(rowMap, data.item.key)}
        >
            <Text style={styles.backTextWhite}>Approve</Text>
        </TouchableOpacity>
    </View>
);

class CategoryDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: null
        }
    }

    render() {


        const { navigate } = this.props.navigation;

        const renderCategory = data => (
            <TouchableHighlight
                // onPress={() => console.log('You touched me')}
                onPress={() => navigate('PageDetail', { contentName: data.item.name })}
                style={styles.rowFront}
                underlayColor={'#AAA'}
            >
                <View>
                    <Text>{tagBlue(data.item.name)} |{highlight(data.item.path)}| {data.item.title}</Text>
                </View>
            </TouchableHighlight>
        );

        const catId = this.props.route.params.catId;
        console.log('catId: ', catId)
        this.state.category = this.props.categories.categories.find(el => el.id === catId);
        // let noteText = this.state.note.text;

        // const note = props.note;

        if (this.props.categories.isLoading) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>Site Category</Card.Title>
                        <Loading />
                    </Card>
                </View>
            );
        }
        else if (this.props.categories.errMess) {
            return(
                <View>
                    <Card>
                        <Card.Title style={{margin: 20}}>Site Category</Card.Title>
                        <Text>{this.props.categories.errMess}</Text>
                    </Card>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <RenderCategory
                        // note2={this.props.notes.notes[+noteId]}
                        category={this.state.category}
                        // note2={this.props.notes.notes[0]}
                        // favorite={this.props.favorites.some(el => el === dishId)}
                        // onPressFavorite={() => this.markFavorite(dishId)}
                        // onPressComment={() => this.inputComment(dishId)}
                        // onPressEdit={() => this.inputCategory(catId)}
                    />
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchContainer}>Pages in this Category</Text>
                    </View>
                    <View style={styles.container}>
                        <SwipeListView
                            data={this.state.category.subjects}
                            renderItem={renderCategory}
                            renderHiddenItem={renderHiddenCategory}
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
  
export default connect(mapStateToProps)(CategoryDetail);