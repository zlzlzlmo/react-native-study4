import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import { useExpenseContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const { expenses } = useExpenseContext();

  const recentExpense = expenses.filter(({ date }) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return date > date7DaysAgo;
  });

  return (
    <ExpensesOutput expensesPeriod="지난 7일 간!" expenses={recentExpense} />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
