import React, { Component } from "react";
import { Text, FlatList, StyleSheet, TouchableHighlight } from "react-native";
import EventCard from "./EventCard";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    },
    buttonStyle: {
        height: 50,
            backgroundColor: '#48BBEC',
            borderColor: '#48BBEC',
            alignSelf: 'stretch',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
    }
})

class EventList extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                events: this.state.events.map((evt) => ({
                    ...evt,
                    timer: Date.now()
                }))
            })
        }, 1000)
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date)
        }));
        this.setState({ events });
    }
    handleAddEvent = () => {
        this.props.navigation.navigate("EventForm");
    }
    render() {
        return [
            <>
            <FlatList
                key="flatlist"
                style={styles.list}
                data={this.state.events}
                renderItem={({ item }) => <EventCard event={item}></EventCard>}
                keyExtractor={item => item.id}
            />
            <TouchableHighlight key="thl" style={styles.buttonStyle} onPress={this.handleAddEvent}>
                    <Text>Add Event</Text>
                </TouchableHighlight>
            </>
        ];
    }
}

export default EventList;