// Custom error classes will be defined here
export class ServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServiceError';
  }
}

export class AuthenticationError extends ServiceError {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class DatabaseError extends ServiceError {
  constructor(message: string) {
    super(message);
    this.name = 'DatabaseError';
  }
} 