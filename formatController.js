const formatter = require('./format.json')
const Math = require('math')
const yup = require('yup')

class formatController {
  static async checkQuery(query){
    try{
      const checkShape = yup.object().shape({
        source: yup.string().oneOf(['TWD','JPY','USD']).required(),
        target: yup.string().oneOf(['TWD','JPY','USD']).required(),
        amount: yup.number().min(0).required()
      })
      await checkShape.validate(query)
    }catch(err){
      throw new Error(err)
    }
  }

  static async calculate(req){
    try{
      let { source, target , amount} = req.query
      amount = this.formatStringToAmount(amount) 
      await this.checkQuery({source,target,amount})
      let formatAmount = formatter['currencies'][source][target]*amount
      formatAmount = this.formatAmountToString(formatAmount)
      return formatAmount
    }catch(err){
      throw new Error(err)
    }
  }

  static formatStringToAmount(amount){
    return +amount.slice(1).replace(/,/g,"")
  }

  static formatAmountToString(amount){
    return '$'+(Math.round(amount*100)/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
  }
}


module.exports = formatController
