import * as _ from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs = _.cloneDeep(env)
  Object.entries(envs).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') envs[key] = value === "true" ? true : false
    else if (/^\d+$/.test(value)) envs[key] = Number(value)
    else if (value === 'null') envs[key] = null
    else if (value === 'undefined') envs[key] = undefined

  })
  return envs as ViteEnv
}