
package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNReactNativeCalcModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNReactNativeCalcModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "Calc";
  }

  @ReactMethod
  public void sum(int value1, int value2, Callback callback){

    try {
      callback.invoke(value1+value2);
    }catch (Exception e){

    }
  }
  @ReactMethod
  public void sub(int value1, int value2, Callback callback){

    try {
      int subtractVal = value1>value2?value1-value2: value2-value1;
      callback.invoke(subtractVal);
    }catch (Exception e){

    }
  }
}