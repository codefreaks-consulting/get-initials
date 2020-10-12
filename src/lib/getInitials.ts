/**
 * Generates initials. If `lastname` is not provided, `name` is splited on space.
 *
 * @param name - `name` represents the Full Name or First name of the user.
 * @param lastname - (optional) `lastname` represents the Last Name of the user.
 * @returns name initials.
 */

const generate = (name: string, lastName?: string) => {
  if (!name && !lastName) return null
  let firstName = name
  if (!lastName) {
    [firstName, lastName] = name.split(" ")
  }

  let firstNameInitial = "", lastNameInitial = ""
  if (firstName) {
    firstNameInitial = firstName.substring(0, 1).toUpperCase()
  }
  if (lastName) {
    lastNameInitial = lastName.substring(0, 1).toUpperCase()
  }

  return `${firstNameInitial ?? ""}${lastNameInitial ?? ""}`
}

export { generate }
