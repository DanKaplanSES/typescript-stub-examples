import * as _ from "lodash";
import * as os from "os";
import { v4 } from "uuid";

export class Prod {
  async run(url: string): Promise<void> {
    console.log("can I stub os.tmpdir()? ", os.tmpdir() === "sweet temp dir");
    console.log(
      "can I stub _.concat()? ",
      _.concat(["a"], ["b"]).length === 0 ? true : _.concat(["a"], ["b"])
    );
    console.log(
      "can I stub uuid.v4()? ",
      v4() === "stubbed-uuid" ? true : v4()
    );
  }
}
