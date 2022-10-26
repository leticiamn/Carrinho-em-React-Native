import { FlatList, StyleSheet, Text, View } from "react-native";
import { numberFormat } from "../services/numberFormat";

export const Cart = ({ items, getTotalPrice }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <View style={styles.cartItem}>
        <View>
          <Text style={styles.text}>{item.product.name} x {item.qty}</Text>
        </View>
        <View>
          <Text style={styles.bold}>{numberFormat(item.product.price * item.qty)}</Text>
        </View>
      </View>}

      ListFooterComponent={() => (<View style={styles.cartFooter}>
        <Text style={styles.bold}>Total</Text>
        <Text style={styles.bold}>{numberFormat(getTotalPrice())}</Text>
      </View>)}
    />
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5
  },
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'gray',
    borderTopWidth: 2,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5
  },
  text: {
    fontSize: 20
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
