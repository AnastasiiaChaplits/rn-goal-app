import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <Pressable onPress={() => onDeleteItem(item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
