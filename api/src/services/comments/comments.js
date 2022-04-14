import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const Comment = {
  post: (_obj, { root }) =>
    db.comment.findUnique({ where: { id: root.id } }).post(),
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}
