import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "some pretty Resturant",
    icon,
    photos = [
      "https://pensforchrist.org/public/assets/frontend/img/bg-img/pfc.jpg",
    ],
    address = "land view",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white", margin: 10 },
  cover: { padding: 20, backgroundColor: "white" },
});
