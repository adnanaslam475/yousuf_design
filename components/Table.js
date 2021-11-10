import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Switch } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
// import Switch from './Switch';

const { width, height } = Dimensions.get('window');
export default class ExampleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Activity Title', 'Date/Time', 'Status'],
            tableData: [
                ['Dialy', '2', <Switch value={true} style={styles.alignself} />],
                ['Review', 'b', <Switch style={styles.alignself} />],
                ['Visit', '2', <Switch style={styles.alignself} />],
                ['Parent', 'b', <Switch style={styles.alignself} />]
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{}}>
                    <Row data={state.tableHead} style={{ ...styles.head }}
                        textStyle={styles.text} />
                    <Rows data={state.tableData} textStyle={{
                        ...styles.text,
                        textAlign: 'center'
                        // borderWidth: 2,
                    }} style={{ height: height * 0.05 }} />
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    alignself: { alignSelf: 'center' },
    container: {
        flex: 1, padding: 16, height: 300,
        paddingTop: 30, backgroundColor: '#fff'
    },
    head: { height: 40, backgroundColor: '#f1f8ff', },
    text: { textAlign: 'center' }
});