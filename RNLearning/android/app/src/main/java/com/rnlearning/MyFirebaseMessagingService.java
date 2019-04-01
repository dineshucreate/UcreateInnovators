package com.rnlearning;

import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;

import io.invertase.firebase.messaging.RNFirebaseMessagingService;

public class MyFirebaseMessagingService extends RNFirebaseMessagingService {

    @Override
    public void onNewToken(String s) {
        super.onNewToken(s);
        Log.e("TOKEN","Token:   "+s);
    }
}
