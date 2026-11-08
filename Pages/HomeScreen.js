
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

import movies from "../Data/movies";
import MovieList from "../Components/MovieList";

const HomeScreen = ({ navigation }) => {
  const featuredMovies = movies.slice(0, 4);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome to MovieApp 🎬
        </Text>

        <Text style={styles.subtitle}>
          Discover your next favorite movie.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Movies")}
      >
        <Text style={styles.buttonText}>
          Browse Movies
        </Text>
      </TouchableOpacity>

      <MovieList
        movies={featuredMovies}
        title="Featured Movies"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    padding: 20,
    marginTop: 30,
  },

  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    fontSize: 15,
    marginTop: 10,
  },

  button: {
    backgroundColor: "#E50914",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
