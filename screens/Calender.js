import React, { useRef, useState } from 'react'
import { View, Text, Switch } from 'react-native'
import { LocaleConfig, Calendar } from 'react-native-calendars';
import IonIcon from 'react-native-vector-icons/Ionicons'

const Calender = () => {
    const calenderref = useRef();
    return (
        <View style={{ paddingTop: 10 }}>
            <Calendar
                enableSwipeMonths={true}
            />
        </View>
    )
}

export default Calender
