export default {
  name: 'post',
  title: 'Opinion',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Hudson'
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['NBA', 'NFL', 'CFB', 'MLB', 'Culture', 'Other']
      }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'A short summary shown on the listing page (1-2 sentences)',
      type: 'text',
      rows: 3
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h2' },
            { title: 'Subheading', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' }
            ]
          }
        }
      ]
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      description: 'Optional: paste a YouTube or TikTok URL to embed a video at the top of the post',
      type: 'url'
    }
  ],
  preview: {
    select: { title: 'title', author: 'author', date: 'publishedAt' },
    prepare({ title, author, date }) {
      return {
        title,
        subtitle: `${author || 'Unknown'} · ${date ? new Date(date).toLocaleDateString() : 'Unpublished'}`
      }
    }
  }
}
