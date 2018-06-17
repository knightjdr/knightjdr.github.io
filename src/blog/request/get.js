const Get = route => (
  new Promise((resolve, reject) => {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const url = `${process.env.REACT_APP_API_ROOT}${route}`;
    fetch(url, {
      cache: 'no-store',
      headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw Error();
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  })
);
export default Get;
