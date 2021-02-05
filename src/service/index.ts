interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function SignIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'hjgfhjzgluusdfggsageaiuguujjyflhv',
        user: {
          name: 'Nome',
          email: 'email@derv.com',
        },
      });
    }, 2000);
  });
}
