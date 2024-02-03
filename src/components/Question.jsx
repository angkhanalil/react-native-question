import React ,{useState} from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
   
  Alert,  TextInput
} from "react-native";
import { Text } from 'galio-framework'

const Question = ({ navigation }) => {

  const [text, onChangeText] =  useState('Useless Text');
  const [number, onChangeNumber] = useState('');

  return (
    <>
    <SafeAreaView>
    <View>
      <Text p muted>Hi, I'm a Galio component</Text>
    </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
      <Button
        title="Start"
        onPress={() => navigation.navigate("EachPage", { id: 1 })}
      /> 
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Question;
