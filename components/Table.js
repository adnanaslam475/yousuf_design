import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Switch } from 'react-native';
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';
// import Switch from './Switch';

const { width, height } = Dimensions.get('window');
export default class ExampleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: props.head,
            tableData: props.maintabledata
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
                    }} style={{ height: height * 0.05 }} />
                    {/* <View>
                    <Switch value={true} /> */}
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