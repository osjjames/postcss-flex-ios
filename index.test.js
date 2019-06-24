var postcss = require('postcss')

var plugin = require('./')

function run(input, output){
  return postcss([plugin()]).process(input)
    .then(function(result) {
      expect(result.css).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
    }
  )
}

it('Add "display: -webkit-flex" below "display: flex"', function() {
  return run(
    `a {
      display: flex;
    }`,
    `a {
      display: flex;
      display: -webkit-flex;
    }`
  )
})

it('Add webkit prefixed props below all flexbox props', function() {
  return run(
    `a {
      flex: 1;
      flex-basis: 200px;
      flex-direction: column;
      flex-flow: row-reverse nowrap;
      flex-grow: 2;
      flex-shrink: 2;
      flex-wrap: wrap-reverse;
      align-items: center;
      justify-content: space-between;
    }`, 
    `a {
      flex: 1;
      -webkit-flex: 1;
      flex-basis: 200px;
      -webkit-flex-basis: 200px;
      flex-direction: column;
      -webkit-flex-direction: column;
      flex-flow: row-reverse nowrap;
      -webkit-flex-flow: row-reverse nowrap;
      flex-grow: 2;
      -webkit-flex-grow: 2;
      flex-shrink: 2;
      -webkit-flex-shrink: 2;
      flex-wrap: wrap-reverse;
      -webkit-flex-wrap: wrap-reverse;
      align-items: center;
      -webkit-align-items: center;
      justify-content: space-between;
      -webkit-justify-content: space-between;
    }`
  )
})


