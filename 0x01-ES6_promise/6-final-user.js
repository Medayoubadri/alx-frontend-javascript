import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => {
      const array = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          array.push(result.value);
        } else {
          array.push(result.reason);
        }
      });
      return array;
    });
}
