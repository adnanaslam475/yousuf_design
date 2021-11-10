import React, { useRef, useState } from 'react'
import { View, Text, Image, Dimensions } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import MyCarousel from '../components/Carousel'
import { styles } from '../styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
// import Switch from '../components/Switch'
import Table from '../components/Table'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const Dashboard = () => {
    const [visible, setVisible] = useState(false);
    const [isEnabled, setEnabled] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const handlechange = v => {
        console.log('object')
    }

    return (
        <View style={{ backgroundColor: 'white', height }}>
            <Overlay isVisible={true}
                backdropStyle={{
                    backgroundColor: 'red',
                    position: 'absolute'
                }}
                onBackdropPress={toggleOverlay}>
                <View style={{
                    zIndex: 20,
                    backgroundColor: 'red',
                }}>
                    <IonIcon name='close' size={30} style={{
                        position: 'absolute',
                        right: 20,
                        top: 30
                    }} />
                </View>
                <ScrollView>
                    <View style={{
                        height,
                        width,
                    }}>
                        <View style={{ marginTop: 20 }}>
                            <TextInput style={{ ...styles.input }}
                                placeholder='Enter Title...'
                                onChangeText={(v, n) => handlechange(v, 'title')} />
                            <TextInput style={{ ...styles.input }}
                                placeholder='Enter Description...'
                                onChangeText={(v, n) => handlechange(v, 'title')} />
                        </View>
                    </View>
                </ScrollView>
            </Overlay >
            <View style={{
                flexDirection: 'column', alignItems: 'flex-end', padding: 10,
            }}>
                <IonIcon name='checkmark-done-circle' color='red' size={30} />
                <IonIcon name='trash-bin' color='red' size={30} onPress={() => setVisible(true)} />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ width: width * 0.8 }}>
                    <MyCarousel />
                </View>
            </View>
            <View >
                <Table />
            </View>
        </View >
    )
}

export default Dashboard;
