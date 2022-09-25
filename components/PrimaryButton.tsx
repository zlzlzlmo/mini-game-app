import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<Props> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
