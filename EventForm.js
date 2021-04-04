import React, { Component, useState } from "react";
import { TouchableHighlight, View, Text, StyleSheet, TextInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDateTime } from './api';

export default function EventForm({ navigation }) {
    const [event, setEvent] = useState({
        title: null,
        date: Date.now()
    })
    const styles = StyleSheet.create({
        fieldContainer: {
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: '#fff',
        },
        text: {
            height: 40,
            // borderWidth: 1,
            margin: 0,
            marginLeft: 7,
            marginRight: 7,
            paddingLeft: 10,
        },
        borderTop: {
            borderColor: '#edeeef',
            borderTopWidth: 0.5,
        },
        button: {
            height: 50,
            backgroundColor: '#48BBEC',
            borderColor: '#48BBEC',
            alignSelf: 'stretch',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
        },
        buttonText: {
            color: '#fff',
            fontSize: 18,
        },
    });
    const handleAddPress = () => {
        console.log(event);
        navigation.goBack();
    }
    const handleChangeTitle = (value) => {
        setEvent(event => ({...event, title: value}));
    }
    const handleDatePress = () => {
        setEvent(event => ({...event, showDatePicker: true}));
    }
    const handleDatePicked = ( date ) => {
        setEvent(event => ({...event, date: date}))
        handleDatePickerHide();
    }
    const handleDatePickerHide = () => {
        setEvent(event => ({...event, showDatePicker: false}));
    }
    return (
        <>
            <View style={{ flex: 1, }}>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={[styles.text, styles.borderTop]}
                        onChangeText={handleChangeTitle}
                        placeholder="Event title"
                        spellCheck={false}
                        value={event.title}
                    />
                    {/* <TextInput
                        style={[styles.text, styles.borderTop]}
                        placeholder="Event date"
                        spellCheck={false}
                        value={formatDateTime(event.date.toString())}
                        editable={!event.showDatePicker}
                        onFocus={handleDatePress}
                    /> */}
                    <DateTimePicker
                        isVisible={event.showDatePicker}
                        mode="datetime"
                        onConfirm={handleDatePicked}
                        onCancel={handleDatePickerHide}
                        value={event.date}
                    />

                </View>
                <TouchableHighlight style={styles.button} onPress={handleAddPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>

        </>

    );
}