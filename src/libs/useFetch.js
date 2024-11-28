 export const helperHttp = () => {
  const customFetch = (endpoint, options) => {
     let defaultHeaders =  {
      "content-type": "application/json"
     }
    const controller = new AbortController();
    options.signal = controller.signal

    options.method = options.method || "GET";

    options.credentials= "include"
    
   options.headers = options.headers ? { ...defaultHeaders, ...options.headers } : defaultHeaders;

    options.body = JSON.stringify(options.body)

    if (!options.body) delete options.body

    setTimeout(() => controller.abort(), 2000)
    
    return fetch(endpoint, options).then(res=> res.ok ? res.json() : Promise.reject({error: true, status: res.status || "00", statusText: res.statusText || "Ocurrio un error!"})).catch(err=> err)
  }

   const get = (url, options = {}) => {
   return customFetch (url, options)
   }
   const post = (url, options = {}) => {
      options.method= "POST"
      return customFetch (url, options)
    }
    const put = (url, options={}) => {
      options.method= "PUT"
      return customFetch (url, options)
    }
    const del = (url, options={}) => {
     options.method= "DEL "
   return customFetch (url, options)
  }
  
  return {get,post,put,del}
}