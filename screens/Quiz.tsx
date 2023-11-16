import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {

  const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  const [questions,getQuestions] = useState();
  const [ques,getQues] = useState(0);
  const [options,setOptions]=useState([]);
  const [score,setScore]=useState(0);
  const getQuiz = async()=>{
    const url ='https://opentdb.com/api.php?amount=10&category=18&encode=url3986'
    const res = await fetch(url);
    const data = await res.json();
    getQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
   

  };
  useEffect(() => {
    getQuiz();
  }, [])
  const Handlenextques = ()=>{
    getQues(ques+1)
    setOptions(generateOptionsAndShuffle(questions[ques+1]));
  }

  const generateOptionsAndShuffle = (item) =>{
    const options=[...item.incorrect_answers];
    options.push(item.correct_answer)
    shuffleArray(options)
    return options
  }

  const HandleSelectOption=(option)=>{
    if (option===questions[ques].correct_answer) {
      setScore(score+10)
    }
    if (ques!==9) {
      getQues(ques+1);
      setOptions(generateOptionsAndShuffle(questions[ques+1]));
    }
  }
  const HandleShow=()=>{
    navigation.navigate('Result', { score: score });

  }

  return (
    <View style={styles.container}>
      {questions&& (
        <View style={styles.parent}>
      <View style={styles.Top}>
        <Text style={styles.question}>Q.{decodeURIComponent(questions[ques].question)}</Text>
      </View>
      <View style={styles.Options}>
        <TouchableOpacity style={styles.Option} onPress={()=>HandleSelectOption(options[0])}>
            <Text>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Option} onPress={()=>HandleSelectOption(options[1])}>
            <Text>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Option} onPress={()=>HandleSelectOption(options[2])}>
            <Text>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Option} onPress={()=>HandleSelectOption(options[3])}>
            <Text>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Bottom} >

       {ques!==9 &&
        <TouchableOpacity style={styles.button} onPress={()=>Handlenextques()}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
        {/* <TouchableOpacity onPress={()=>navigation.navigate('Result')}>
            <Text>ENd</Text>
        </TouchableOpacity> */}
      {ques==9 &&
        <TouchableOpacity style={styles.button} onPress={()=>HandleShow()}>
            <Text style={styles.buttonText}>SHOW RESULT</Text>
        </TouchableOpacity>}
      </View>
      </View> )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        padding:12,
        height:'100%'
    },
    parent:{
      height:'100%'
    }
,    Top:{
        marginVertical:16,
    },
    Options:{
        marginVertical:16,
        flex:1,
    },
    Bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    button:{
      // width:'100%',
      backgroundColor:'#0F4C75',
      padding:20,
      borderRadius:16,
      justifyContent:'center',
      alignItems:'center',
    },
    buttonText:{
      color:'white',
      fontSize:15,
    },
    question:{
      color:'black',
      fontSize:30,
      fontWeight:'300',
    },
    Option:{
            width:'100%',
            backgroundColor:'#0F4C75',
            padding:20,
            borderRadius:16,
            justifyContent:'center',
            marginVertical:10
    },
})