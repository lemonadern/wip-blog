import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <PostTitle>{title}</PostTitle>
      <div className="m-5 mb-10 flex justify-end">
        <span className="pr-1">公開日</span>
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}

export default PostHeader
