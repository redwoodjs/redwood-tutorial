import { Loading, Empty, Failure, Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success articles={standard().articles} /> : null
  // NOTE: Or you can use "spreading out" the results of standard()
  // -> ...standard()
}

export default { title: 'Cells/ArticlesCell' }
