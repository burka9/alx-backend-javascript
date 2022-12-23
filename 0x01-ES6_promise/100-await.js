import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user = null;
  let photo = null;

  try {
    user = await createUser();
    photo = await uploadPhoto();
  } catch (err) {
  }

  return { photo, user };
}
