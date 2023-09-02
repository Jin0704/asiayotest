const formatController = require('./formatController')

describe('測試formatController',function(){
  test('測試query中的amount是否有被轉型成數字',function(){
    expect(typeof formatController.formatStringToAmount('$1241.20')).toBe("number")
  })
  test('測試匯率計算後的資料是否有被轉型成字串',function(){
    expect(typeof formatController.formatAmountToString(formatController.formatStringToAmount('$1241.20'))).toBe("string")
  })
})