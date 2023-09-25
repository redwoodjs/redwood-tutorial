import { render } from '@redwoodjs/testing/web'

import CommentForm from './CommentForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentForm />)
    }).not.toThrow()
  })
})
