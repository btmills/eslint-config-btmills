const bigInt = 123n;

bigInt?.thisDoesNotExist?.(`Hello, ${null ?? 'world'}!`);
