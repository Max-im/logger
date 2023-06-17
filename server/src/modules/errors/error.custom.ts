export class ErrorCustom extends Error {
    statusCode: number;
  
    constructor(msg: string, statusCode?: number, err?: Error) {
      super(msg);
      this.statusCode = statusCode || 500;
      
      if (err) {
        console.log(err);
      }
    }
  }
  