import { StyleSheet } from 'react-native'

const styles2 = StyleSheet.create({

  container: {
    marginTop: 30,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contentContainer: {
    borderRadius: 10,
    width: 300,
    height: 150,
    alignSelf: 'center',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4
      },
      android: {
        elevation: 4
      }
    })

  },

  topInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5
  },

  nameContainer: {
    alignSelf: 'center'
  },

  bottomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 5
  }
})

export default styles2
