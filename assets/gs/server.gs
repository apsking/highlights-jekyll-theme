/* GET returns whether or a group ID already exists. */
function doGet(e) {
    try {
        Logger.log(e); // the Google Script version of console.log see: Class Logger
        var response = idExists(e);

        return ContentService    // return json successs results
        .createTextOutput(
            JSON.stringify({ "result":"success", "data": response }))
            .setMimeType(ContentService.MimeType.JSON);
        }
    catch(error) { // if error return this
        Logger.log(error);
        return ContentService
        .createTextOutput(JSON.stringify({ "result":"error", "error": error }))
        .setMimeType(ContentService.MimeType.JSON);
    }
}

/* POST records rsvp data. */
function doPost(e) {
    try {
        Logger.log(e); // the Google Script version of console.log see: Class Logger
        console.log(e);
        recordData(e);

        return ContentService    // return json success results
            .createTextOutput(
                JSON.stringify({"result":"success",
                "data": JSON.stringify(e.parameters) }))
                .setMimeType(ContentService.MimeType.JSON);
    }
    catch(error) { // if error return this
        Logger.log(error);
        return ContentService
            .createTextOutput(JSON.stringify({"result":"error", "error": error}))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Return whether or not the id already exists in the RSVP
function idExists(e) {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = e.parameters.formGoogleSheetName || "responses";
    var sheet = doc.getSheetByName(sheetName);
    var groupId = parseInt(e.parameters.groupId);
    Logger.log(groupId);

    var range = sheet.getRange('K:K');
    var found = range.getValues()
    .map(function(num, i){
        return {
            value: num[0],
            index: i
        };
    })
    .filter(function(num) {
        return num.value === groupId;
    });

    if (found.length > 0) {
        return {
            found: true,
            count: sheet.getRange('B' + (found[0].index + 1)).getValue()
        };
    } else {
        return {
            found: false
        }
    }
}


/**
* recordData inserts the data received from the html form submission
* e is the data received from the POST
*/
function recordData(e) {
    var lock = LockService.getDocumentLock();
    lock.waitLock(30000); // hold off up to 30 sec to avoid concurrent writing

    try {
        Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it

        // select the 'responses' sheet by default
        var doc = SpreadsheetApp.getActiveSpreadsheet();
        var sheetName = e.parameters.formGoogleSheetName || "responses";
        var sheet = doc.getSheetByName(sheetName);

        var oldHeader = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        var newHeader = oldHeader.slice();
        var fieldsFromForm = getDataColumns(e.parameters);
        var now = new Date();
        var row = [Utilities.formatDate(now, 'America/Chicago', 'MM/dd/yyyy hh:mm:ss a Z')]; // first element in the row should always be a timestamp

        // loop through the header columns
        for (var i = 1; i < oldHeader.length; i++) { // start at 1 to avoid Timestamp column
            var field = oldHeader[i];
            var output = getFieldFromData(field, e.parameters);
            row.push(output);

            // mark as stored by removing from form fields
            var formIndex = fieldsFromForm.indexOf(field);
            if (formIndex > -1) {
                fieldsFromForm.splice(formIndex, 1);
            }
        }

        // set any new fields in our form
        for (var i = 0; i < fieldsFromForm.length; i++) {
            var field = fieldsFromForm[i];
            var output = getFieldFromData(field, e.parameters);
            row.push(output);
            newHeader.push(field);
        }

        // more efficient to set values as [][] array than individually
        var nextRow = sheet.getLastRow() + 1; // get next row
        sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

        // update header row with any new data
        if (newHeader.length > oldHeader.length) {
            sheet.getRange(1, 1, 1, newHeader.length).setValues([newHeader]);
        }
    }
    catch(error) {
        Logger.log(error);
    }
    finally {
        lock.releaseLock();
        return;
    }

}

function getDataColumns(data) {
    return Object.keys(data).filter(function(column) {
        return !(column === 'formDataNameOrder' || column === 'formGoogleSheetName' || column === 'formGoogleSendEmail' || column === 'honeypot');
    });
}

function getFieldFromData(field, data) {
    var values = data[field] || '';
    var output = values.join ? values.join(', ') : values;
    return output;
}

//TEST
function testExists() {
    var e = { parameters: {
        groupId: 1
    }}
    Logger.log(idExists(e));
}

//TEST
function testPOST() {

    var url = ScriptApp.getService().getUrl();

    var payload =
    {
        "name" : "labnol",
        "blog" : "ctrlq",
        "type" : "post",
    };

    var options =
    {
        "method"  : "POST",
        "payload" : payload,
        "followRedirects" : true,
        "muteHttpExceptions": true
    };

    var result = UrlFetchApp.fetch(url, options);

    if (result.getResponseCode() == 200) {

        var params = JSON.parse(result.getContentText());

        Logger.log(params.data);

    } else {
        Logger.log(result);
    }

}
