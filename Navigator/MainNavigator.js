import React from 'react'
import {
    Dimensions, View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../screens/Dashboard';
import ToBeDone from '../screens/ToBeDone';
import Calender from '../screens/Calender';
import Settings from '../screens/Settings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { styles } from '../styles';
const { width } = Dimensions.get('window');
const TabNavigator = createBottomTabNavigator();

const AffirmationStackNav = createStackNavigator();
const NotificationStack = createStackNavigator();
const RecordStack = createStackNavigator();
const QouteStack = createStackNavigator();
let commonstyles = {
    headerStyle: { backgroundColor: 'pink' },
    headerTitleAlign: 'center',
    headerBackTitleStyle: {
        fontStyle: 'italic',
        fontFamily: 'Roboto-Bold'
    },
    headerTitleStyle: styles.def_header_style
}

const Affirmation = (name) => {
    return (
        <AffirmationStackNav.Navigator>
            <AffirmationStackNav.Screen
                name='Journey'
                options={({ navigation, route }) => {
                    return ({
                        ...commonstyles,
                        headerTitle: 'Journey'
                    })
                }}
                component={Main}
            />
        </AffirmationStackNav.Navigator>
    );
};

const Notify = (name) => {
    return (
        <NotificationStack.Navigator >
            <NotificationStack.Screen
                name='Calender'
                options={({ route, }) => {
                    return ({
                        ...commonstyles,
                        headerTitle: 'Calender',
                    })
                }}
                component={Calender}
            />
        </NotificationStack.Navigator>
    );
};


const Record = (name) => {
    return (
        <RecordStack.Navigator >
            <RecordStack.Screen
                name='ToBeDone'
                options={({ navigation }) => {
                    return ({
                        headerTitle: 'ToBeDone',
                        ...commonstyles,
                    })
                }}
                component={ToBeDone}
            />
        </RecordStack.Navigator>
    )
};

const Qoutes = (name) => {
    return (
        <QouteStack.Navigator >
            <QouteStack.Screen
                name='Settings'
                options={({ }) => {
                    return ({
                        headerTitle: 'Settings',
                        ...commonstyles,
                    })
                }}
                component={Settings}
            />
        </QouteStack.Navigator>
    );
};

const arr = [{ name: 'My journey', icon: 'dumpster', stackname: 'journey', stack: Affirmation },
{ name: 'Calender', icon: 'firstdraft', stackname: 'calender', stack: Notify },
{ name: 'To be Done', icon: 'archive', stackname: 'done', stack: Record },
{ name: "Setting", icon: 'paper-plane', stackname: 'settings', stack: Qoutes }];

const StackTabs = () => {
    return (
        <TabNavigator.Navigator tabBarOptions={{
            activeTintColor: 'pink',
        }}>
            {arr.map((v, i) => <TabNavigator.Screen
                name={v.name}
                key={i}
                component={v.stack}
                options={{
                    tabBarBadgeStyle: { color: 'red' },
                    tabBarIcon: (props) => (
                        <FontAwesome5 name={v.icon} size={width * 0.06}
                            style={styles.tabicon} />
                    ),
                }}
            />
            )}
        </TabNavigator.Navigator>
    );
}

const TestNavigator = () => {
    return (
        <NavigationContainer>
            <StackTabs />
        </NavigationContainer>
    );
};

export default TestNavigator;