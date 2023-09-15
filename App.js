import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Pressable, Button } from 'react-native';
import {useState} from 'react'

export default function App() {

  const [board, setBoard] = useState(['','','','','','','','',''])
  const [turn, setTurn] = useState(1)

  const setCell = (n) => {
    if (board[n] == '' && !checkWin()) {
      setBoard(board.map((x, i) => {
        if (i == n) {
          return turn % 2 == 0 ? "O" : "X"
        } else {
          return x
        }
      }))
      setTurn((x) => x + 1)
    }
  }

  const reset = () => {
    setTurn(1)
    setBoard(['','','','','','','','',''])
  }

  const checkWin = () => {
    const winCons = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ]

    for (let i = 0; i < winCons.length; i++) {
      const winCon = winCons[i]
      if (board[winCon[0]] == board[winCon[1]] && board[winCon[0]] == board[winCon[2]] && board[winCon[0]] != '') {
        return true
      }
    }
    return false
  }

  return (
    <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {
        checkWin() ? <><Text>Player {turn % 2 == 0 ? "X" : "O"} wins!</Text><Button onPress={reset} title="Reset" /></> : null
      }
      <View style={styles.container}>
        <Pressable onPress={() => setCell(0)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[0]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(1)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[1]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(2)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[2]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(3)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[3]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(4)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[4]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(5)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[5]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(6)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[6]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(7)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[7]}</Text></View>
        </Pressable>
        <Pressable onPress={() => setCell(8)}>
          <View style={styles.cell}><Text style={styles.cellText}>{board[8]}</Text></View>
        </Pressable>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cell: {
    borderWidth: 1,
    height: windowWidth * 32 / 100,
    width: windowWidth * 32 / 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  cellText: {
    fontSize: windowWidth * 20 / 100
  }
});
