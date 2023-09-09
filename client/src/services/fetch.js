import axios from 'axios';

export const customGet = async (fetchUrl, queryParams = {}, requestHeaders) => {
  try {
    const result = await axios.get(fetchUrl, { params: queryParams });
    return result;
  } catch (error) {
    console.log('customGet error : ', error);
  }
};

export const customPost = async (postUrl, requestBody = {}, requestHeaders) => {
  try {
    const result = await axios.post(postUrl, requestBody);
    return result;
  } catch (error) {
    console.log('customPost error : ', error);
  }
};

export const customPut = async (postUrl, requestBody = {}, requestHeaders) => {
  try {
    const result = await axios.put(postUrl, requestBody);
    return result;
  } catch (error) {
    console.log('customPut error : ', error);
  }
};

export const customDelete = async (postUrl, queryParams = {}, requestHeaders) => {
  try {
    const result = await axios.delete(postUrl, { params: queryParams });
    return result;
  } catch (error) {
    console.log('customDelete error : ', error);
  }
};

export default {
  customGet,
  customPost,
  customPut,
  customDelete,
};
