import React,{useEffect,useState} from 'react'
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from "react-native";
  import question from "../asset/question";

const EachPage = ({ route,navigation }) => {
    const [next, setNext] = useState(null);
    const [back, setBack] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    useEffect(() => {
        setCurrentIndex(question.findIndex((item) => item.id === route.params.id));
      }, [route]);
    
      useEffect(() => {
        setNext(currentIndex + 1);
        setBack(currentIndex - 1);
        if (currentIndex === 0) {
          setBack(question.length - 1);
        }
        if (currentIndex + 1 === question.length) {
          setNext(0);
        }
      }, [currentIndex]);
  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text>{route.params.name}</Text>
      {/* //If you press the Next button, you go to the next page. //So, if the
      current page you visit is the 2nd page, then you go to the 3rd page after
      pressing the Next button. */}
      <Button
        title="Next"
        onPress={() => navigation.navigate("EachPage", question[next])}
      />
      <Button
        title="Back"
        onPress={() => navigation.navigate("EachPage", question[back])}
      />
    </View>
  )
}

export default EachPage