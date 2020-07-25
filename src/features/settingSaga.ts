import { PayloadAction } from '@reduxjs/toolkit'
import { call,put,select,takeLatest } from 'redux-saga/effects'

import { FetchStatusCode } from '@/api'
import { IgnoredFile } from '@/domain/ignoreFile'
import { PULL_REQUEST_REGEX } from '@/domain/pullRequest'
import { currentPath,redirect } from '@/utils/history'
import { STORAGE_KEY,storageUtil } from '@/utils/storage'
import { isMatchedPattern } from '@/utils/validation'

import { settingActions, settingSelector } from './settingSlice'

function* saveUserToken({payload}: PayloadAction<string>) {
  yield call(
    storageUtil.saveData,
    STORAGE_KEY.GITHUB_TOKEN,
    payload,
  )

  yield call(redirect, '/')
}

export function* watchSaveUserToken() {
  yield takeLatest(
    settingActions.saveToken,
    saveUserToken,
  )
}

function* getCurrentPath() {
  const path = yield call(currentPath)

  if (isMatchedPattern(PULL_REQUEST_REGEX, path)) {
    const pathName = path.split('/')
    yield put(
      settingActions.setPathSuccess({
        value: {
          orgName: pathName[3],
          repository: pathName[4],
          prNumber: pathName[6],
        },
        fetchState: FetchStatusCode.OK,
      }),
    )

    return
  }

  yield put(
    settingActions.setPathFail(FetchStatusCode.UNKNOWN),
  )
}

export function* watchRequestPath() {
  yield takeLatest(
    settingActions.requestPath,
    getCurrentPath,
  )
}

function* syncIgnoreFileFromStorage() {
  console.log('Saga called')
  const initialFileList = yield select(
    settingSelector.ignoreFileList,
  )
  console.log('@@ initialFileList', initialFileList)
  const storedIgnoreList = yield call(
    storageUtil.getData,
    STORAGE_KEY.IGNORE_FILE_LIST,
  )
  console.log('@@ storedIgnoreList', storedIgnoreList)
  if (!storedIgnoreList) {
    console.log('@@ isEmpty')
    yield call(
      storageUtil.saveData,
      STORAGE_KEY.IGNORE_FILE_LIST,
      initialFileList,
    )

    return
  }

  yield put(
    settingActions.setIgnoreFileListSuccess(
      storedIgnoreList,
    ),
  )
}

export function* watchSyncIgnoreFileList() {
  yield takeLatest(
    settingActions.syncIgnoreFileList,
    syncIgnoreFileFromStorage,
  )
}

function* addIgnoreFileToStorage({payload}: PayloadAction<IgnoredFile>) {
  const existFileList: IgnoredFile[] = yield select(
    settingSelector.ignoreFileList,
  )
  yield call(
    storageUtil.saveData,
    STORAGE_KEY.IGNORE_FILE_LIST,
    existFileList.concat(payload),
  )
}

export function* watchAddIgnoreFile() {
  yield takeLatest(
    settingActions.addIgnoreFile,
    addIgnoreFileToStorage,
  )
}
