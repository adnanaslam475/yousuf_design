import React from 'react'
import { Switch } from 'react-native';

const SwitchComp = ({ isEnabled, setEnabled, style, isRepeat, setIsRepeat }) => {
    return (
        <Switch
            trackColor={{ false: "#767577", true: "pink" }}
            thumbColor={isEnabled ? "gray" : "#f4f3f4"}
            ios_backgroundColor="pink"
            onValueChange={() => { setEnabled(p => !p); setIsRepeat(p => !p) }}
            value={isEnabled}
            style={{ ...style }}
        />
    )
}

export default SwitchComp;