declare namespace WebdriverIO {
    interface Browser {
      getEmail(role: string, environment: string): string;
      getPassword(role: string, environment: string): string;
    }
  }