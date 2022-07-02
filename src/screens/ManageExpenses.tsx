import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import IconButton from "../components/ui/IconButton";
import { Entypo } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";

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

  const deleteExpenseHandler = () => {};

  const cancelHandler = () => {};

  const confirmHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          취소
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "변경" : "추가"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <Entypo
            name="trash"
            size={36}
            color={GlobalStyles.colors.subColor}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.mainColor,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.subColor,
    alignItems: "center",
  },
});
