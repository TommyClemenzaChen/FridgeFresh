import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from 'react-native';

const Login = () => {
    const navigation = useNavigation();

    return (
    <Button title="Login" onPress={() => navigation.navigate("Homepage")} />
    );
};

export default Login;