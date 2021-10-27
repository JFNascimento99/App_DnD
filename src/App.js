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
            
                    </View>

                    <View style={style.colunas}>

                        {/* Inicio da coluna 1 */}

                        <View style={style.coluna1}>

                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>For</Text>
                                    <Text style={style.atributosValior}>XX</Text>
                                    <Text style={style.atributosModif}>+X</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>Des</Text>
                                    <Text style={style.atributosValior}>XX</Text>
                                    <Text style={style.atributosModif}>+X</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>Cons</Text>
                                    <Text style={style.atributosValior}>XX</Text>
                                    <Text style={style.atributosModif}>+X</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>Int</Text>
                                    <Text style={style.atributosValior}>XX</Text>
                                    <Text style={style.atributosModif}>+X</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>Sab</Text>
                                    <Text style={style.atributosValior}>XX</Text>
                                    <Text style={style.atributosModif}>+X</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>Car</Text>
                                    <Text style={style.atributosValior}>XX</Text>
                                    <Text style={style.atributosModif}>+X</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={style.botaoAmareloEsq}>
                                <Image source={require('./assets/Scroll.png')} resizeMode='contain' style={style.imagemBotom} />
                            </TouchableOpacity>
                        </View>

                        {/* Fim da coluna 1 */}

                        {/* Inicio da coluna 2 */}

                        {/* Fim da coluna 2 */}

                        {/* Inicio da coluna 3 */}

                        <View style={style.coluna3}>
                            <TouchableOpacity style={style.atributoPattern}>
                                <ImageBackground style={style.imagemAtributo} source={require('./assets/Atributos.png')}>
                                    <Text style={style.atributosTexto}>Desloc</Text>
                                </ImageBackground>
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
