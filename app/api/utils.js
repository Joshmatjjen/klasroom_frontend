export const BASE_URL= "http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api"

export const getAuthHeader = (authToken) => {
  return {
    "Content-Type": "application/json",
    Authorization: `${authToken}`,
  };
}

export const getAuthFileHeader = (authToken) => {
  return {
    "Content-Type": "multipart/form-data",
    Authorization: `${authToken}`,
  };
}

export const getAuthCSVHeader = (authToken) => {
  return {
    "Content-Type": "application/csv",
    // "Content-Disposition": "attachment; filename=example.csv",
    "Pragma": "no-cache",
    Authorization: `${authToken}`,
  };
}

export const encodeQuery = (data) => {
  let query = ""
  for (let d in data)
       query += encodeURIComponent('filter') + '=' + 
          encodeURIComponent(data[d]) + '&'
  return query.slice(0, -1)
}