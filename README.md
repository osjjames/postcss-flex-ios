# PostCSS Flex Safari [![Build Status][ci-img]][ci]

[PostCSS] plugin that includes `-webkit-` prefixes for all flexbox properties to ensure correct functionality in Safari.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/osjjames/postcss-flex-safari.svg
[ci]:      https://travis-ci.org/osjjames/postcss-flex-safari

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-flex-safari') ])
```

See [PostCSS] docs for examples for your environment.
