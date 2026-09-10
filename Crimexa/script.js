// PAGE NAVIGATION

function showPage(pageId, button) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";

    document.querySelectorAll(".nav-btn").forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}


function showPageById(pageId) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";

    document.querySelectorAll(".nav-btn").forEach(function(btn) {
        btn.classList.remove("active");
    });
}


// NOTIFICATION

function showNotification() {
    alert("3 new investigation alerts detected.");
}


// CASE DETAILS

function caseDetails(caseId) {
    alert(
        "Case: " + caseId +
        "\n\nStatus: Under Investigation" +
        "\nPriority: High" +
        "\nAI Risk Analysis: Active"
    );
}


// ACTIVITY

function activityInfo(type) {
    alert(
        type +
        "\n\nAI system detected a new investigation event."
    );
}


// SUSPECT SEARCH

function searchSuspects() {

    let input = document.getElementById("suspectSearch");
    let filter = input.value.toLowerCase();

    let rows = document.querySelectorAll("#suspectTable tr");

    rows.forEach(function(row) {

        let text = row.innerText.toLowerCase();

        if (text.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });
}


// NETWORK NODE

function nodeInfo(name) {

    alert(
        "Suspect: " + name +
        "\n\nRelationship analysis available." +
        "\nRisk assessment: AI generated demo data."
    );
}


// DOCUMENT ANALYSIS

function analyzeDocument() {

    let file = document.getElementById("documentInput").files[0];

    if (!file) {
        alert("Please select a document first.");
        return;
    }

    document.getElementById("documentResult").innerHTML =
        "<h3>⚠️ Suspicious Document Detected</h3>" +
        "<p>Confidence: <b>87%</b></p>" +
        "<p>Possible text/layout inconsistency detected.</p>" +
        "<p>Missing or inconsistent field detected.</p>" +
        "<br><small>Demo analysis only — not a real forensic verification.</small>";
}


// REPORT

function generateReport() {

    document.getElementById("reportResult").innerHTML =
        "<h3>📊 Investigation Report Generated</h3>" +
        "<p>Total Suspects: 148</p>" +
        "<p>Active Cases: 24</p>" +
        "<p>Network Links: 327</p>" +
        "<p>Suspicious Documents: 17</p>" +
        "<p>High Risk Suspects: 32</p>" +
        "<br><b>Report generated successfully.</b>";
}