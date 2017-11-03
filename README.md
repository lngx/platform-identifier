[![Build Status](https://travis-ci.org/lngx/platform-identifier.svg?branch=master)](https://travis-ci.org/lngx/platform-identifier)

## Use

### Installing

To install this library into your Angular project, just run the following command:

```
npm install @lngx/platform-identifier --save
```

...and don't forget to import the library module into your Angular application module:

```typescript
import { PlatformIdentifierModule } from '@lngx/platform-identifier';

@NgModule({
    imports: [
        PlatformIdentifierModule
    ]
})
export class SampleModule { }
```

### Getting platform information

The library provides two simple methods to check the platform, as the example shows:

```typescript
import { Platform, Browser } from '@lngx/platform-identifier';

export class SampleComponent {

    constructor(
        private platform: Platform
    ) {}

    doSomeAction() {
        // Strictly checks if the user is using Chrome
        if (this.platform.is(Browser.CHROME)) {
            // ...
        }

        // Checks if the user is using any Chrome-compatible browser (like Opera, that uses the same engine)
        if (this.platform.isCompatibleWith(Browser.CHROME)) {
            // ...
        }
    }
}
```

### Available checks

You may check information of the running browser, engine and OS. All the information checks and platform discovery works out-of-the-box:

```typescript
// Checking if is running on an Android operating system
if (this.platform.is(OS.ANDROID)) {
    // ...
}

// Checking compatibility with WebKit engine
if (this.platform.isCompatibleWith(Engine.WEBKIT)) {
    // ...
}

// Printing information about the running platform
console.log('Running in the ', this.platform.engine.name, ' engine, version ', this.platform.engine.version);

// Or just using the "toString()" helper
console.log('Engine: ', this.platform.engine.toString());
console.log('Browser: ', this.platform.browser.toString());
console.log('OS: ', this.platform.os.toString());
```

### False positives

Libraries like this one deeply depend on the _[user agent](https://en.wikipedia.org/wiki/User_agent)_ content to get the data. There's nothing to do when the user "hacks" this information in its browser - when using a plugin that changes it in order to emulate another platform, for instance.

Although, if you are sure that the library is returning an weird result and apparently there is no hack to mask the browser's _user agent_ information, please feel free to [file an issue](issues/) in this repository with all the available information of your scenario, so we can check if it is a bug (no one is perfect!).

## Issues

If you want to contribute reporting issues that you have found when using the library, it will be appreciated.

## License

This library and its code is licensed under the [MIT License](LICENSE).
