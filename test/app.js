$(function() {
    $("#test").click(function() {
        pdfMake.createPdfFromTemplate('template.yaml', data).then(doc => {
            doc.download('test.pdf');
        });
    });
});

let data = {
    hello: 'Hello World!'
}
