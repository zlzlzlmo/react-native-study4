import {
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { IExpense } from "./ExpensesOutput";
import { FlatList } from "react-native-gesture-handler";

interface ExpensesListProps {
  expenses: IExpense[];
}

const renderExpenseItem = (renderItem: ListRenderItemInfo<IExpense>) => (
  <Text>{renderItem.item.description}</Text>
);

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
