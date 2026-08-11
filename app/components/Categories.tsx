import { colors } from "@/config/colors";
import { categories } from "@/config/data";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Categories() {
  return (
    <View>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryName}>{item.name}</Text>
            <Text>{item.taskCount} tasks</Text>

            <View>
              <Image source={item.image} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  categoryItem: {
    backgroundColor: colors.white,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
});
