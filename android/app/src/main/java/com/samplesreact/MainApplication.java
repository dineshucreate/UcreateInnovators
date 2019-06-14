package com.samplesreact;

import android.app.Application;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.util.Base64;
import android.util.Log;

import com.facebook.CallbackManager;
import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import org.pweitz.reactnative.locationswitch.LocationSwitchPackage;
import io.fullstack.oauth.OAuthManagerPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.reactlibrary.RNReactBridgeTestingPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();
  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new FBSDKPackage(mCallbackManager),

            new VectorIconsPackage(), new RNGeocoderPackage(), new LocationSwitchPackage(),
          new MapsPackage(), new RNReactBridgeTestingPackage(), new OAuthManagerPackage());

    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
//    printHashKey(this);

  }

  public static void printHashKey(Context pContext) {
    try {
      PackageInfo info = pContext.getPackageManager().getPackageInfo(pContext.getPackageName(), PackageManager.GET_SIGNATURES);
      for (Signature signature : info.signatures) {
        MessageDigest md = MessageDigest.getInstance("SHA");
        md.update(signature.toByteArray());
        String hashKey = new String(Base64.encode(md.digest(), 0));
        Log.e("TAG", "printHashKey() Hash Key: " + hashKey);
      }
    } catch (NoSuchAlgorithmException e) {
      Log.e("TAG", "printHashKey()", e);
    } catch (Exception e) {
      Log.e("TAG", "printHashKey()", e);
    }
  }
}
