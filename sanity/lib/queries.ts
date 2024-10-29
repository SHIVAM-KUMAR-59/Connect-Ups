import { defineQuery } from 'next-sanity'

export const STARTUP_QUERY =
  defineQuery(`*[_type=="startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order( _createdAt desc) {
  _id,
    slug,
    author -> {
      _id, name, image, bio
    },
    title,
    _createdAt,
    views,
    description,
    category,
    image
}`)
