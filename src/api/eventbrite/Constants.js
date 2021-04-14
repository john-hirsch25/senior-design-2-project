const Constants = {
  API_KEY: 'GCSM7TCFOHX3DI75XB',
  PRIVATE_TOKEN: 'NX2XU63NLQCDU5YE3XEI',
  ORGANIZATION_ID: '532544203149',
  API_URL_BASE: 'https://www.eventbriteapi.com/v3/',
  getAuthHeaders: () => {
    return { 
      Authorization: `Bearer ${Constants.PRIVATE_TOKEN}`
    }
  }
}

export default Constants;