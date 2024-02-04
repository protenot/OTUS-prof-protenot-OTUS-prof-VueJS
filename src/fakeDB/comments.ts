import type { Comment } from '@/models/comment.model'
export const COMMENTS: Comment[] = [
  {
    id: '15',
    idUser: '1',
    idTask: '12345',
    commentText: 'Это комментарий к задаче 12345'
  },
  {
    id: '16',
    idUser: '1',
    idTask: '12346',
    commentText: 'Это комментарий к задаче 12346'
  },
  {
    id: '17',
    idUser: '2',
    idTask: '12345',
    commentText: 'Это комментарий юзера 2 к задаче 12345'
  },
  {
    id: '18',
    idUser: '1',
    idTask: '12347',
    commentText: 'Это комментарий к задаче 12347'
  }
]
