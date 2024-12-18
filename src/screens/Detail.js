import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getDetailProducts} from '../services/Api';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {productId} = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await getDetailProducts(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <ScrollView>
      <View>
        <View
          style={{
            backgroundColor: '#191919',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="arrow-back-outline" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              padding: 15,
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              letterSpacing: 1.5,
            }}>
            Detail Page
          </Text>
          <Icon name="arrow-back-outline" size={30} color="#191919" />
        </View>
        <View style={styles.container}>
          <Image source={{uri: product.thumbnail}} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.category}>Category: {product.category}</Text>
          <Text style={styles.stock}>Stock: {product.stock}</Text>
          <Text style={styles.rating}>Rating: {product.rating}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  category: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  stock: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    color: '#000',
  },
});

export default DetailScreen;
