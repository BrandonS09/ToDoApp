import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image}/>
        <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
        <View style = {styles.buttonContainer}>
            <View style = {styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f81382"/>
            </View>
            <View style = {styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
            </View>
        </View>
        </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#311b6b"
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: 'row'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 12,
    color: '#120438',
    borderRadius: 6,
  },
  button: {
    width: 100,
    marginHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});