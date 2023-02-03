import { Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

export const success = () => {
  return Success ? <Success articles={standard().articles} /> : null
}

export default { title: 'Cells/ArticlesCell' }