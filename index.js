var postcss = require('postcss')

var flexProps = [
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'align-items',
  'justify-content'
]

module.exports = postcss.plugin('postcss-flex-safari', () => css => {
  css.walkRules(rule => {
    rule.walkDecls('display', decl => {
      const {value} = decl
      if (/^flex$|^inline-flex$/.test(value)) {
        decl.cloneAfter({value: '-webkit-' + value})
      }
    })

    for (var i = 0; i < flexProps.length; i++) {
      console.log(flexProps[i])
      rule.walkDecls(flexProps[i], decl => {
        if (!rule.some(({prop}) => prop === `-webkit-${flexProps[i]}`)) {
          decl.cloneAfter({prop: `-webkit-${flexProps[i]}`})
        }
      })
    }
  })
})
