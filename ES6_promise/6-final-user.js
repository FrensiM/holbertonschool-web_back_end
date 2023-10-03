import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [];

    // Call signUpUser and push its promise to the promises array
    promises.push(signUpUser(firstName, lastName));

    // Call uploadPhoto and push its promise to the promises array
    promises.push(uploadPhoto(fileName));

    // Use Promise.allSettled to wait for all promises to settle
    return Promise.allSettled(promises).then(results => {
        return results.map(result => ({
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : result.reason,
        }));
    });
}
