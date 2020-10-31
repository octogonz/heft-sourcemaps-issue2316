// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { TestClass } from "heft-web-rig-library-test";

describe("ToggleSwitch", () => {
  it("can be tested", () => {
    const testClass = new TestClass();
    expect(() => testClass.test()).not.toThrow();
  });
});
