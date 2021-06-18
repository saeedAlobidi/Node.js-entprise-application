const _notifitication  = require( './notification' )
const _sms  = require( './sms' )



let  notifitication=_notifitication()
let sms=_sms()

const services = Object.freeze({
    notifitication,sms
   
})

module.exports= services
