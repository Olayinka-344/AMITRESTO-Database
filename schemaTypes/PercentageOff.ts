import { defineType, defineField } from "sanity";

export const PercentageOff = 
defineType({
    name: 'percentageOff',
    title: 'Percentage Off',
    type: 'document',

    fields: [
        defineField({
            name: 'percentageName',
            title: 'Food Name',
            type: 'string',
        }),

        defineField({
            name: 'image',
            title: 'Food Image',
            type: 'image',
        }),

        defineField({
            name: 'originalPrice',
            title: 'Price',
            type: 'number',
        }),

        defineField({
            name: 'percentagePrice',
            title: 'Percentage Price',
            type: 'number',
        }),

        defineField({
            name: 'percentage',
            title: 'Percentage',
            type: 'number',
        }),

        defineField({
            name: 'quantityLeft',
            title: 'Quantity Left',
            type: 'number',
        }),
    ],
})