export const getImage = async () => {
  try {
    // This apiKey comes from my account in giphy.com
    const apiKey = "CerhBcp4Goh7smJ47CgCRmvaMXJXb4jK";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    return "Image does not exist";
  }
};
