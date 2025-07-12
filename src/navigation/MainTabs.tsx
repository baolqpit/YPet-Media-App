import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NewsFeedScreen} from "../modules/newsfeed/screens/NewsFeedScreen.tsx";
import PetScreen from "../modules/pet/screens/PetScreen.tsx";
import ProfileScreen from "../modules/profile/screens/ProfileScreen.tsx";
import VideoScreen from "../modules/video/screens/VideoScreen.tsx";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Newsfeed"
                component={NewsFeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="Video"
                component={VideoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="videocam" size={size} color={color} />
                    ),
                    tabBarLabel: 'Video',
                }}
            />
            <Tab.Screen
                name="Pet"
                component={PetScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="pets" size={size} color={color} />
                    ),
                    tabBarLabel: 'Pet',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" size={size} color={color} />
                    ),
                    tabBarLabel: 'Profile',
                }}
            />
        </Tab.Navigator>
    );
}