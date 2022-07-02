import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type Props = StackScreenProps<RootStackParamList, "ManageExpenses">;

const ManageExpenses = ({ navigation }: Props) => {
  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({});
