import {
    Modal, Dimensions, TouchableOpacity,
    Styles, Viwe, Text, View
} from 'react-native'
import React from 'react'

const deviceHeight = Dimensions.get('window').height

export class BottomPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    renderOutsideThouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }}></View>
        if (!onTouch) return view

        return (
            <TouchableOpacity onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableOpacity>
        )
    }

    render() {
        let { show } = this.state
        const { onTouchOtside, title } = this.props

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={
                    {
                        flex: 1,
                        backgroundColor: '#000000AA',
                        justifyContent: 'flex-end'
                    }}
                >
                    {this.renderOutsideThouchable(onTouchOtside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.4,
                    }}>
                        <View>
                            <Text style={{
                                color: '#182E44',
                                fontSize: 20,
                                fontWeight: '500',
                                margin: 15,
                            }}>
                                {title}
                            </Text>
                        </View>

                    </View>

                </View>

            </Modal>
        )
    }
}