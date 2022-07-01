import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

interface ExpenseItemProps {
  description: string;
  amount: number;
  date: Date;
}

const ExpenseItem = ({ description, amount, date }: ExpenseItemProps) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toDateString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toLocaleString()} 원</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.subColor,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.blackColor,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.whiteColor,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.colors.whiteColor,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.mainColor,
    fontWeight: "bold",
  },
});
