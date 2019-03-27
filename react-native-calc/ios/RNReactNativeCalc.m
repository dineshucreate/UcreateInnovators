
#import "RNReactNativeCalc.h"
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RNReactNativeCalc, NSObject)

RCT_EXTERN_METHOD(sum: (int)value1
                  value2:(int)value2
                  callback:(RCTResponseSenderBlock)callback)
@end
//@implementation RNReactNativeCalc
//
//- (dispatch_queue_t)methodQueue
//{
//    return dispatch_get_main_queue();
//}
//RCT_EXPORT_MODULE()
//
//
//
//@end


