import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, ImageBackground } from 'react-native';
import { style } from '../Styles';
import { BottomPopup } from '../BottomPopup';


export const AtributeCardCA = ({props}) => {

    let popupRef = React.createRef()

    const onSowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }
    return (
        <TouchableOpacity style={style.atributoPattern} onPress={onSowPopup}>
            <ImageBackground style={style.imagemAtributo} source={require('../assets/Atributos.png')}>
                <Text style={style.atributosTexto}>{ props.title }</Text>
                <Text style={style.atributosValor}>{props.value}</Text>
                <BottomPopup key={ props.name }
                    title={ props.name }
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    value={props.value}
                    setValue={props.setValue}
                />
            </ImageBackground>
        </TouchableOpacity>
    )
}

export const AtributeCardDesloc = ({props}) => {

    let popupRef = React.createRef()

    const onSowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }
    return (
        <TouchableOpacity style={style.atributoPattern} onPress={onSowPopup}>
            <ImageBackground style={style.imagemAtributo} source={require('../assets/Atributos.png')}>
                <Text style={style.atributosTexto}>{ props.title }</Text>
                <Text style={style.atributosValor}>{ props.value }m</Text>
                <BottomPopup key={ props.name }
                    title={ props.name }
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    value={props.value}
                    setValue={props.setValue}
                />
            </ImageBackground>
        </TouchableOpacity>
    )
}