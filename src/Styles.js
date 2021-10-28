import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#202020',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'baseline',
    },
    /*
        botao: {
            backgroundColor: '#C4C4C4',
            width: 100,
            height: 100,
            paddingHorizontal: 5,
            paddingVertical: 15,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 10,
        },
    
        
    
        imagemRight: {
            width: 45,
            height: 45,
        },
    
    
        
    
        viewStyleRow: {
            display: 'flex',
            flexDirection: 'row-reverse',
            marginTop: 'auto',
            //backgroundColor: '#FFFFFF',
        },
    
        
    
        viewStyleColun: {
            display: 'flex',
            flexDirection: 'column-reverse',
            marginTop: 'auto',
            marginBottom: '1%',
            marginLeft: '81%',
            //backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            width: 70,
        },
    
        atributosViewFor: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '2%',
            marginLeft: '2%',
            alignItems: 'center',
            overflow: 'hidden',
        },
    
        atributosViewDes: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '1%',
            marginLeft: '2%',
            alignItems: 'center',
            overflow: 'hidden',
        },
    
        atributosViewCons: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '1%',
            marginLeft: '2%',
            alignItems: 'center',
            overflow: 'hidden',
        },
    
        atributosViewInt: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '1%',
            marginLeft: '2%',
            alignItems: 'center',
            overflow: 'hidden',
        },
    
        atributosViewSab: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '1%',
            marginLeft: '2%',
            alignItems: 'center',
            overflow: 'hidden',
        },
    
        atributosViewCar: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '1%',
            marginLeft: '2%',
            alignItems: 'center',
            overflow: 'hidden',
        },
    
        ArmorClassView: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '-122%',
            marginLeft: '40%',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
        },
    
        IniciativaView: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '-122%',
            marginLeft: '5%',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
        },
    
        DeslocamentoView: {
            display: 'flex',
            flexDirection: 'column',
            //backgroundColor: '#FFFFFF',
            height: 80,
            width: 80,
            marginTop: '-122%',
            marginLeft: '40%',
            alignItems: 'center',
            overflow: 'hidden',
            justifyContent: 'center',
        },
    
    
        imagemCA: {
            height: 110,
            width: 110,
        },
    */

    /*//////////////////////////////////////////////////////////////////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    *///////////////////////////////////////////////////////////////////////////////////////////   

    // Definitivos a partir daqui

    // Definição da tela


    colunas: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    telaToda: {
        width: "100%",
    },

    // Fim da definição da tela

    // Definição da navi bar

    naviBar: {
        width: "100%",
        height: 90,
        alignItems: 'center',
        backgroundColor: '#424141',
        justifyContent: 'space-around',
    },

    naviColunas: {
        flexDirection: 'row',
        height: 90,
        width: 280,
        //backgroundColor: '#FFF',
        justifyContent: 'space-around',
    },

    naviImgPos: {
        marginTop: '1%',
        marginLeft: '1%',
    },

    naviRect: {
        width: 140,
        height: 40,
        marginTop: '0.5%',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
    },


    // Fim da definição da navi bar

    // Definição de textos

    atributosTexto: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        alignSelf: 'center',
        marginTop: 11,
        fontFamily: 'sans-serif-condensed',
    },

    atributosValor: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
        alignSelf: 'center',
        marginTop: -3,
        fontFamily: 'sans-serif-condensed',
    },

    atributosModif: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000000',
        alignSelf: 'center',
        marginTop: -3,
        fontFamily: 'sans-serif-condensed',
    },

    caracText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '25%',
        fontFamily: 'sans-serif-condensed',
    },

    caracTextPP: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '25%',
        fontFamily: 'sans-serif-condensed',
    },

    naviText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: '5%',
        marginLeft: '5%',
        fontFamily: 'sans-serif-condensed',
    },

    HpTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
        //marginTop: '10%',
        alignSelf: 'center',
        fontFamily: 'sans-serif-condensed',
    },

    // Fim da definição de textos

    // Definição das imagens

    imagemBotom: {
        width: 50,
        height: 50,
    },
    imagemAtributo: {
        height: 80,
        width: 80,
    },

    imagemTextos: {
        height: 80,
        width: '100%',
        marginTop: '1%',
        //backgroundColor: '#fff',
    },

    imagemChar: {
        height: 180,
        width: '100%',
        marginTop: '1%',
        //backgroundColor: '#fff',
    },

    naviImag: {
        width: 50,
        height: 50,
        //alignSelf: 'flex-start',
    },

    healthBar: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    // Fim das definições das imagens

    // Componentes da coluna 1
    coluna1: {
        width: 90,
        height: "100%",
        //marginLeft: "1%",
        //backgroundColor: "#FFFFFF",
    },

    atributoPattern: {
        width: "100%",
        height: 80,
        alignItems: 'center',
        marginTop: '1%',
        //backgroundColor: "#000000",
    },

    botaoAmareloEsq: {
        backgroundColor: '#F9D366',
        width: 80,
        height: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginBottom: '5%',
    },

    // Fim dos componentes da coluna 1

    // Componentes da coluna 2

    coluna2: {
        width: 180,
        height: "100%",
        marginRight: "1%",
        alignItems: 'center',
        //backgroundColor: '#FFF',
    },

    CA_Init: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: 80,
        //backgroundColor: '#FFF'
    },

    // Fim dos componentes da coluna 2

    // Componentes da coluna 3

    coluna3: {
        width: 90,
        height: "100%",
        //marginLeft: "1%",
        //backgroundColor: "#FFFFFF",
    },

    healthBarRec: {
        width: 50,
        height: 160,
        marginTop: '20%',
        alignSelf: 'center',
    },

    inventarioRec: {
        width: 65,
        height: 145,
        alignItems: 'center',
        marginLeft: '15%',
        marginTop: '90%',
        //backgroundColor: '#FFF'
    },

    botaoAmareloDirPP: {
        backgroundColor: '#F9D366',
        width: 65,
        height: 65,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '2%',
        marginLeft: '5%',
    },

    botaoAmareloDir: {
        backgroundColor: '#F9D366',
        width: 80,
        height: 80,
        borderRadius: 100,
        marginTop: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'auto',
        marginLeft: '5%',
    },



    // Fim dos componentes da coluna 3


    /*//////////////////////////////////////////////////////////////////////////////////////////
    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    *///////////////////////////////////////////////////////////////////////////////////////////   

});