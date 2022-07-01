import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface IExpense {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface ExpensesSummaryProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  return (
    <View>
      <Text>{periodName}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({});
