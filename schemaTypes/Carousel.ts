import { defineType, defineField } from "sanity";

export const carouselType = 
defineType({
    name: 'carousel',
    title: 'Carousel',
    type: 'document',

    fields: [
        defineField({
            name: 'section',
            title: 'Section',
            type: 'string',
            options: {
                list: [
                    {title: 'Arrivals', value: 'arrivals'},
                    {title: 'Discount', value: 'discount'},
                ],
            },
        }),

        defineField({
            name: "discountName",
            title: "Discount Food",
            type: "string",
            hidden: ({ parent }) => parent?.section !== "discount",
        }),

         defineField({
            name: "price",
            title: "Price",
            type: "number",
            hidden: ({ parent }) => parent?.section !== "discount",
        }),

        defineField({
            name: "discountPercentage",
            title: 'Discount Percentage',
            type: 'number',
            hidden: ({ parent }) => parent?.section !== "discount",
        }),

        defineField({
            name: "discountedPrice",
            title: 'Discounted Price',
            type: 'number',
            hidden: ({ parent }) => parent?.section !== "discount",
        }),

        defineField({
            name: 'image',
            title: 'Carousel Image',
            type: 'array',
            of: [{type: 'image',},],
        }),
    ],
})