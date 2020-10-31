// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { TestClass } from "../index";

describe("An example test", () => {
  it("Is able to import things", () => {
    const testClass: TestClass = new TestClass();
    expect(() => testClass.test()).not.toThrow();
  });
});
