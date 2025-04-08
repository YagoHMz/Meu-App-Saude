import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useTarefas } from '../hooks/useTarefas';

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Plantas</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma nova Espécie de Planta..."
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <Button title="Adicionar" onPress={adicionarTarefa} />
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>✖</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E3FBC3",
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },           
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        backgroundColor: "white",
    },
    tarefaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    tarefaTexto: {
        fontSize: 16,
    },
    remover: {
        fontSize: 16,
        color: 'black',
    },
});