import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getDetailProducts} from '../services/Api';

const DetailScreen = ({route}) => {
  const navigation = useNavigation();
  const {productId} = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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
    <ScrollView style={{backgroundColor: '#ffffff', flex: 1}}>
      <View
        style={{
          backgroundColor: '#d3cdcc',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={30} color="#706b8d" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#706b8d',
            padding: 15,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            letterSpacing: 1.5,
          }}>
          Detail Page
        </Text>
        <Icon name="arrow-back-outline" size={30} color="#d3cdcc" />
      </View>
      <View style={styles.container}>
        <Image source={{uri: product.thumbnail}} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.text}>
          <Icon name="star" size={15} color="gold" />
          {product.rating}
        </Text>

        <View style={styles.tagContainer}>
          {product.tags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tagButton}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.line}></View>
        <Text style={styles.text}>Category: {product.category}</Text>
        <Text style={styles.text}>Warranty: {product.warrantyInformation}</Text>
        <Text style={styles.text}>Return Policy: {product.returnPolicy}</Text>
        <Text style={styles.text}>
          Shipping Info: {product.shippingInformation}
        </Text>
        <Text style={styles.text}>
          Availability: {product.availabilityStatus}
        </Text>

        <View style={styles.line}></View>

        {/* Specification Button */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.specificationButton}>Specification</Text>
        </TouchableOpacity>

        <View style={styles.line}></View>

        <Text style={styles.reviewsTitle}>Description:</Text>
        <Text style={styles.text}>{product.description}</Text>

        <View style={styles.line}></View>

        {/* Reviews Section */}
        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsTitle}>Reviews:</Text>
          {product.reviews.map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <Text style={styles.reviewerName}>{review.reviewerName}</Text>
              <Text style={styles.reviewComment}>{review.comment}</Text>
              <Text style={styles.reviewDate}>
                {new Date(review.date).toLocaleDateString()}
              </Text>
              <Text style={styles.reviewRating}>Rating: {review.rating}</Text>
            </View>
          ))}
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Specification</Text>
            <Text style={styles.modalText}>Stock: {product.stock}</Text>
            <Text style={styles.modalText}>Brand: {product.brand}</Text>
            <Text style={styles.modalText}>SKU: {product.sku}</Text>
            <Text style={styles.modalText}>Weight: {product.weight}</Text>
            <Text>
              Dimensions:{' '}
              {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tagButton: {
    backgroundColor: '#eee',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    fontSize: 14,
    color: '#333',
  },
  specificationButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  reviewsContainer: {
    marginTop: 20,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewComment: {
    fontSize: 14,
    marginBottom: 5,
  },
  reviewDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  reviewRating: {
    fontSize: 14,
    color: '#444',
  },
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },

  image: {
    width: '100%',
    height: 250,
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
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
});

export default DetailScreen;
