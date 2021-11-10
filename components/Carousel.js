import React, { Component } from 'react'
import { View, ImageBackground, Image, Text, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { carouselItems } from '../constants'
// import { styles } from '../styles'

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
        return <View style={{
            display: 'flex',
            width: width * 0.85,
            paddingLeft: width * 0.15,
        }}>
            <Image style={{
                width: width * 0.7,
                height: width * 0.4, borderRadius: 10

            }}
                source={{ uri: item.uri }} />
        </View>
    }

    get pagination() {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeSlide}
                dotElement={<View style={{
                    width: 10, height: 10,
                    borderColor: 'black',
                    backgroundColor: 'black',

                    borderRadius: 20,
                    margin: height * 0.02,
                }} />}
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
                dotContainerStyle={{}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
            // inactiveDotStyle={{
            // }}
            // inactiveDotOpacity={0.1}
            // inactiveDotScale={0.1}
            />
        );
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