import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { ExpenseContext, useExpenseContext } from "../store/expenses-context";

const AllExpenses = () => {
  const { expenses } = useExpenseContext();
  return <ExpensesOutput expensesPeriod="Total" expenses={expenses} />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
