import { colors } from "@/config/colors";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Categories from "../components/Categories";
import Tasks from "../components/Tasks";

export default function home() {
  return (
    <View>
      {/* Heading */}
      <View style={styles.heading}>
        <View>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>14 Tasks today</Text>
        </View>

        <View style={styles.profileImage}>
          <Image source={require("@/assets/person.png")} />
        </View>
      </View>

      {/* Search bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <View style={styles.searchInput}>
          <Image source={require("@/assets/search.png")} />
          <TextInput placeholder="Search..." />
        </View>

        <View
          style={{
            backgroundColor: colors.filterButton,
            width: 50,
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("@/assets/filter.png")} />
        </View>
      </View>

      {/* Categories */}
      <View style={{ marginBottom: 20, marginTop: 20 }}>
        <Categories />
      </View>

      {/* Tasks */}
      <View style={{ marginBottom: 20, marginTop: 20 }}>
        <Tasks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.black,
  },
  taskCount: {
    fontSize: 17,
    color: colors.black,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
});
