import { defineType, defineField } from "sanity";

export const PrivacyPolicy = 
defineType({
    name: 'privacyPolicy',
    title: 'Privacy Policy',
    type: 'document',

   fields: [
    defineField({
        name: 'ptitle',
        title: 'Title',
        type: 'string',
    }),

    defineField({
        name: 'content',
        title: 'content',
        type: 'array',
        of: [
            {type: 'block',},
        ],
    }),
   ],
})