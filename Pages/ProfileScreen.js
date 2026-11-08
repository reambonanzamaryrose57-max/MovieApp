
import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👤</Text>

      <Text style={styles.name}>Reambonanza</Text>

      <Text style={styles.email}>
        movielover@example.com
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.heading}>About</Text>
        <Text style={styles.description}>
          Welcome to MovieApp! Discover and explore
          your favorite movies in one place.
        </Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.heading}>Application Info</Text>
        <Text style={styles.description}>
          MovieApp Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    padding: 20,
    paddingTop: 70,
  },

  icon: {
    fontSize: 75,
    marginBottom: 15,
  },

  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  email: {
    color: "#aaa",
    marginTop: 8,
    marginBottom: 30,
  },

  infoCard: {
    backgroundColor: "#222",
    width: "100%",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  heading: {
    color: "#E50914",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    color: "#ddd",
    fontSize: 14,
    lineHeight: 22,
  },
});

export default ProfileScreen;
