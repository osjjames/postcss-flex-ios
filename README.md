# PostCSS Flex-iOS

Adds `-webkit` counterparts beneath all flex properties. 

This is to address [issues](https://bugs.webkit.org/show_bug.cgi?id=137730) that multiple versions of iOS browsers have with the functionality of flexbox elements.

```css
.foo {
  display: flex;
}
```
will be processed to:
```css
.foo {
  display: flex;
  display: -webkit-flex;
}
```

Other flex properties are also addressed (full list below).
```css
.foo {
  flex-direction: column;
}
```
will be processed to:
```css
.foo {
  flex-direction: column;
  -webkit-flex-direction: column;
}
```

All the properties that will be processed are:
- flex
- flex-basis
- flex-direction
- flex-flow
- flex-grow
- flex-shrink
- flex-wrap
- align-items
- justify-content

---

### License

MIT © Ollie James

[PostCSS]: https://github.com/postcss/postcss
