
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import MovieCard from "./MovieCard";

const MovieList = ({ movies, title, category, navigation }) => {
  const displayMovies = movies ?? [];

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {title && <Text style={styles.heading}>{title}</Text>}

      {category && (
        <Text style={styles.category}>{category}</Text>
      )}

      <View style={styles.grid}>
        {displayMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </View>

      {displayMovies.length === 0 && (
        <Text style={styles.empty}>
          No movies available in this category.
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    maxWidth: 700,
    alignSelf: "center",
  },

  container: {
    padding: 10,
  },

  heading: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  category: {
    color: "#aaa",
    marginBottom: 15,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  empty: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 30,
  },
});

export default MovieList;
