// import './components/component1'
import './components/component2'
import './components/component3'

console.info('This is entry1')

import('./components/component4')
  .then(_ => {
    console.info('import(\'./components/component4\') success')
  })
  .catch(err => console.error(err))
