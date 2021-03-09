
import React,{useState} from 'react';
import {
  
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Text, Container, Content, Header, Body, Card, H1, H3, Title, Button
} from 'native-base';
import Icons from './components/Icons';
import Snackbar from 'react-native-snackbar'
const itemArray = new Array(9).fill('empty')

function App() {

  const [isCross , setIsCross] = useState(false);
  const [winMessage, setwinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if(winMessage){
      return Snackbar.show({
        text: winMessage,
        backgroundColor:"black",
        color:"white"
      })
    }

    if(itemArray[itemNumber] === 'empty'){
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    }else{
      return Snackbar.show({
        text:" Position already filled",
        backgroundColor:"red",
        color:"white"
      })
    }

    checkWinner();
  }

  const reloadGame = () => {
    isCross(false);
    winMessage('');
    itemArray.fill('empty', 0, 9);
  }

  const checkWinner = () => {
    if(itemArray[0]!=='empty' && itemArray[0] === itemArray[1] && itemArray[1] ===  itemArray[2]){
      setwinMessage(`${itemArray[0]} won`)
    }
    if(itemArray[3]!=='empty' && itemArray[3] === itemArray[4] && itemArray[4] ===  itemArray[5]){
      setwinMessage(`${itemArray[3]} won`)
    }
    if(itemArray[6]!=='empty' && itemArray[6] === itemArray[7] && itemArray[7] ===  itemArray[8]){
      setwinMessage(`${itemArray[6]} won`)
    }
    if(itemArray[0]!=='empty' && itemArray[0] === itemArray[3] && itemArray[3] ===  itemArray[6]){
      setwinMessage(`${itemArray[0]} won`)
    }
    if(itemArray[1]!=='empty' && itemArray[1] === itemArray[4] && itemArray[4] ===  itemArray[7]){
      setwinMessage(`${itemArray[1]} won`)
    }
    if(itemArray[2]!=='empty' && itemArray[2] === itemArray[5] && itemArray[5] ===  itemArray[8]){
      setwinMessage(`${itemArray[2]} won`)
    }
    if(itemArray[0]!=='empty' && itemArray[0] === itemArray[4] && itemArray[4] ===  itemArray[8]){
      setwinMessage(`${itemArray[0]} won`)
    }
    if(itemArray[2]!=='empty' && itemArray[2] === itemArray[4] && itemArray[4] ===  itemArray[6]){
      setwinMessage(`${itemArray[2]} won`)
    }
  }

  return (
    <Container style={{backgroundColor:"#333945", padding:5}}>
      <Header>
        <Body>
          <Title>
            TicTacToe
          </Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemArray.map((item, index) => (

              <TouchableOpacity style={styles.box} onPress={() => changeItem(index)} key={index}>
                <Card style={styles.card}>
                  <Icons name={item}/>
                  
                </Card>
              </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} primary block rounded>
              <Text>Reload Game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} turns</H3>
        )}
      </Content>
      
    </Container>
  );
};

const styles = StyleSheet.create({
  grid:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20
  },
  box:{
    width:"33%",
    marginBottom:6,
    
  },
  card:{
    height:120,
    justifyContent:"center",
    alignItems:"center"
  },
  message:{
    textAlign:"center",
    textTransform:"uppercase",
    color:"white",
    marginTop:10,
    backgroundColor:"#23C4ED",
    paddingVertical:20,
    marginVertical:20
  }
});

export default App;
