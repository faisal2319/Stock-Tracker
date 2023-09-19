import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  topPart: {

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  showFav: {
    backgroundColor: 'grey',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 7
  },

  container: {
    width: '100%',
    backgroundColor: 'blue'
  },
  userName: {
    // fontFamily: 'Roboto',
    fontSize: 20,
    marginLeft: 20

  },
  welcomeMessage: {
    // fontFamily: 'Roboto',
    marginTop: 2,
    fontSize: 24,
    marginLeft: 20
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    height: 50
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: '#F3F4F8',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: '100%'
  },
  searchInput: {
    // fontFamily: 'roboto',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: 'grey',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: 'white'
  },
  tabsContainer: {
    width: '100%',
    marginTop: 7
  },

  tab: (stock, item) => ({
    paddingVertical: 4 / 2,
    paddingHorizontal: 4,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: stock === item ? 'grey' : 'white'
  }),
  tabText: (stock, item) => ({
    // fontFamily: FONT.medium,
    color: stock === item ? 'grey' : 'green'

  })
})

export default styles
