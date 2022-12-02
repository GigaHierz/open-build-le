const sdk = require('api')('@poap/v1.0#doocamlasjns70')

require('dotenv').config()

export async function getAddressesForEvent (eventId) {
  sdk.auth(process.env.POAP_API_KEY)
  sdk.auth(process.env.POAP_AUTH_TOKEN)
  sdk
    .pOSTActionsClaimDeliveryV2({ address: eventId })
    .then(({ data }) => {
      console.log(data)
      return data
    })
    .catch(err => console.error(err))
}
