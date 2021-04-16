import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const HomeMap = ({navigation}) => {
    return (
        <SafeAreaView style={{
            height: 300,
            backgroundColor: "#a0abff",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Text>Mapa ako pre</Text>
        </SafeAreaView>
    )
}

export default HomeMap

const styles = StyleSheet.create({})
