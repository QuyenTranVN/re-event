/** @format */

import delay from '../common/utils/util'
import { sampleData } from './sampleData'

const fetchSampleData = async () => {
  await delay(1000)
  return Promise.resolve(sampleData)
}
export { fetchSampleData }
