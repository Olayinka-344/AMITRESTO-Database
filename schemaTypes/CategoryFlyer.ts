import { defineType, defineField } from "sanity";

export const categoryFlyer = defineType({
    name: 'categoryFlyer',
    title: 'Category Flyer',
    type: 'document',

    fields: [
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: 'Main Course', value: 'main-course'},
                    {title: 'Appetizers', value: 'appetizer'},
                    {title: 'Soups', value: 'soup'},
                    {title: 'Salads', value: 'salad'},
                    {title: 'Sides', value: 'side'},
                    {title: 'Fast-Foods', value: 'fast-food'},
                    {title: 'Desserts', value: 'dessert'},
                    {title: 'Soft-Drinks', value: 'soft-drink'},
                    {title: 'Coffee', value: 'coffee'},
                    {title: 'Smoothie', value: 'smoothie'},
                    {title: 'Cocktails', value: 'cocktail'},
                ],
            },
        }),

        defineField({
                name: 'flyerImage',
                title: 'Flyer Image',
                type: 'image',
        }),
    ],
});