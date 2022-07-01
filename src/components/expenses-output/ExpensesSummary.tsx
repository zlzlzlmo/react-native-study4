import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IExpense } from "./ExpensesOutput";
import { GlobalStyles } from "../../constants/styles";

interface ExpensesSummaryProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expenseSum = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{expenseSum.toLocaleString()} 원</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.subColor2,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    fontWeight: "bold",
    color: GlobalStyles.colors.whiteColor,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.whiteColor,
  },
});
