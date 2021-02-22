import React, { Component } from 'react';
import { View, Platform, Text, ScrollView, SafeAreaView, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Pages from './PagesComponent';
import Notes from './NotesComponent';
import Refs from './RefsComponent';
import Posts from './PostsComponent';
import Recent from './RecentComponent';
import Expiring from './ExpiringComponent';
import Approval from './ApprovalComponent';
import CategoryDetail from './CategoryDetailComponent';
import ViewAll from './ViewAllComponent';
import Deleted from './DeletedComponent';
import RefDetail from './RefDetailComponent';
import NoteDetail from './NoteDetailComponent';
import PageDetail from './PageDetailComponent';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchConfigs, fetchCategories, fetchContents, fetchPosts, fetchNotes, fetchRefs, fetchFeedback, fetchFlow } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    configs: state.configs,
    categories: state.categories,
    contents: state.contents,
    notes: state.notes,
    refs: state.refs,
    feedback: state.feedback,
    posts: state.posts,
    flow: state.flow
  }
}

const mapDispatchToProps = dispatch => ({
  fetchConfigs: () => dispatch(fetchConfigs()),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchContents: () => dispatch(fetchContents()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchRefs: () => dispatch(fetchRefs()),
  fetchFeedback: () => dispatch(fetchFeedback()),
  fetchFlow: () => dispatch(fetchFlow()),
  fetchPosts: () => dispatch(fetchPosts())
})


// class Main extends Component {
  

//   render() {
//     return (
//       // <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
//       <View style={styles.container}>
//         <Text>Welcome to SCMA Main Component!</Text>
//         {/* <StatusBar style="auto" /> */}
//       </View>
//     )
//   }
// }

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ApprovalNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Approval"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                  // backgroundColor: '#cc0000'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Approval" component={Approval} options={{ title: 'Require Attention' }} />
              <Stack.Screen name="RefDetail" component={RefDetail} options={{ title: 'Reference Details' }}/>
              <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ title: 'Note Details' }}/>
          </Stack.Navigator>
  );
}

// function ReviewNavigator() {
//   return (
//           <Stack.Navigator
//             initialRouteName="Review"
//             screenOptions={{
//                 headerShown: true,
//                 headerStyle: {
//                   backgroundColor: '#d14020'
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontWeight: 'bold'
//                 }
//             }}
//           >
//               <Stack.Screen name="Review" component={Review} />
//           </Stack.Navigator>
//   );
// }

function RecentNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Recent"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Recent" component={Recent} options={{ title: 'Recent Changes' }}/>
              <Stack.Screen name="RefDetail" component={RefDetail} options={{ title: 'Reference Details' }}/>
              <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ title: 'Note Details' }}/>
          </Stack.Navigator>
  );
}

function ExpiringNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Expiring"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Expiring" component={Expiring} options={{ title: 'Expiring Soon' }}/>
              <Stack.Screen name="RefDetail" component={RefDetail} options={{ title: 'Reference Details' }}/>
              <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ title: 'Note Details' }}/>
          </Stack.Navigator>
  );
}

function ViewerNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="ViewAll"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="ViewAll" component={ViewAll} options={{ title: 'Full Site' }} />
              <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{ title: 'Site Category' }} />
              <Stack.Screen name="PageDetail" component={PageDetail} options={{ title: 'Page Details' }}/>
              <Stack.Screen name="RefDetail" component={RefDetail} options={{ title: 'Reference Details' }}/>
              <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ title: 'Note Details' }}/>
          </Stack.Navigator>
  );
}

function DeletedNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Deleted"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Deleted" component={Deleted} options={{ title: 'Deleted Items' }}/>
              <Stack.Screen name="RefDetail" component={RefDetail} options={{ title: 'Reference Details' }}/>
              <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ title: 'Note Details' }}/>
          </Stack.Navigator>
  );
}

function PostsNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Posts"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Posts" component={Posts} />
          </Stack.Navigator>
  );
}

function PagesNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Pages"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Pages" component={Pages} />
              <Stack.Screen name="PageDetail" component={PageDetail} options={{ title: 'Page Details' }}/>
              <Stack.Screen name="RefDetail" component={RefDetail} options={{ title: 'Reference Details' }}/>
              <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ title: 'Note Details' }}/>
          </Stack.Navigator>
  );
}

function NotesNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Notes"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Notes" component={Notes} />
              <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ title: 'Note Details' }}/>
          </Stack.Navigator>
  );
}

function RefsNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Refs"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#d14020'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
            }}
          >
              <Stack.Screen name="Refs" component={Refs} />
              <Stack.Screen name="RefDetail" component={RefDetail} options={{ title: 'References Details' }}/>
          </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={styles.drawerHeader}>
            <View style={{flex:1}}>
              <Image source={require('./images/aelogo_black70.gif')} style={styles.drawerImage} />
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.drawerHeaderText}>   Adaptive Enterprise</Text>
            </View>
          </View>
        </SafeAreaView>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MainNavigator() {
  return (
      <NavigationContainer>
          <Drawer.Navigator
              initialRouteName="Viewer"
              drawerStyle={{
                  backgroundColor: '#AAAAAA',
              }}                
              screenOptions={{
                  headerShown: false
              }}
              drawerContent={(props) => <CustomDrawerContent {...props} />}
              // drawerContentOptions={{
              //   activeTintColor: '#e91e63',
              // }}              
          >
              <Drawer.Screen
                name="Approval"
                component={ApprovalNavigator}
                options={{
                  drawerLabel: 'Require Attention',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='flag-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                  )  
                }}
              />
              {/* <Drawer.Screen
                name="Review"
                component={ReviewNavigator}
                options={{
                  drawerLabel: 'To Review',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='bell-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                )
                }}
              /> */}
              <Drawer.Screen
                name="Recent"
                component={RecentNavigator}
                options={{
                  drawerLabel: 'Recent Changes',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='calendar-plus-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                )
                }}
              />
              <Drawer.Screen
                name="Expiriing"
                component={ExpiringNavigator}
                options={{
                  drawerLabel: 'Expiring Soon',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='calendar-minus-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                )
                }}
              />
              <Drawer.Screen
                name="Deleted"
                component={DeletedNavigator}
                options={{
                  drawerLabel: 'Deleted Items',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='trash-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                  )
                }}
              />
              <Drawer.Screen
                name="Viewer"
                component={ViewerNavigator}
                options={{
                  drawerLabel: 'Full Site',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='list'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                  )
                }}
              />
              <Drawer.Screen
                name="Pages"
                component={PagesNavigator}
                options={{
                  drawerLabel: 'Pages',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='newspaper-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                )
                }}
              />
              <Drawer.Screen
                name="Notes"
                component={NotesNavigator}
                options={{
                  drawerLabel: 'Notes',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='sticky-note-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                )
                }}
              />
              <Drawer.Screen
                name="Refs"
                component={RefsNavigator}
                options={{
                  drawerLabel: 'References',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='external-link'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                )
                }}
              />
              <Drawer.Screen
                name="Posts"
                component={PostsNavigator}
                options={{
                  drawerLabel: 'External Posts',
                  drawerIcon: ({ color, focused }) => (
                    <Icon
                      name='envelope-o'
                      type='font-awesome'            
                      size={24}
                      color={color}
                    />
                )
                }}
              />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

class Main extends Component {
  
  componentDidMount() {
    this.props.fetchConfigs();
    this.props.fetchCategories();
    this.props.fetchContents();
    this.props.fetchNotes();
    this.props.fetchRefs();
    this.props.fetchFeedback();
    this.props.fetchFlow();
    this.props.fetchPosts();
  }

  render() {
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#000000',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

// export default Main;
export default connect(mapStateToProps, mapDispatchToProps)(Main);