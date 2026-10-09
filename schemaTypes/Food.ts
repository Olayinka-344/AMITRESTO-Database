import { defineType, defineField } from "sanity";

export const foodType = defineType({
    name: 'food',
    title: 'Food',
    type: 'document',

    fields: [
        defineField({
            name: 'name',
            title: 'Food Name',
            type: 'string',
        }),

        defineField({
            name: 'image',
            title: 'Food Image',
            type: 'image',
        }),

        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),

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
                    {title: 'Chef-Special', value: 'chef-special'},
                ],
            },
        }),

        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    {title: 'Available', value: 'available'},
                    {title: 'Unavailable', value: 'unavailable'},
                ],
            },
        }),
    ],
})