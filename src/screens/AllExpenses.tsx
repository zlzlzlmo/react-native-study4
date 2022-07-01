import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod="지난 7일 간" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
