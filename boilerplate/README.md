## Android

Open the android project in Android Studio to sync the gradle files.

## iOS

Run the following commands from the project root:

```
cd node_modules/react-native/third-party/glog-0.3.4
./configure --host arm-apple-darwin
```

To run the build on a physical device, manually edit the file here: node_modules/react-native/third-party/glog-0.3.4/src/config.h

Replace:

```
/_ How to access the PC from a struct ucontext _/
#define PC_FROM_UCONTEXT uc_mcontext->**ss.**rip
```

With:

```
/_ How to access the PC from a struct ucontext _/
#if defined(**arm**) || defined(**arm64**)
#define PC_FROM_UCONTEXT uc_mcontext->**ss.**pc
#else
#define PC_FROM_UCONTEXT uc_mcontext->**ss.**rip
#endif
```

Xcode 10 is not currently fully supported for React Native. Therefore, 9.4.1 is recommended. If device support files are needed for iOS 12, they can be downloaded here: https://github.com/Yatko/iOS-device-support-files

Be sure command line tools are set to Xcode 9.4.1
