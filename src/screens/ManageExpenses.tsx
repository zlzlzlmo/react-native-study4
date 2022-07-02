import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type Props = StackScreenProps<RootStackParamList, "ManageExpenses">;

const ManageExpenses = ({ route, navigation }: Props) => {
  const editedExpenseId = route.params?.expenseId;

  // * value가 있으면 true 없으면 false 반환
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "비용 편집" : "비용 추가",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({});
