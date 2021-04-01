import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.tasks.task.label}</Text>
                <View style={styles.circular}></View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        height: 40,
        marginTop: 50,
        // ...
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#8C82FF",
        justifyContent: "flex-start",
        marginLeft: 20,
        borderRadius: 5,
    },
    itemText: {
        maxWidth: "80%",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,
        color: "#1A1A1A",
        marginLeft: "15%",
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#2F69FF",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 5,
        position: "absolute",
        right: 0,
        marginRight: 20,
    },
});



export default Task;