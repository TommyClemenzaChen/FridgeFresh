import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';

const Homepage = () => {
    const navigation = useNavigation();

    return (
    <Button title="Homepage" onPress={() => navigation.navigate("SignIn")} />
    );
};

export default Homepage;