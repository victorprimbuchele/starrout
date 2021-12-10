import { observable, action } from 'mobx'
// useStrict(true)

const counterStore = observable({
  count: 1,
  decCounter: action('dsd', function () {
    counterStore.count -= 1
  }),
  incCounter: action(function () {
    counterStore.count += 1
  }),
})
export default counterStore
