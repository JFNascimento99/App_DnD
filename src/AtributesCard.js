import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, ImageBackground } from 'react-native';
import { style } from './Styles'
import { BottomPopup } from './BottomPopup';


export const AtributeCard = ({props}) => {

    let popupRef = React.createRef()

    const onSowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }
    return (
        <TouchableOpacity style={style.atributoPattern} onPress={onSowPopup}>
            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                <Text style={style.atributosTexto}>{ props.title }</Text>
                <Text style={style.atributosValor}>XX</Text>
                <Text style={style.atributosModif}>+X</Text>
                <BottomPopup key={ props.name }
                    title={ props.name }
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    data={props.list}
                />
            </ImageBackground>
        </TouchableOpacity>
    )
}