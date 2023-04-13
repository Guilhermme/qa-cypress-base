const address = (url, path) => {
  switch (url.toLowerCase()) {
    case 'url1':
      return `${Cypress.env('URL_1')}${path}`
    case 'url2':
      return `${Cypress.env('URL_2')}${path}`
    case 'url3':
      return `${Cypress.env('URL_3')}${path}`
    case 'url4':
      return `${Cypress.env('URL_4')}${path}`
    case 'url5':
      return `${Cypress.env('URL_5')}${path}`
    case 'url6':
      return `${Cypress.env('URL_6')}${path}`
    case 'url7' :
      return `${Cypress.env('URL_7')}${path}`
    case 'url8':
      return `${Cypress.env('URL_8')}${path}`
  }
}

const reqHeader = (params) => {
  const header = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'authorization': '',
    'User-Agent': `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/104.0.5112.79 Safari/537.36 ${Cypress.currentTest.title || 'bdd'}`
  }
  Object.keys(header).forEach(key => {
    if (params.includes(`!${key}`)) {
      delete header[key]
    } else if (key.toLowerCase() === 'authorization') {
      header[key] = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
    }
  })
  console.log(header)
  return header
}

export default {
  post: (url, path, header = [], body = {}, failOnStatusCode = false, timeout = 60000) => {
    return cy.request({
      'method': 'POST',
      'url': address(url, path),
      'headers': reqHeader(header),
      'body': body,
      'timeout': timeout,
      'failOnStatusCode': failOnStatusCode
    })
  },

  get: (url, path, header = [], failOnStatusCode = false, timeout = 60000) => {
    return cy.request({
      'method': 'GET',
      'url': address(url, path),
      'headers': reqHeader(header),
      'timeout': timeout,
      'failOnStatusCode': failOnStatusCode
    })
  },

  put: (url, path, header = [], body = {}, failOnStatusCode = false, timeout = 60000) => {
    return cy.request({
      'method': 'PUT',
      'url': address(url, path),
      'headers': reqHeader(header),
      'body': body,
      'timeout': timeout,
      'failOnStatusCode': failOnStatusCode
    })
  },

  del: (url, path, header = [], failOnStatusCode = false, timeout = 60000) => {
    return cy.request({
      'method': 'DELETE',
      'url': address(url, path),
      'headers': reqHeader(header),
      'timeout': timeout,
      'failOnStatusCode': failOnStatusCode
    })
  }
}
