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
import ExpenseItem from "./ExpenseItem";

interface ExpensesListProps {
  expenses: IExpense[];
}
const renderExpenseItem = (renderItem: ListRenderItemInfo<IExpense>) => {
  const { id, description, amount, date } = renderItem.item;
  return (
    <ExpenseItem
      id={id}
      description={description}
      amount={amount}
      date={date}
    />
  );
};

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
