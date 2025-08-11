import { useState } from "react";
import { StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native"

export function Home() {
    const [password, setPassword] = useState(true);

    function handleAddProduct() {
        setPassword(!password);
    }
    return(
        <View style={styles.container}>
            <Text style ={styles.title}>Lista de Compras</Text>
            <Text style = {styles.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>

            <View style={styles.form}>
                <TextInput
                secureTextEntry={password} 
                style={styles.input}
                placeholder="Nome do Produto"
                placeholderTextColor="#BDBABA"
                keyboardType="default"  
                />

            <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        padding: 24,
    },
    title: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 28.8,
        marginTop: 48,
    },
    todaysDate:{
        color: "#000",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 28.8,
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor:"#FFFF",
        borderRadius: 5,
        marginRight: 16,
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop:18,
    },
    button: {
        width: 56,
        height: 56,   
        backgroundColor: "#31C667",
        borderRadius: 5,

        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        color: "#FFF",
        fontSize: 24,
    }
});