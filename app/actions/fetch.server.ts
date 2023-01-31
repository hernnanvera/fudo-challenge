interface ExtendedRequestInit extends RequestInit {
  timeout?: number;
  throwError?: boolean;
}
const TIMEOUT = 8000;

const jsonizeData = async (response: Response) => {
  const contentType = response.headers.get("content-type");
  if (
    contentType &&
    contentType.indexOf("application/json") !== -1 &&
    /^2[0-9][0-9]/.test(response.status.toString())
  ) {
    // Is an OK response
    const data = await response.json();
    return { data, status: response.status };
  }

  return { data: response, status: response.status };
};

const _fetch: any = async (
  url: string,
  init: ExtendedRequestInit | undefined = undefined
) => {
  const timeoutTime = init?.timeout || TIMEOUT;
  const throwError = !!init?.throwError;

  if (init?.timeout) delete init.timeout;
  if (init?.throwError) delete init.throwError;

  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, timeoutTime);

  let response;

  try {
    response = await fetch(url, {
      signal: controller.signal,
      ...init,
    });
    clearTimeout(timeout);
  } catch (error: any) {
    if (error.name !== "AbortError") {
      response = new Response(null, {
        ...error.headers,
        url,
        status: 424,
        statusText: error,
      });
      clearTimeout(timeout);
    }else{
      response = new Response(null, {
        ...error.headers,
        url,
        status: 408,
        statusText: "Timeout",
      });
    }

    if (throwError) throw response;
  }

  if (response.status >= 500) {
    const textResponse = await response.text();
    response = new Response(textResponse, {
      ...response.headers,
      status: 424,
      statusText: response.statusText,
    });
    if (throwError) throw response;
  }

  if ( (response.status === 404 || response.status === 429 )  && throwError) {
    throw response;
  }

  return response;
};

const getRequest = async (url: string, init?: ExtendedRequestInit) => {
  return await _fetch(url, init);
};

const getDataRequest = async (url: string, init?: ExtendedRequestInit) => {
  const response = await getRequest(url, init);
  return await jsonizeData(response);
};


export {
  _fetch,
  getRequest,
  getDataRequest,
};
