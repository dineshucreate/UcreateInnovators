using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Calc.RNReactNativeCalc
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeCalcModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeCalcModule"/>.
        /// </summary>
        internal RNReactNativeCalcModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeCalc";
            }
        }
    }
}
