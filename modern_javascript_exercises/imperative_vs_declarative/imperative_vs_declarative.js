// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  const newPasswords = passwords.filter((password) => password.length >= 9);
  console.log(newPasswords);
  return newPasswords;
}
