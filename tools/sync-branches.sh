#!/usr/bin/env sh

set -e

function cascade_changes() {

  if [ $1 == "--skip-tests" ]; then
    local SKIP_TESTS=true
    shift
  fi

  local PARENT=$1
  shift

  for CURRENT in $*; do

    git checkout $CURRENT
    git merge --no-edit $PARENT
    [ "$SKIP_TESTS" = "true" ] || yarn test

    PARENT="$CURRENT"

  done

  git push --all

}

cascade_changes --skip-tests \
  master \
  angular-boilerplate \
  angular-jest-boilerplate \
  angular-jest-mocking-service-1 \
  angular-jest-mocking-service-2
