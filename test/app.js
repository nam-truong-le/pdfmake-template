$(function() {
    $("#test").click(function() {
        pdfMake.createPdfFromTemplate('template.yaml', data).then(doc => {
            doc.download('test.pdf');
        });
    });
});

let data = {
    hello: 'Hello World!',
    name: {
        first: 'First name',
        last: 'Last name'
    },
    items: [
        {name: 'Item 1'},
        {name: 'Item 2'}
    ]
}
