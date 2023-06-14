export const preparePagination = (url: string, page: number, limit: number) => {
    var finalUrl = url;
    var pageFinal = page ?? 1;
    var limitFinal = limit ?? 1000;
    finalUrl += `&page=${pageFinal}`;
    finalUrl += `&limit=${limitFinal}`;
    return finalUrl.replace('?&', '?');
  };
  
  export const prepareCountryCodes = (url: string, countryCodes: any) => {
    var finalUrl = url;
    if (countryCodes?.length ?? 0 > 0) {
      const countryCodesString = countryCodes.join(',');
      finalUrl += `&countryCodes=${countryCodesString}`;
    }
    return finalUrl.replace('?&', '?');
  };
  
  export const prepareCategories = (url:any, sourceCategories: any) => {
    var finalUrl = url;
    if (sourceCategories?.length ?? 0 > 0) {
      const sourceCategoriesString = sourceCategories.join(',');
      finalUrl += `&sourceCategories=${sourceCategoriesString}`;
    }
    return finalUrl.replace('?&', '?');
  };
  
  export const prepareIsActive = (url: any) => {
    var finalUrl = url;
    finalUrl += `&isActive=${true}`;
    return finalUrl.replace('?&', '?');
  };
  
  export const prepareFormData = (object: any) => {
    const formData = new FormData();
    Object.keys(object).forEach(key => {
      if (Array.isArray(object[key])) {
        object[key].forEach((item: any) => {
          formData.append(`${key}[]`, item);
        });
      } else {
        formData.append(key, object[key]);
      }
    });
    return formData;
  };
  