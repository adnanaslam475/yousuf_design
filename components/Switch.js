import React from 'react'
import { Switch } from 'react-native';

const SwitchComp = ({ isEnabled, setEnabled }) => {
    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setEnabled(p => !p)}
            value={isEnabled}
        />
    )
}

export default SwitchComp;