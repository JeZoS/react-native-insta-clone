import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Like = () => {
    return (
        <View style={styles.screen} >
            <Text>Heart</Text>
        </View>
    )
}

export default Like

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
