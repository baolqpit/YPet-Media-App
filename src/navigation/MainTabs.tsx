import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import NewsFeedScreen from "../modules/newsfeed/screens/NewsFeedScreen.tsx";
import PetScreen from "../modules/pet/screens/PetScreen.tsx";
import ProfileScreen from "../modules/profile/screens/ProfileScreen.tsx";
import VideoScreen from "../modules/video/screens/VideoScreen.tsx";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Newsfeed" component={NewsFeedScreen}/>
            <Tab.Screen name="Video" component={VideoScreen}/>
            <Tab.Screen name="Pet" component={PetScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
}