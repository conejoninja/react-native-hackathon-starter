/**
 * @providesModule HSPricingCard
 */

import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Text from 'HSText'
import fonts from 'HSFonts'
import colors from 'HSColors'
import Button from 'HSButton'
let styles = {}

const PricingCard = ({children, flexDirection, containerStyle, wrapperStyle, title, price, info, button, color}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <View style={[styles.wrapper, wrapperStyle && wrapperStyle, flexDirection && {flexDirection}]}>
      <Text style={[styles.pricingTitle, {color}]}>{title}</Text>
      <Text style={styles.pricingPrice}>{price}</Text>
      {
        info.map((info, i) => {
          return <Text key={i} style={styles.pricingInfo}>{info}</Text>
        })
      }
      <Button
        icon={{name: button.icon}}
        buttonStyle={[styles.button, button.buttonStyle, {backgroundColor: color}]}
        title={button.title} />
    </View>
  </View>
)

styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: 'white',
    borderColor: colors.grey5,
    borderWidth: 1,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {height: 1, width: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5
      },
      android: {
        elevation: 1
      }
    })
  },
  wrapper: {
    backgroundColor: 'transparent'
  },
  pricingTitle: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 30,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      },
      android: {
        fontFamily: fonts.android.black
      }
    })
  },
  pricingPrice: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 40,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.bold
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  },
  pricingInfo: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: colors.grey3,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.bold
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  },
  button: {
    marginTop: 15,
    marginBottom: 10
  }
})

export default PricingCard
