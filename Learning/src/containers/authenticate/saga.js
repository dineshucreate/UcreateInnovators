import { LOGIN_CLICKED } from "./types";
import { put, takeEvery } from "redux-saga/effects";
import User from "../../utilities/models/user";
import { saveToAsyncStorage } from "../../utilities/asyncstorage";
import { AsyncStorage } from "react-native";
import { loginSucceed } from "./actions";
import NavigationService from '../../utilities/navigationservice'
import {
  NavigationActions,
  StackActions,
  createDrawerNavigator
} from "react-navigation";
function* loginClicked(action) {
  let user = new User(null);
  const response = yield user.loginUser(action.email, action.password);
  user = new User(response.data);
  // Saving to Async Storage
  yield AsyncStorage.setItem("user", JSON.stringify(user));
  NavigationService.navigate('RootDrawerStack')
}

export default function* watchLoginClicked() {
  yield takeEvery(LOGIN_CLICKED, loginClicked);
}
