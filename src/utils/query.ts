export function buildQueryString(options?: Record<string, string | number>) {
  if (!options) {
    return "";
  }

  const searchParams = new URLSearchParams();

  for (const key in options) {
    if (options[key] != undefined) {
      searchParams.append(key, `${options[key]}`);
    }
  }

  return `?${searchParams}`;
}

export function extractQueryParams(pathOrParamString: string) {
  if (!pathOrParamString || !pathOrParamString.includes("=")) {
    return {};
  }

  let paramString;

  const splitIndex = pathOrParamString.indexOf("?");

  if (splitIndex < 0) {
    paramString = pathOrParamString;
  } else {
    paramString = pathOrParamString.substring(splitIndex + 1);
  }

  const searchParams = new URLSearchParams(paramString);

  const params = {} as Record<string, string | number>;

  searchParams.forEach(
    (value, key) =>
      (params[key] = isNaN(Number(value)) || value === "" ? value : Number(value)),
  );

  return params;
}

export function combineQueryParams(
  paramString: string,
  replacement: Record<string, string | number>,
) {
  const searchParams = new URLSearchParams(paramString);
  for (const key in replacement) {
    const value = replacement[key];
    if (value == undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, `${value}`);
    }
  }
  return searchParams;
}
