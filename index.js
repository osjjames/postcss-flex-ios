var postcss = require('postcss')

const flexProps = [
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

    for (flexProp in flexProps) {
      rule.walkDecls(flexProp, decl => {
        if (!rule.some(({prop}) => prop === `-webkit-${flexProp}`)) {
          decl.cloneAfter({prop: `-webkit-${flexProp}`})
        }
      })
    }
  }
}
