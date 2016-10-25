Books = new Mongo.Collection("books");
Products = new Mongo.Collection("products");
Videos = new Mongo.Collection("videos");

var Schemas = {};

Schemas.Book = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    copies: {
        type: SimpleSchema.Integer,
        label: "Number of copies",
        min: 0
    },
    lastCheckedOut: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    },
    Format: {
        type: [String],
        label: "Format"
    },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    }
});

Books.attachSchema(Schemas.Book);

Schemas.Products = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    itemNumber: {
        type: Number,
        label: "Item Number"
    },
    description: {
        type: String,
        label: "Brief Description",
        optional: true,
        max: 1000
    }
});

Products.attachSchema(Schemas.Products);

Schemas.Videos = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    youtubeLink: {
        type: String,
        label: "YouTube Link"
    },
    description: {
        type: String,
        label: "Brief Description",
        optional: true,
        max: 1000
    }
});

Videos.attachSchema(Schemas.Videos)

AdminConfig = {
    collections: {
        Books: {
            icon: 'book',
            tableColumns: [
                {
                    label: 'Title',
                    name: 'title'
                }, {
                    label: 'Author',
                    name: 'author'
                }
            ]
        },
        Products: {
            icon: 'gift',
            tableColumns: [
                {
                    label: 'Item Number',
                    name: 'itemNumber'
                }, {
                    label: 'Title',
                    name: 'title'
                }
            ],
            showWidget: false
        },
        Videos: {
            icon: 'youtube',
            tableColumns: [
                {
                    label: 'Title',
                    name: 'title'
                }, {
                    label: 'Link',
                    name: 'youtubeLink'
                }
            ],
            color: 'red'
        }
    }
};
