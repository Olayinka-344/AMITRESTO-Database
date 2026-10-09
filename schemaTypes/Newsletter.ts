import { defineType, defineField } from "sanity";

export const newsLetter = 
defineType({
    name: 'newsletter',
    title: 'Newsletter',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),

        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {type: 'block',},
            ],
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
    ],
})