import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, ImageBackground } from 'react-native';
import { style } from './Styles'
import { AtributeCard } from './Caracteristicas/AtributesCard'
import { BottomPopup } from './BottomPopup';
import { D20 } from './Dados'
import { ForModif } from './Caracteristicas/Modifiers';
import { forList, desList, intList, sabList, carList } from './Caracteristicas/Pericias';
import { AtributeCardInit } from './Caracteristicas/Iniciativa';
import { AtributeCardCA, AtributeCardDesloc } from './Caracteristicas/CaDesloc';


const App = () => {

    const [d20, setD20] = useState(0);
    const [forceValue, setForceValue] = useState(10);
    const [dexteretyValue, setDexteretyValue] = useState(10);
    const [constitutionValue, setConstitutionValue] = useState(10);
    const [inteligenceValue, setInteligenceValue] = useState(10);
    const [wisdonValue, setWisdonValue] = useState(10);
    const [charismaValue, setCharismaValue] = useState(10);
    const [caValue, setCaValue] = useState(10);
    const [deslocValue, setDeslocValue] = useState(9);


    let popupRef = React.createRef()

    const onSowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }

    return (
        <SafeAreaView style={style.container}>


            <View style={style.telaToda}>

                <View style={style.naviBar}>
                    <View style={style.naviImgPos}>
                        <Image style={style.naviImag} source={require('./assets/Character.png')} />
                    </View>
                    <View style={style.naviColunas}>
                        <View style={style.naviColunas}>
                            <TouchableOpacity style={style.naviRect}>
                                <Text style={style.naviText}>Nome</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.naviRect}>
                                <Text style={style.naviText}>Raça</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={style.colunas}>

                    {/* Inicio da coluna 1 */}

                    <View style={style.coluna1}>

                        <AtributeCard props={{ title: "For", name: "Força", list: forList, value: forceValue, setValue: setForceValue }} />

                        <AtributeCard props={{ title: "Des", name: "Destreza", list: desList, value: dexteretyValue, setValue: setDexteretyValue }} />

                        <AtributeCard props={{ title: "Cons", name: "Constituição", value: constitutionValue, setValue: setConstitutionValue }} />

                        <AtributeCard props={{ title: "Int", name: "Inteligência", list: intList, value: inteligenceValue, setValue: setInteligenceValue }} />

                        <AtributeCard props={{ title: "Sab", name: "Sabedoria", list: sabList, value: wisdonValue, setValue: setWisdonValue }} />

                        <AtributeCard props={{ title: "Car", name: "Carisma", list: carList, value: charismaValue, setValue: setCharismaValue }} />

                        <TouchableOpacity style={style.botaoAmareloEsq}>
                            <Image source={require('./assets/Scroll.png')} resizeMode='contain' style={style.imagemBotom} />
                        </TouchableOpacity>
                    </View>

                    {/* Fim da coluna 1 */}

                    {/* Inicio da coluna 2 */}

                    <View style={style.coluna2}>
                        <View style={style.CA_Init}>

                            <AtributeCardCA props={{ title: "CA", name: "Classe de Armadura", value: caValue, setValue: setCaValue }} />

                            <AtributeCardInit props={{ title: "Init.", name: "Iniciativa", value: dexteretyValue, setValue: setDexteretyValue }} />

                        </View>



                        <TouchableOpacity style={style.imagemTextos}>
                            <ImageBackground style={style.imagemTextos} source={require('./assets/TextBox.png')}>
                                <Text style={style.caracTextPP}>Traços de personalidade</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.imagemTextos}>
                            <ImageBackground style={style.imagemTextos} source={require('./assets/TextBox.png')}>
                                <Text style={style.caracText}>Ideais</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.imagemTextos}>
                            <ImageBackground style={style.imagemTextos} source={require('./assets/TextBox.png')}>
                                <Text style={style.caracText}>Ligações</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.imagemTextos}>
                            <ImageBackground style={style.imagemTextos} source={require('./assets/TextBox.png')}>
                                <Text style={style.caracText}>Defeitos</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.imagemTextos}>
                            <ImageBackground style={style.imagemChar} source={require('./assets/CharIMG.png')}></ImageBackground>
                        </TouchableOpacity>
                    </View>

                    {/* Fim da coluna 2 */}

                    {/* Inicio da coluna 3 */}

                    <View style={style.coluna3}>
                        <AtributeCardDesloc
                            props={{
                                title: "Desloc.",
                                name: "Classe de armadura",
                                value: deslocValue,
                                setValue: setDeslocValue
                            }}
                        />

                        <TouchableOpacity style={style.healthBarRec}>
                            <ImageBackground style={style.healthBar} source={require('./assets/BarraHP.png')}>
                                <Text style={style.HpTxt}>HP</Text>
                                <Text style={style.HpTxt}>XX</Text>
                                <Text style={style.HpTxt}>----</Text>
                                <Text style={style.HpTxt}>XX</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <View style={style.inventarioRec}>
                            <TouchableOpacity style={style.botaoAmareloDirPP}>
                                <Image source={require('./assets/Moedas.png')} resizeMode='contain' style={style.imagemBotom} />
                            </TouchableOpacity>
                            <TouchableOpacity style={style.botaoAmareloDirPP}>
                                <Image source={require('./assets/Mochila.png')} resizeMode='contain' style={style.imagemBotom} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={style.botaoAmareloDir}>
                            <Image source={require('./assets/Espada.png')} resizeMode='contain' style={style.imagemBotom} />
                        </TouchableOpacity>
                    </View>

                    {/* Fim da coluna 3 */}
                </View>
            </View>

        </SafeAreaView>
    );
};

export default App;

{/* Botão para rolar o D20 */ }

{/* <TouchableOpacity onPress={() => setD20(D20())} style={style.botao}>
    <Text style={style.atributos}>For</Text>
    <Text style={{
        "color": (d20 == 1) ? "red" : ((d20 == 20) ? "green" : '#000000'),
        fontSize: 38, fontWeight: 'bold',
        marginTop: 2,
    }}> {d20} </Text>
</TouchableOpacity> */}