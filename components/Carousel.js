import React, { Component } from 'react'
import { View, Image, Text, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { carouselItems, imgarr } from '../constants'
import { styles } from '../styles';
const { width, height } = Dimensions.get('window');

export default class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            activeSlide: 0,
        }
    }

    _renderItem({ item, index }) {
        return <View style={styles.v}>
            <View style={{
                flexDirection: 'column', position: 'absolute',
                left: width * 0.17,
                top: 5
            }}>
                <Text >{item.title}</Text>
                <Text >{item.description}</Text>
                <Text >10:20 am</Text>
            </View>
            <Image style={{ ...styles.image, opacity: 0.5 }}
                source={{ uri: item.uri }} />
        </View>
    }

    get pagination() {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeSlide}
                dotElement={<View style={styles.dot} />}
                inactiveDotElement={<View style={{
                    width: 5, height: 5,
                    borderWidth: 2,
                    margin: height * 0.02,
                    backgroundColor: 'black',
                    margin: height * 0.02,
                    borderRadius: 20
                }} />}
                containerStyle={{
                    height: 5,
                    width: width,
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
            />
        )
    }

    render() {
        return (
            <View>
                <Carousel
                    data={carouselItems}
                    sliderWidth={400}
                    itemWidth={400}
                    windowSize={1}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this.pagination}
            </View>
        );
    }
}