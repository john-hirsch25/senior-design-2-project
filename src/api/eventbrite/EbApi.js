import Constants from './Constants';

const generateSettings = (headers) => {
  return {
    crossDomain: true,
    headers: { 
      ...headers,
      ...Constants.getAuthHeaders(),
      'Content-Type':'application/json'
    }
  };
}

const EbApi = {
  GET: (apiEndpoint, headers = {}) => {
    return fetch(Constants.API_URL_BASE + apiEndpoint, generateSettings(headers)).then(response => response.json());
  }
}
export default EbApi;