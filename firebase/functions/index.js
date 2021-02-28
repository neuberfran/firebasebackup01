
module.exports = {
  // Device Cloud Functions
  deviceConfiguration: require('./device-cloud/device-configuration'),
  deviceState: require('./device-cloud/device-state'),
  onlineState: require('./device-cloud/online-state'),
  registerDevice: require('./device-cloud/register-device'),
  // Smart Home Functions
  token: require('./smart-home/token'),
  fulfillment: require('./smart-home/fulfillment'),
  reportState: require('./smart-home/report-state'),
  syncOnAdd: require('./smart-home/request-sync').add,
  syncOnRemove: require('./smart-home/request-sync').remove,
};