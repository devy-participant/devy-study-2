/**
 * Collection of logging methods. Useful for making the output easier to read and understand.
 *
 * @param msg
 */
export default class Log {
  public static debug(msg: string) {
    console.log("<D>: " + msg);
  }
  public static trace(msg: string) {
    console.log("<T>: " + msg);
  }

  public static info(msg: string) {
    console.log("<I>: " + msg);
  }

  public static warn(msg: string) {
    console.error("<W>: " + msg);
  }

  public static error(msg: string) {
    console.error("<E>: " + msg);
  }
}
