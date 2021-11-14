import React, { useEffect, useRef, useState } from 'react'
import {
    View, Text, Switch as RNSwitch, Image,
    Dimensions, TouchableOpacity
} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Switch as RNElementsSwitch } from 'react-native-elements'
import MyCarousel from '../components/Carousel'
import { styles } from '../styles'
import IonIcon from 'react-native-vector-icons/Ionicons'
import MySwitch from '../components/Switch'
import Table from '../components/Table'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const Dashboard = () => {
    const actref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [isEnabled, setEnabled] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [mon, setMon] = useState(false)
    const [tue, setTue] = useState(false)
    const [wed, setWed] = useState(false);
    const [thu, setThu] = useState(false)
    const [fri, setFri] = useState(false)
    const [sat, setSat] = useState(false)
    const [sun, setSun] = useState(false)
    //new
    const [daily, setdaily] = useState(false)
    const [visit, setvisit] = useState(false)
    const [rvw, setrvw] = useState(false)
    const [event, setevent] = useState(false)
    //modaldata
    const [notification, setnotification] = useState(false)
    const [done, setdone] = useState(false)
    const [type, settype] = useState(false)



    const [inputs, setInputs] = useState({
        description: '',
        title: '',
    })

    const handlechange = (v, name) => {
        setInputs(prev => ({
            ...prev,
            [name]: v
        })
        )
    }

    return (
        <View style={{ backgroundColor: 'white', height }}>
            <Overlay isVisible={visible}
                backdropStyle={styles.back}
                onBackdropPress={() => setVisible(p => !p)}>
                <View style={{ height: 50 }}>
                    <IonIcon name='close' size={30} style={styles.ionicon}
                        onPress={() => setVisible(false)} />
                </View>
                <ScrollView >
                    <View >
                        <View style={{ marginTop: 20 }}>
                            <TextInput style={{ ...styles.input }}
                                placeholder='Enter Title...'
                                onChangeText={v => handlechange(v, 'title')} />
                            <TextInput style={{ ...styles.input }}
                                placeholder='Enter Description...'
                                onChangeText={v => handlechange(v, 'description')} />
                            <View style={styles.vw}>
                                <Text style={{ marginTop: 5 }}>Repeat</Text>
                                <MySwitch isEnabled={isEnabled} isRepeat={isRepeat}
                                    setIsRepeat={setIsRepeat} setEnabled={setEnabled} />
                            </View>
                            {isRepeat && <View >
                                <View style={styles.radio}><Text>Mon</Text>
                                    <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                        thumbColor={mon ? "gray" : "#f4f3f4"}
                                        onValueChange={() => setMon(!mon)}
                                        value={mon} />
                                </View>
                                <View style={styles.radio}><Text>Tue</Text>
                                    <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                        thumbColor={tue ? "gray" : "#f4f3f4"}
                                        onValueChange={() => setTue(!tue)}
                                        value={tue} />
                                </View>
                                <View style={styles.radio}>
                                    <Text>Wed</Text>
                                    <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                        thumbColor={wed ? "gray" : "#f4f3f4"}
                                        onValueChange={() => setWed(!wed)}
                                        value={wed} />
                                </View>
                                <View style={styles.radio}>
                                    <Text>Thu</Text>
                                    <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                        thumbColor={thu ? "gray" : "#f4f3f4"}
                                        onValueChange={() => setThu(!thu)}
                                        value={thu} />
                                </View>
                                <View style={styles.radio}>
                                    <Text>Fri</Text>
                                    <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                        thumbColor={fri ? "gray" : "#f4f3f4"}
                                        onValueChange={() => setFri(!fri)}
                                        value={fri} />
                                </View>
                                <View style={styles.radio}>
                                    <Text>Sat</Text>
                                    <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                        thumbColor={sat ? "gray" : "#f4f3f4"}
                                        onValueChange={() => setSat(!sat)}
                                        value={sat} />
                                </View>
                                <View style={styles.radio}>
                                    <Text>Sun</Text>
                                    <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                        thumbColor={sun ? "gray" : "#f4f3f4"}
                                        onValueChange={() => setSun(!sun)}
                                        value={sun} />
                                </View>
                            </View>}
                            <View style={styles.modalvw}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.modaltxt} >Time</Text>
                                    <Text style={{ ...styles.modaltxt, textAlign: 'right' }}>00:00</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'column', marginBottom: height * 0.15 }}>
                                        <Text style={{ margin: 10, marginLeft: 0 }}>Notification</Text>
                                        <Text style={{ margin: 10, marginLeft: 0 }}>Done</Text>
                                        <Text style={{ margin: 10, marginLeft: 0 }}>Activity Type</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                        <RNSwitch value={notification} trackColor={{ false: "#767577", true: "pink" }}
                                            thumbColor={event ? "gray" : "#f4f3f4"}
                                            style={{ alignSelf: 'flex-start', marginTop: 10 }}
                                            onValueChange={() => setnotification(!notification)} />
                                        <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                            thumbColor={event ? "gray" : "#f4f3f4"}
                                            style={{ ...styles.alignself, marginTop: 10 }} value={done} onValueChange={() => setdone(!done)} />
                                        <RNSwitch trackColor={{ false: "#767577", true: "pink" }}
                                            thumbColor={event ? "gray" : "#f4f3f4"}
                                            style={{ ...styles.alignself, marginTop: 10 }}
                                            value={type}
                                            onValueChange={() => {
                                                settype(!type)
                                            }} />
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.touch} onPress={() => setVisible(false)}>
                                <Text style={{ textAlign: 'center' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Overlay >
            <View style={styles.bottom}>
                <IonIcon name='checkmark-done-circle' color='red' size={30} />
                <IonIcon name='trash-bin' color='red' size={30}
                    onPress={() => setVisible(true)} />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ width: width * 0.8 }}>
                    <MyCarousel />
                </View>
            </View>
            <View style={{ width: width * 0.9, alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }} >Activity Title</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Date/Time</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Status</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ margin: 10 }}>Daily</Text>
                        <Text style={{ margin: 10 }}>Review</Text>
                        <Text style={{ margin: 10 }}>Visit Parent</Text>
                        <Text style={{ margin: 10 }}>Event</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ margin: 10 }}>2</Text>
                        <Text style={{ margin: 10 }}>B</Text>
                        <Text style={{ margin: 10 }}>2</Text>
                        <Text style={{ margin: 10 }}>B</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <RNElementsSwitch value={daily} onValueChange={() => setdaily(!daily)}
                            trackColor={{ false: "#767577", true: "pink" }}
                            thumbColor={daily ? "gray" : "#f4f3f4"}
                            style={{ ...styles.alignself, marginTop: 10, }} />
                        <RNElementsSwitch value={rvw} onValueChange={() => setrvw(!rvw)}
                            trackColor={{ false: "#767577", true: "pink" }}
                            thumbColor={rvw ? "gray" : "#f4f3f4"}
                            style={{ ...styles.alignself, marginTop: 10 }} />
                        <RNElementsSwitch value={visit} onValueChange={() => setvisit(!visit)}
                            trackColor={{ false: "#767577", true: "pink" }}
                            thumbColor={visit ? "gray" : "#f4f3f4"}
                            style={{ ...styles.alignself, marginTop: 10 }} />
                        <RNElementsSwitch value={event} onValueChange={() => setevent(!event)}
                            trackColor={{ false: "#767577", true: "pink" }}
                            thumbColor={event ? "gray" : "#f4f3f4"}
                            style={{ ...styles.alignself, marginTop: 10 }} />
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Dashboard;
