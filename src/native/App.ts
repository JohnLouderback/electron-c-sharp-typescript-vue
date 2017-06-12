const edge : any = require('electron-edge');
import * as os from 'os';

const assemblyPath = 'dotnet/DotNet.Windows/bin/Debug/DotNet.Windows.dll';
const appTypeName = 'DotNet.Windows.App';

const displayMessage = edge.func({
    assemblyFile: assemblyPath,
    typeName: appTypeName,
    methodName: 'DisplayMessage' // This must be Func<object,Task<object>>
});

interface IResult<T> {
  result : T;
}

export enum Platforms {
  Windows,
  Mac,
  Linux
}

export default class App {

  static get platform() : Platforms  {
    switch (os.platform()) {
      case 'darwin':
        return Platforms.Mac;
      case 'win32':
        return Platforms.Windows;
      default:
        return Platforms.Linux;
    }
  }

  static async displayMessage(message : string) : Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      displayMessage(message, (error : any, result : IResult<boolean>) => {
        resolve(result.result);
      });
    });
  }
}
