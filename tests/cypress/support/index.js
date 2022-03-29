import './commands'

//ref: https://stackoverflow.com/questions/55842707/how-can-i-define-a-custom-assertion-operator-in-cypress
chai.Assertion.addMethod("beToday", function () {
  const dateValue = this._obj
  //new chai.Assertion(dateValue).to.be.exist
  const date = dateValue instanceof Date ? dateValue : new Date(dateValue)
  const today = new Date()
  const expected = today.toISOString().substring(0, 10)
  const isOk = date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate()

  this.assert(
    isOk
    , "expected #{act} to be today"
    , expected
    , dateValue
  );
})

