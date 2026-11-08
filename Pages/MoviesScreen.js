
import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";

const categories = [
  {
    name: "Latest",
    description: "Discover newly released movies",
    icon: "🆕",
    color: "#8E44AD",
  },
  {
    name: "Top Rated",
    description: "Explore the highest rated movies",
    icon: "⭐",
    color: "#D4A017",
  },
  {
    name: "Popular",
    description: "Watch movies everyone loves",
    icon: "🔥",
    color: "#E50914",
  },
  {
    name: "Recommended",
    description: "Find movies worth watching",
    icon: "🎬",
    color: "#2471A3",
  },
];

const MoviesScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore Movies 🎬</Text>

      <Text style={styles.subtitle}>
        Choose a movie category
      </Text>

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <Pressable
            key={category.name}
            style={[
              styles.card,
              { borderLeftColor: category.color },
            ]}
            onPress={() =>
              navigation.navigate(category.name, {
                category: category.name,
              })
            }
          >
            <Text style={styles.icon}>{category.icon}</Text>

            <Text style={styles.categoryTitle}>
              {category.name}
            </Text>

            <Text style={styles.description}>
              {category.description}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 40,
  },

  title: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
    margin: 20,
  },

  subtitle: {
    color: "#aaa",
    fontSize: 15,
    marginHorizontal: 20,
    marginBottom: 15,
  },

  categoryContainer: {
    padding: 15,
  },

  card: {
    backgroundColor: "#222",
    padding: 25,
    borderRadius: 12,
    marginBottom: 18,
    borderLeftWidth: 5,
  },

  icon: {
    fontSize: 35,
    marginBottom: 10,
  },

  categoryTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    color: "#aaa",
    marginTop: 7,
  },
});

export default MoviesScreen;
