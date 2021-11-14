import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
    modalvw: { width: width * 0.7, alignSelf: 'center', marginTop: 20 },
    modaltxt: { flexBasis: '50%', fontSize: 20, fontWeight: 'bold' },
    bottom: {
        flexDirection: 'column', alignItems: 'flex-end', padding: 10,
    },
    back: {
        backgroundColor: 'red',
        position: 'absolute'
    },
    radio: { flexDirection: 'row', justifyContent: 'space-around' },
    touch: {
        width: width * 0.94,
        marginTop: -height * 0.1,
        height: height * 0.06,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    ionicon: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    vw: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 10,
    },
    dot: {
        width: 10, height: 10,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 20,
        margin: height * 0.02,
    },
    v: {
        display: 'flex',
        width: width * 0.85,
        paddingLeft: width * 0.15,
        position:'relative'
    },
    image: {
        width: width * 0.7,
        height: width * 0.4, borderRadius: 10
    },
    alignself: { alignSelf: 'center' },
    container: {
        flex: 1, padding: 16, height: 300,
        paddingTop: 30, backgroundColor: '#fff'
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    tbl: {
        flex: 1,
        flexDirection: 'row'
    },
    err: { display: 'flex', alignSelf: 'center', color: 'red', margin: 5 },
    icon_view: {
        display: 'flex', flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    tabicon: { color: 'pink', },
    mic: { position: 'absolute', right: height * 0.02 },
    text: {
        color: 'white',
        fontFamily: 'Roboto-Bold',
    },
    savebtn: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        width: width * 0.9,
        marginTop: 5,
        borderRadius: 10,
        alignSelf: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        margin: 10,
        height: height * 0.1,
        width: width * 0.9,
    },
    label: {
        fontFamily: 'Roboto-Bold',
    },
    icon: {
        zIndex: 10,
        position: 'absolute',
        right: width * 0.05,
        flexDirection: 'row',
    }, act: {
        display: 'flex',
        alignSelf: 'center', justifyContent: 'center',
        marginTop: height * 0.4
    },
    def_header_style: {
        color: 'white',
        letterSpacing: 3,
        fontWeight: 'bold'
    },
    txt: {
        display: 'flex',
        fontFamily: 'Roboto',
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        position: 'absolute', top: height * 0.4
    },
    card: {
        backgroundColor: 'wheat',
        borderRadius: 10,
        shadowColor: 1,
        width: width * 0.98,
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        shadowOpacity: 0.6,
        elevation: 2,
        minHeight: height * 0.15,
        alignSelf: 'center'
    }, check: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dr_profile: {
        width: width * 0.25,
        height: height * 0.15,
        borderRadius: 100,
        borderColor: 'blue',
        borderWidth: 5,
    },
    drawerimg: {
        display: 'flex',
        flexDirection: 'column',
        width: width / 1.5,
        paddingTop: height * 0.08,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        alignItems: 'center',
        color: 'white',
        paddingBottom: 10,
        justifyContent: 'center',
        position: 'relative',
    },
    img: {
        width: width * 0.25,
        height: height * 0.16,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 20,
    },
    draweritem: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: width * 0.07,
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    drawerStyle: {
        backgroundColor: 'pink',
        color: 'white',
        width: width / 1.5,
    },
    draw: {
        width: width / 1.5,
        height: height,
        position: 'relative'
    },
    def_header_style: {
        color: 'white',
        letterSpacing: 3,
        fontWeight: 'bold'
    }
})
