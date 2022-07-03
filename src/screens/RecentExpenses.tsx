import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { useExpenseContext } from "../store/expenses-context";

const RecentExpenses = () => {
  const { expenses } = useExpenseContext();

  return <ExpensesOutput expensesPeriod="지난 7일 간!" expenses={expenses} />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});
