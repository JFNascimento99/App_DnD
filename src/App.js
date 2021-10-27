import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, Image, View, ImageBackground } from 'react-native';
import { style } from './Styles'
import { D20 } from './Dados'
import { ForModif } from './Atributes';

const App = () => {

    const [d20, setD20] = useState(0);

    return (
        <SafeAreaView style={style.container}>


            <View style={style.telaToda}>

                <View style={style.naviBar}>
                    {/* <View style={style.naviImgPos}>
                        <Image style={style.naviImag} source={require('./assets/Character.png')} />
                    </View> */}
                    <View style={style.naviColunas}>
                        <View style={style.naviColunas}>
                            <TouchableOpacity style={style.naviRect}>
                                <Text style={style.naviText}>Nome</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.naviRect}>
                                <Text style={style.naviText}>Nome</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={style.colunas}>

                    {/* Inicio da coluna 1 */}

                    <View style={style.coluna1}>

                        <TouchableOpacity style={style.atributoPattern}>
                            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                <Text style={style.atributosTexto}>For</Text>
                                <Text style={style.atributosValor}>XX</Text>
                                <Text style={style.atributosModif}>+X</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.atributoPattern}>
                            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                <Text style={style.atributosTexto}>Des</Text>
                                <Text style={style.atributosValor}>XX</Text>
                                <Text style={style.atributosModif}>+X</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.atributoPattern}>
                            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                <Text style={style.atributosTexto}>Cons</Text>
                                <Text style={style.atributosValor}>XX</Text>
                                <Text style={style.atributosModif}>+X</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.atributoPattern}>
                            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                <Text style={style.atributosTexto}>Int</Text>
                                <Text style={style.atributosValor}>XX</Text>
                                <Text style={style.atributosModif}>+X</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.atributoPattern}>
                            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                <Text style={style.atributosTexto}>Sab</Text>
                                <Text style={style.atributosValor}>XX</Text>
                                <Text style={style.atributosModif}>+X</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.atributoPattern}>
                            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                <Text style={style.atributosTexto}>Car</Text>
                                <Text style={style.atributosValor}>XX</Text>
                                <Text style={style.atributosModif}>+X</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.botaoAmareloEsq}>
                            <Image source={require('./assets/Scroll.png')} resizeMode='contain' style={style.imagemBotom} />
                        </TouchableOpacity>
                    </View>

                    {/* Fim da coluna 1 */}

                    {/* Inicio da coluna 2 */}

                    <View style={style.coluna2}>
                        <View style={style.CA_Init}>
                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>CA</Text>
                                    <Text style={style.atributosValor}>XX</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>Init</Text>
                                    <Text style={style.atributosValor}>XX</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={style.imagemTextos}>
                            <ImageBackground style={style.imagemTextos} source={require('./assets/TextBox.png')}>
                                <Text style={style.caracText}>Perícias</Text>
                            </ImageBackground>
                        </TouchableOpacity>

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

                    </View>

                    {/* Fim da coluna 2 */}

                    {/* Inicio da coluna 3 */}

                    <View style={style.coluna3}>
                        <TouchableOpacity style={style.atributoPattern}>
                            <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                <Text style={style.atributosTexto}>Desloc</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.healthBarRec}>
                            <ImageBackground style={style.healthBar} source={require('./assets/BarraHP.png')}>
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
