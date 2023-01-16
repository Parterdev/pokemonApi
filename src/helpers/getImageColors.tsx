import ImageColors from "react-native-image-colors";

interface Props {
  key: string,
  uri: string,
}

export const getImageColors = async (key: string, uri: string) => {

  let background: string|undefined = '';

  const result = await ImageColors.getColors(uri, {
    fallback: '#bdbdbd',
    cache: true,
    key: key,
  });

  if(result) {
    if(result.platform === 'android') {
      background = result.dominant;
    }else  if(result.platform === 'ios') {
      background = result.background;
    }else {
      console.log('Unexpected platform key');
    }
  }

  return {
    background
  }

}