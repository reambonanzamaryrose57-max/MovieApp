
import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import movies from "../Data/movies";
import MovieList from "../Components/MovieList";

const CategoryScreen = ({ route, navigation }) => {
  const category = route?.params?.category ?? "Popular";

  const filteredMovies = movies.filter((movie) =>
    movie.categories.includes(category)
  );

  return (
    <View style={styles.container}>
      <MovieList
        movies={filteredMovies}
        title={`${category} Movies`}
        category={`Explore ${category} movies`}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});

export default CategoryScreen;
