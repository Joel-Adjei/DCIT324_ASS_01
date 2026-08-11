import { colors } from "@/config/colors";
import { tasks } from "@/config/data";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  return (
    <View>
      <Text style={styles.title}>Tasks</Text>

      <View>
        {tasks.map((task) => (
          <View style={styles.task} key={task.id}>
            <Text style={styles.taskTitle}>{task.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  task: {
    paddingHorizontal: 17,
    height: 120,
    justifyContent: "center",
    marginBottom: 10,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#959595",
    backgroundColor: colors.white,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
