package com.samplesreact;

import android.content.Context;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PrintLogs extends ReactContextBaseJavaModule {

    Context context;

    public PrintLogs(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @Override
    public String getName() {
        return "PrintLog";
    }

    @ReactMethod
    public void PrintLog(Callback cb) {
        try {
            cb.invoke(null, "Android Native");
        } catch (Exception e) {
            cb.invoke(e.toString(), null);
        }

    }

    @ReactMethod
    public void exampleMethod(int a, int b, Callback cb) {
        // An example native method that you will expose to React
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        int value = a + b;
        try {
            cb.invoke(null, "exampleMethod Native".concat("" + value));
        } catch (Exception e) {
            cb.invoke(e.toString(), null);
        }

    }

}
