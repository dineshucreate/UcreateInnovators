//
//  PrintLogs.m
//  SamplesReact
//
//  Created by ucreate-51 on 11/03/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "PrintLogs.h"

@implementation PrintLog

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(PrintLog : (RCTResponseSenderBlock)callback){
  @try{
    NSString *printname = @"IOS NATIVE BUILD";
    callback(@[[NSNull null], printname]);
  }
  @catch(NSException *exception){
    callback(@[exception.reason, [NSNull null]]);
  }
}

@end
