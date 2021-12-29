import { silenceDebugMessages } from '../helpers/setup'
import * as Index from '../../src/index'

silenceDebugMessages()

describe('Index', () => {
  it('exists', () => {
    expect(Object.keys(Index).sort()).toEqual([
      'acl',
      'aclControl',
      'create',
      'dom',
      'icons',
      'infiniteMessageArea',
      'initHeader',
      'language',
      'log',
      'matrix',
      'media',
      'messageArea',
      'ns',
      'pad',
      'participation',
      'preferences',
      'rdf',
      'solidLogicSingleton',
      'store',
      'style',
      'table',
      'tabs',
      'utils',
      'versionInfo',
      'widgets'
    ])
  })
  // make sure none of them are undefined:
  Object.keys(Index).forEach(key => expect(Index[key] && key).toEqual(key))
})
