const msg = {
  errors: {
    password: {
      name: 'ValidatorError',
      message: 'Please provide password',
      properties: {
        message: 'Please provide password',
      },
      kind: 'required',
      path: 'password',
    },
  },
  message: 'neka poruka',
};

console.log(Object.values(msg.errors));
