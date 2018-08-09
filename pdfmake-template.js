pdfMake.createPdfFromTemplate = function(path, data) {
    return Promise.resolve(jQuery.get(path)).then(templateText => {
        const template = Handlebars.compile(templateText);
        const result = template(data);
        return Promise.resolve(pdfMake.createPdf(jsyaml.load(result)));
    });
}
