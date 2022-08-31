const bigInt = 123n;

bigInt?.thisDoesNotExist?.(`Hello, ${bigInt.maybeNull ?? 'world'}!`);
