using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Image.Picker.Custom.RNImagePickerCustom
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNImagePickerCustomModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNImagePickerCustomModule"/>.
        /// </summary>
        internal RNImagePickerCustomModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNImagePickerCustom";
            }
        }
    }
}
