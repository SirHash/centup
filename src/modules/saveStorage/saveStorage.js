import React, { Component } from 'react';
import { TouchableOpacity, View, Text, AsyncStorage, StyleSheet } from 'react-native';

import styles from './saveStorage.styles.js'



export default class saveStorage extends Component {
   
    render() {
        return (
            
            <View>
                <View style={styles.container}>  
                    <TouchableOpacity onPress={this.saveData}>  
                        <Text>Clica aqui filhao!!!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.displayData}>  
                        <Text>Mostrar Dados</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
    saveData(){
        let obj = {
            name: 'CentupApp',
            email: 'elefante@gmail',
            user: 'Fabio'
        }
        alert('Dados salvos com sucesso jovem!')
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }
    displayData = async() =>{
        try{
            let user = await AsyncStorage.getItem('user');
            let parsedData = JSON.parse(user);
            alert(parsedData.name);
        }catch(error){
            alert('Não há dados salvos');
        }
    }
}
