import os from "os";
import _ from "lodash";
import uuid from "uuid";

import sinon, { SinonSandbox, SinonStub } from "sinon";
import { Prod } from "../../lib/utils/prod";

describe.only("prod test", function () {
  let sandbox: SinonSandbox;
  let video: SinonStub;
  let tmpdir: SinonStub;

  this.beforeEach(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(_, "concat").returns([]);
    sandbox.stub(uuid, "v4").returns("stubbed-uuid");
    tmpdir = sandbox.stub(os, "tmpdir");
    tmpdir.returns("sweet temp dir");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("can stub successfully", async () => {
    await new Prod().run("the best URL");
  });
});
