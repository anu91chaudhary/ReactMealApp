import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'
import colors from '../constants/colors'

function CategoryGridTile({ color, title, onPress }) {
  return <View style={[styles.gridContainer, { backgroundColor: color }]}>
    <Pressable
      style={({pressed}) => [styles.item, pressed ? styles.itemPressed : null]}
      android_ripple={{ color: colors.gray }}
      onPress={ onPress}
    >
      <View style={[styles.innerContainer, ]}>
        <Text style={styles.categoryTitle}>{title}</Text>
      </View>
    </Pressable>
  </View>
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    height: 100,
    margin: 10,
    elevation: 4,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform === 'android' ? 'hidden' : 'visible'
  },
  item: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  itemPressed: {
    opacity: 0.5,
  },
  categoryTitle: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  }
})