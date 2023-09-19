import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from '@navigation/navigation'
import AuthNavigation from '@navigation/authnavigation'
import { Provider } from 'react-redux'
import { store } from '@stores/index'

const App = () => {
  return (
    <Provider store={store}>
      {/* <MainNavigation /> */}
      <AuthNavigation/>
    </Provider>
  )
}

export default App