This repository is related to https://github.com/renovatebot/renovate/issues/14703.

**Expected behavior**
* It is expected, that renovate will update the lombok version to the most recent one.
* It is also expected that the version of the parent pom is increased.
* Since this a multi module project (assuming the implementation being made in the child1 submodule), it is also expected, that the parent version in the child repository is increased. Otherwise the version bump has no effect on the project and can lead to downstream errors. I'd expect it to behave like `mvn versions:set`, which also updates submodules.

**Current behavior**
* The first two expected things are working fine. Only increasing the reference is not working. See https://github.com/loadi-dev/renovate-bumpversion-demo/pull/1
