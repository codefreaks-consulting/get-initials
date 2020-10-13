/**
 * Generates initials. If `lastname` is not provided, `name` is splited on space.
 *
 * @param name - `name` represents the Full Name or First name of the user.
 * @param lastname - (optional) `lastname` represents the Last Name of the user.
 * @returns name initials.
 */

const generate = (name: string, lastName?: string): string | null => {
  if (!name?.trim() && !lastName?.trim()) return null;

  let firstName = name ?? '';
  if (!lastName) {
    [firstName, lastName = ''] = name?.split(' ');
  }

  return `${firstName.substring(0, 1).toUpperCase()}${lastName
    .substring(0, 1)
    .toUpperCase()}`;
};

export { generate };
