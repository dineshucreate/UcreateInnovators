//
//  rnCalc.swift
//  RNReactNativeCalc
//
//  Created by ucreate-51 on 27/03/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(RNReactNativeCalc)
class RNReactNativeCalc: NSObject {
    
    @objc
    func sum(_ value1: Int, value2: Int, callback: RCTResponseSenderBlock) -> Void {
        let sumRes = value1+value2;
        let sumStr = String(sumRes);
        callback([sumStr])
    }
    
    @objc
    func sub(_ value1: Int, value2: Int, callback: RCTResponseSenderBlock) -> Void {
        let subRes = value1>value2 ? value1-value2 : value2 - value1;
        let subStr = String(subRes);
        callback([subStr])
    }
}
