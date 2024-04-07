import { defaultClient } from '@lib/client';
import { Image } from 'react-native-image-crop-picker';

export const uploadImage = async (image: Image) => {
  const formData = new FormData();
  formData.append('image', {
    uri: image.path,
    type: image.mime,
    name: image.filename || new Date().toString(),
  } as any);
  const res = await defaultClient.post<{ url: string }>(
    '/upload/image',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      transformRequest: (data, _) => data,
    },
  );
  return res.data;
};
