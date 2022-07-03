import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { useExpenseContext } from "../store/expenses-context";

const AllExpenses = () => {
  const { expenses } = useExpenseContext();
  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={expenses}
      fallbackText="소비한 비용이 없습니다."
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
