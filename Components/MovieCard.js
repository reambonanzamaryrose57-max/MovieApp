
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: movie.image }}
        style={styles.poster}
        resizeMode="cover"
      />

      <View style={styles.details}>
        <Text style={styles.title}>
          {movie.title}
        </Text>

        <Text style={styles.year}>
          {movie.year}
        </Text>

        <Text style={styles.rating}>
          ⭐ {movie.rating}
        </Text>

        <Text style={styles.description}>
          {movie.desc}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    width: 160,
  },

  poster: {
    width: "100%",
    height: 220,
  },

  details: {
    padding: 10,
  },

  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  year: {
    color: "#aaa",
    marginTop: 5,
  },

  rating: {
    color: "#FFD700",
    marginTop: 5,
  },

  description: {
    color: "#bbb",
    fontSize: 12,
    marginTop: 7,
    lineHeight: 18,
  },
});

export default MovieCard;
