import React from "react";
import{View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from "react-native";

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/106774834?v=4';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlToMyGithub = 'https://github.com/KevinQueiroz';

const App = () => {

    const handlePressGoToGithub = async ()=>{
        console.log('Verificando Link...');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res){
            console.log('Link Aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
        }
    }

    return ( 
    <SafeAreaView style= {style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle='light-content'/>
        <View style= {style.content}>
                <Image
                accessibilityLabel="Foto Perfil Kevin Queiroz" 
                style={style.avatar} 
                source ={{uri: imageProfileGithub}} />
            <Text 
            accessibilityLabel="Nome: Kevin Queiroz"
            style= {[style.defaultText , style.name]}>Kevin Queiroz
            </Text>
            <Text 
            accessibilityLabel="Nickname: KevinQueiroz"
            style= {[style.defaultText , style.nickName]}>KevinQueiroz
            </Text>
            <Text 
            accessibilityLabel="Cargo Atual: Full Stack Development Student"
            style= {[style.defaultText , style.description]}>Full Stack Development Student
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
            <View style= {style.button}>
                <Text style= {[style.defaultText, style.textButton]}>Open in Github</Text>
            </View>
            </Pressable>
        </View>

    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor : colorGithub,
        flex: 1, //Expandir cor para tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,   
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,   
    },
    nickName: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});