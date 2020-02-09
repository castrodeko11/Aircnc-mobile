import React, { useState, useEffect } from 'react';

import { SafeAreaView, ScrollView, StyleSheet, AsyncStorage, Text, Image, Platform, TouchableOpacity } from 'react-native';

import SpotList from '../components/SpotList'

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);

        })

    }, []);



    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },


})